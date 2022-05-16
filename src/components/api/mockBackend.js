// const projectKey = "projectsData";
// const sequenceKey = "sequencesData";
// const shotKey = "shotsData";

const initStorage = (key, value) => {
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

initStorage("projectsData", []);
initStorage("sequencesData", []);
initStorage("assetsData", []);
initStorage("shotsData", []);

initStorage("sequenceID", 100000);
initStorage("assetID", 100000);
initStorage("shotID", 10000);

// export const getProjectData = () =>
//   JSON.parse(sessionStorage.getItem(projectKey));

// export const getSequenceData = () => {
//   return JSON.parse(sessionStorage.getItem(sequenceKey));
// };

// export const getShotData = () => JSON.parse(sessionStorage.getItem(shotKey));

export const getProjectData = () => {
  return JSON.parse(sessionStorage.getItem("projectsData"));
};

export const getSequenceData = () => {
  return JSON.parse(sessionStorage.getItem("sequencesData"));
};
export const getAssetData = () => {
  return JSON.parse(sessionStorage.getItem("assetsData"));
};
export const getShotData = () => {
  return JSON.parse(sessionStorage.getItem("shotsData"));
};

export const saveSequence = (data) => {
  const lastSeqID = sessionStorage.getItem("sequenceID");
  data.id = parseInt(lastSeqID) + 1;
  sessionStorage.setItem("sequenceID", JSON.stringify(data.id));
  sessionStorage.setItem(
    "sequencesData",
    JSON.stringify([...getSequenceData(), data])
  );

  return data;
};

export const saveAsset = (data) => {
  const lastAssetID = sessionStorage.getItem("assetID");
  data.id = parseInt(lastAssetID) + 1;
  sessionStorage.setItem("assetID", JSON.stringify(data.id));
  sessionStorage.setItem(
    "assetsData",
    JSON.stringify([...getAssetData(), data])
  );

  return data;
};

export const saveShot = (data) => {
  const lastShotID = sessionStorage.getItem("shotID");
  data.id = parseInt(lastShotID) + 1;
  sessionStorage.setItem("shotID", JSON.stringify(data.id));
  sessionStorage.setItem("shotsData", JSON.stringify([...getShotData(), data]));

  return data;
};
