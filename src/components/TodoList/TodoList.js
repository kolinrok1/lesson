import { useState } from "react";

export const ListTodo = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const updText = (e) => {
    setValue(e.target.value);
  };

  const addList = (e) => {
    if (value.trim() === "") {
      setValue("");
      return;
    }
    // const newArray = [...list, { value, id: new Date() }];
    const newArray = [...list, { value, id: crypto.randomUUID() }];
    setList(newArray);
    setValue("");
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Какие дела?"
        onChange={updText}
        value={value}
      />
      <button onClick={addList}> Добавть дело </button>
      <ul>
        {list.map((mess) => (
          <li key={mess.id}> {mess.value}</li>
        ))}
      </ul>
    </div>
  );
};
