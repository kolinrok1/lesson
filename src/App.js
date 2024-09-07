import "./App.css";
import { Count } from "./components/compCount/CompCount";
import { Conments } from "./components/DZ2/Dz2";
import { MessageFerstLesson } from "./components/MessageFerstLesson/MessageFerstLesson";
import { TextIn } from "./components/TextIn/TextIn";
import { Timer } from "./components/Timer/Timer";
import { ListTodo } from "./components/TodoList/TodoList";

function App() {
  return (
    <div>
      {/* <MessageFerstLesson name="Мое первое сообщение" />
      <Count />
      <TextIn /> */}
      {/* <ListTodo />
      <Timer /> */}
      <Conments />
    </div>
  );
}

export default App;
