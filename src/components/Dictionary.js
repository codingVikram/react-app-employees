import { useState, useEffect } from "react";

export default function Dictionary() {
  const [word, SetWord] = useState("");
  const [word2, SetWord2] = useState("");

  useEffect(() => {
    console.log("State Updated " + word);
  }, [word]);

  useEffect(() => {
    console.log("State Updated " + word2);
  }, [word2]);

  // limit what state useEffect cares about --> dependency array

  // no dependency array --> update for any state state change

  // empty dependency array --> execute once
  // passing in data --> only execute when those state variables are changed

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          SetWord(e.target.value);
        }}
      />
      <h2> Let's get the deifinition for {word} </h2>
      <input
        type="text"
        onChange={(e) => {
          SetWord2(e.target.value);
        }}
      />
      <h2> Let's get the deifinition for {word2} </h2>
    </>
  );
}
