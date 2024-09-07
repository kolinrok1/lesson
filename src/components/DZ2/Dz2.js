import { useState } from "react";

export const Conments = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const stateComents = (newEl) => {
    setComments(newEl);
  };

  const removeCom = (e) => {
    let newCommenst = [];
    [...comments].forEach((element) => {
      if (element.id !== parseInt(e.target.id)) {
        newCommenst.push(element);
        stateComents(newCommenst);
      } else if ([...comments].length <= 1) {
        stateComents([]);
      }
    });
  };

  return comments.map((com) => (
    <div key={com.id}>
      {com.text}
      <button id={com.id} onClick={removeCom}>
        Удалить
      </button>
    </div>
  ));
};
