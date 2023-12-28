import React, { useState } from "react";
import "./post.css";
import Label from "../label/Label";
import Textarea from "../textarea/Textarea";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";

const MakePost = ({ setIsOpenPost }) => {
  const dispatch = useDispatch();
  const [title, setTile] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedIndex, setSelectedIndex] = useState("");
  const tags = ["None", "NSFW", "Mood", "Qoutes", "Shitpost"];

  const handleAddPost = () => {
    setIsOpenPost(false);
    const newPost = {
      title: title,
      description: desc,
      tag: selectedIndex,
    };
    dispatch(createPost(newPost));
  };

  return (
    <>
      <section className="makepost-container">
        <div className="makepost-navigation">
          <p className="makepost-save" onClick={handleAddPost}>
            Add New Post
          </p>
        </div>

        <Label valueName="title">Enter your title</Label>
        <Textarea
          id="title"
          name="title"
          placeholder="Enter your title..."
          value={title}
          setValue={setTile}
          className="makepost-title"
        />

        <Label valueName="desc">Enter your desc</Label>
        <Textarea
          id="desc"
          name="desc"
          placeholder="Enter your desc..."
          value={desc}
          setValue={setDesc}
          className="makepost-desc"
        />

        <Label valueName="tags">Click your tag</Label>
        <div className="makepost-tags">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`${
                selectedIndex === index
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default MakePost;
