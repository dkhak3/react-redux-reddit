import { useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import EditPage from "./Components/edit/EditPage";
import { useSelector } from "react-redux";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setIsEdit} />
      ) : (
        <Header setEdit={setIsEdit} />
      )}
      {!isEdit && pending && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data server!!!</p>
      )}
    </div>
  );
}

export default App;
