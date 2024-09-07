import { useState } from "react";

export const TextIn = () => {
  const [str, setStr] = useState("");
  const chanStr = (e) => {
    setStr(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={chanStr} value={str} />
      <p id="eleP">{str}</p>
    </div>
  );
};

export default TextIn;
