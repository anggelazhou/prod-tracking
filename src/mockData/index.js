import projectTestData from "./projects.json";
import seqTestData from "./sequences.json";
import shotTestData from "./shots.json";

// const projectKey = "projectsData";
// const sequenceKey = "sequencesData";
// const shotKey = "shotsData";

const initStorage = (key, value) => {
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

initStorage("projectsData", projectTestData);
initStorage("sequencesData", seqTestData);
initStorage("shotsData", shotTestData);

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
export const getShotData = () => {
  return JSON.parse(sessionStorage.getItem("shotsData"));
};

export const saveProject = (data) => {
  sessionStorage.setItem(
    "projectsData",
    JSON.stringify([...getProjectData(), data])
  );
};

export const saveSequence = (data) => {
  sessionStorage.setItem(
    "sequencesData",
    JSON.stringify([...getSequenceData(), data])
  );
};

export const saveShot = (data) => {
  sessionStorage.setItem("shotsData", JSON.stringify([...getShotData(), data]));
};
