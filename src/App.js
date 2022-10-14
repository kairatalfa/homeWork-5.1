import Comment from "./components/Comment";
import "./App.css";
const comment = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];

function createId() {
  let id = 0;
  return function () {
    return id++;
  };
}

const incrementId = createId();

function App() {
  return (
    <div className="App">
      {comment.map((e) => {
        return <Comment key={incrementId()} obj={e} />;
      })}
    </div>
  );
}

export default App;
