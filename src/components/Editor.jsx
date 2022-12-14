import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import axios from "axios";

function Editor() {
  const [wrongCode, setWrongCode] = useState("// Paste The Wrong Code Here");
  const [correctCode, setCorrectCode] = useState(
    "// Paste The Correct Code Here"
  );
  const [quesID, setQuesID] = useState("");
  const [stressTestButton, setStressTestButton] = useState(false);
  const toggleStressTestButton = async () => {
    setStressTestButton(true);
    await axios
      .post("https://stresstest.loca.lt/stressTest", {
        correctCode: correctCode,
        wrongCode: wrongCode,
        quesID: quesID,
      })
      .then((response) => {
        console.log("Data sent");
        setStressTestButton(false);
        alert(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-evenly mt-10 ">
        <CodeEditor code={wrongCode} setCode={setWrongCode} />
        <CodeEditor code={correctCode} setCode={setCorrectCode} />
      </div>
      <div className="flex justify-center mt-10 -ml-44">
        <input
          type="text"
          placeholder="qustion ID here, e.g : 4A"
          className="input input-bordered input-success w-full max-w-xs mx-4"
          onChange={(e) => {
            setQuesID(e.target.value);
          }}
        />
        <button
          className={`btn btn-outline btn-success mx-4 ${
            stressTestButton ? "loading" : ""
          }`}
          onClick={toggleStressTestButton}
        >
          Stress Test
        </button>
      </div>
    </div>
  );
}

export default Editor;
