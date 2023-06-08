import "./App.css";
import AppHw from "./comps/appHw";

function App() {
  return (
    <div className="container">
      <h1 className="text-danger">React</h1>
      {/* חיבור בין קומפנינטה
      פשוט זימון שלה ממש כמו תגית יחידה */}
      {/* <Message txt="first 111111" /> */}
      {/* 
      let msg1 = new Message("first 1111")
      msg1.render()
      */}
      {/* <Message txt="last 22222"  /> */}
      {/* <Counter />
      <InputVal /> */}
      <AppHw />
    </div>
  );
}

export default App;
