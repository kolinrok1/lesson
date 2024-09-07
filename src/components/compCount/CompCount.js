import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  function CountPlus() {
    return setCount(count + 1);
  }
  return (
    <div>
      <button onClick={CountPlus}>{count} +1 </button>
    </div>
  );
};
