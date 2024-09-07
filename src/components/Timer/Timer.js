import { useEffect, useState } from "react";

export const Timer = (params) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <p>Время : {time}</p>
    </div>
  );
};

// useEffect(()
