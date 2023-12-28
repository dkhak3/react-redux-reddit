import { useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import EditPage from "./Components/edit/EditPage";
import { useSelector } from "react-redux";
import Footer from "./Components/footer/Footer";
import MakePost from "./Components/post/MakePost";
import Post from "./Components/post/Post";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);

  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setIsEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setIsEdit} />
          <div className="post-container">
            <Post />
          </div>
          <Footer isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} />
        </>
      ) : (
        <>
          <Header setEdit={setIsEdit} />
          <MakePost setIsOpenPost={setIsOpenPost} />
          <Footer isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} />
        </>
      )}
      {!isEdit && pending && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data server!!!</p>
      )}
    </div>
  );
}

export default App;
