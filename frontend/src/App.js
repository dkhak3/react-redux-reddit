import { useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import EditPage from "./Components/edit/EditPage";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="App">
      {isEdit ? <EditPage /> : <Header setEdit={setIsEdit} />}
    </div>
  );
}

export default App;
