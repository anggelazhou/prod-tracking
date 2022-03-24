import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./sequenceList.css";
import Sequence from "../Sequence";
import { useSelector } from "react-redux";

const SequenceList = () => {
  const sequences = useSelector((store) => {
    return store.sequences.sequences;
  });
  return (
    <div className="sequences">
      {sequences &&
        sequences.map((sequence) => {
          return (
            <Sequence
              sequence={sequence}
              key={sequence.id}
              className="sequence"
            />
          );
        })}
    </div>
  );
};

export default SequenceList;
