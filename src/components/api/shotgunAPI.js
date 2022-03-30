import React, { PropTypes } from "react";
import axios from "axios";
import CONSTS from "../constants";

const config = {
  headers: {
    Authorization: "Basic " + CONSTS.SHOTGUN_AUTH_STRING,
  },
};

/**
 * The Shotgun Wrapper API for fetching data we require directly from shotgun.
 */
class ShotgunApi {
  static getProjects() {
    const requestUrl =
      CONSTS.SHOTGUN_API_BASE +
      'Project?q=[["sg_status","is","Active"]]&fields=name,image';
    return axios
      .get(requestUrl, config)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("Error fetching projects from shotgun " + err);
        return err;
      });
  }

  /**
   * Gets all the sequences for a show
   * @returns {Promise.<T>}
   */
  static getSequences(showID) {
    console.log(showID);
    // First get all the sequences belonging to this show
    const requestUrl =
      CONSTS.SHOTGUN_API_BASE +
      'Sequence?q=[["project.Project.id", "is", ' +
      showID +
      "]]&fields=code";
    return axios
      .get(requestUrl, config)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("Error fetching shot info from shotgun " + err);
        return err;
      });
  }

  static getShotsForSequence(projId, sequence) {
    // First get all the sequences belonging to this show
    const requestUrl = `${CONSTS.SHOTGUN_API_BASE}Shot?q=[["project.Project.id","is",${projId}],["sg_sequence.Sequence.id","is",${sequence}]]&fields=code,sg_sequence,sg_delivery_date,image`;
    return axios
      .get(requestUrl, config)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error fetching sequence info from shotgun " + err);
        return err;
      });
  }

  /**
   * Fetches the sequences and shots from ShotgunApi for a particular show. Returns an object with the Sequences as the keys and the shots as the values
   * @returns {<sequence>: [<shots>]}
   */
  static getShotsForSequences2(projId, sequences) {
    // We create an array of all the sequences belonging to the show, whose shots need to be fetched.
    let urlArray = [];
    sequences.map(function (sequence) {
      //   urlArray.push(
      //     CONSTS.SHOTGUN_API_BASE +
      //       'Shot?q=[["project.Project.id", "is", ' +
      //       projId +
      //       '],["sg_sequence.Sequence.id","is",' +
      //       sequence +
      //       "]]&fields=code,sg_sequence,sg_delivery_date,image"
      //   );

      urlArray.push(
        `${CONSTS.SHOTGUN_API_BASE}Shot?q=[["project.Project.id","is",${projId}],["sg_sequence.Sequence.id","is",${sequence}]]&fields=code,sg_sequence,sg_delivery_date,image`
      );
    });

    // We then batch fetch that data as it is faster and more efficient
    let promiseArray = urlArray.map((url) => axios.get(url, config));
    return axios.all(promiseArray).then(function (response) {
      let SeqShots = {};

      let allSequencesShots = response.map((r) => r.data);
      // Now we map individual shots to each sequence as that's our desired output.
      allSequencesShots.map(function (shots) {
        if (shots.length > 0) {
          // We need to grab the sequence info from the shot, not the most elegant way but we have to go with it because of the way the data is returned to us from shotgun.
          const curSequence = shots[0]["sg_sequence"]["name"];
          SeqShots[curSequence] = shots;
        }
      });
      return SeqShots;
    });
  }

  /**
   * Gets information about a single Shot
   * @param shotId
   * @returns {Promise.<T>}
   */
  static getShotInfo(shotId) {
    let showName = window.localStorage.getItem(CONSTS.SHOW_STORAGE_KEY);
    showName = showName ? showName.toUpperCase() : "";
    const requestUrl =
      CONSTS.SHOTGUN_API_BASE +
      'Shot?q=[["project.Project.name", "is", "' +
      showName +
      '"],["code","is","' +
      shotId +
      '"]]&fields=image,description';
    return axios
      .get(requestUrl, config)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("Error fetching shot info from shotgun " + err);
        return err;
      });
  }

  /**
   * Fetches all the shot images in batch
   * @param shots
   * @returns {Promise.<T>}
   */
  static getShots(shots) {
    // We create an array of all the sequences belonging to the show, whose shots need to be fetched.
    let urlArray = [];
    shots.map(function (shot) {
      urlArray.push(
        CONSTS.SHOTGUN_API_BASE + "Shot/" + shot["id"] + "?fields=image,code"
      );
    });

    // We then batch fetch that data as it is faster and more efficient
    let promiseArray = urlArray.map((url) => axios.get(url, config));
    return axios
      .all(promiseArray)
      .then(function (response) {
        return response.map((r) => r.data);
      })
      .catch((err) => {
        console.log("Error fetching shots info from shotgun " + err);
        return err;
      });
  }

  /**
   * Gets the project basic info
   * @returns {Promise.<T>}
   */
  static getProjectInfo() {
    let showName = window.localStorage.getItem(CONSTS.SHOW_STORAGE_KEY);
    showName = showName ? showName.toUpperCase() : "";
    const requestUrl =
      CONSTS.SHOTGUN_API_BASE +
      'Project?q=[["name","is", "' +
      showName +
      '"]]&fields=image,sg_type,sg_delivery_date';
    return axios
      .get(requestUrl, config)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("Error fetching project info from shotgun " + err);
        return err;
      });
  }
}

export default ShotgunApi;
