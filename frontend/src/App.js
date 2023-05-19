import ToDo from "./components/ToDo";
import Avatar from "./assets/Image.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todo_wrapper">
        <div className="avatarbox">
          <img src={Avatar} alt="Avatar" className="avatar" />
        </div>

        <div className="todo_container">
          <ToDo />
        </div>
      </div>
    </div>
  );
}

export default App;
