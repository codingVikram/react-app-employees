import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary() {
  const [word, SetWord] = useState("");
  const navigate = useNavigate();

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
      <button
        onClick={() => {
          navigate("/definition/" + word, { replace: true });
        }}
      >
        Search
      </button>
    </>
  );
}
