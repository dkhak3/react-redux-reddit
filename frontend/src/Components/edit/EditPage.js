import React, { useState } from "react";
import "./edit.css";
import Input from "../input/Input";
import Label from "../label/Label";
import Textarea from "../textarea/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiRequests";

const avatarsUrl = [
  "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
  "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
  "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
  "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
  "https://i.redd.it/7ipyf6pvqac61.png",
  "https://i.redd.it/ksmb0m02ppy51.png",
  "https://styles.redditmedia.com/t5_8x6e27/styles/profileIcon_snooad582ff1-5912-44af-91c2-653effa360b2-headshot.png?width=128&height=128&frame=1&auto=webp&crop=128:128,smart&s=ebee2b1ed3aee04c977922625ed859edc851a28c",
  "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
  "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
];

const EditPage = ({ setEdit }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(user.themeColor);
  const [avaUrl, setAvaUrl] = useState(user.avaUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);

    const updateUserValue = {
      name: name,
      age: age,
      about: about,
      avaUrl: avaUrl,
      themeColor: theme,
    };

    updateUser(updateUserValue, dispatch);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button type="submit" className="close">
            SAVE
          </button>
          <div className="edit-profile">Edit profile</div>
          <div className="input-container">
            <Label valueName="name">Your name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              setValue={setName}
            ></Input>

            <Label valueName="age">Your age</Label>
            <Input
              id="age"
              name="age"
              placeholder="Enter your age"
              value={age}
              setValue={setAge}
            ></Input>

            <Label valueName="about">Your about</Label>
            <Textarea
              id="about"
              name="about"
              placeholder="Enter your About"
              value={about}
              setValue={setAbout}
            ></Textarea>
          </div>

          <label htmlFor="avatar">Avatar</label>
          <div className="input-image-container">
            {avatarsUrl.map((url) => {
              return (
                <div key={url}>
                  <img
                    src={url}
                    alt=""
                    className="input-image"
                    onClick={(e) => setAvaUrl(e.target.src)}
                    style={
                      url === avaUrl
                        ? { border: "5px solid #2980f3" }
                        : { border: "0px" }
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="theme-container">
            <Label valueName="theme">Change your theme background color</Label>
            <Input
              type="color"
              id="theme"
              name="theme"
              value={theme}
              className="theme-color"
              setValue={setTheme}
            ></Input>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
