import React from "react";
import { useState } from "react";
import "./Admin.css";

export function Admin(props) {
  const [podcastName, setPodcastName] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [podcastDescription, setPodcastDescription] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [fileType, setFileType] = useState("audio");
  // const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  return (
    <>
      <div>
        <h1>+Add Podcast+</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <div className="namediv">
            <label className="Name">Enter Podcast Name: </label>
            <input
              className="Name"
              type="text"
              value={podcastName}
              size="20"
              onChange={(e) => setPodcastName(e.target.value)}
            />
          </div>
          <div className="descdiv">
            <label className="Description">Enter Description: </label>
            <textarea
              className="Description"
              value={podcastDescription}
              onChange={(e) => setPodcastDescription(e.target.value)}
            />
          </div>
          <div className="speakdiv">
            <label className="Speaker">Enter Speaker: </label>
            <input
              className="SpeakerName"
              value={speakerName}
              type="text"
              onChange={(e) => setSpeakerName(e.target.value)}
            />
          </div>
          <div className="catediv">
            <label className="Category">Select Category: </label>
            <select
              className="Categorys"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">~</option>
              <option value="Technology">Technology </option>
              <option value="Science">Science </option>
              <option value="Sports">Sports </option>
              <option value="Music">Music </option>
              <option value="News">News </option>
              <option value="Other">Other...</option>
            </select>
          </div>
          <div className="langdiv">
            <label className="Language">Select Language: </label>
            <select
              className="Languages"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="French">Français</option>
              <option value="Japanese">日本</option>
              <option value="Tamil">தமிழ்</option>
              <option value="Telugu">తెలుగు</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="typediv">
            <label className="Type">Choose Podcast Type: </label>
            <radio>
              <span>
                <label>Audio</label>
                <input
                  type="radio"
                  name="fileType"
                  value="audio"
                  checked={fileType === "audio"}
                  onChange={(e) => setFileType(e.target.value)}
                />
              </span>
              <span>
                <label>Video</label>
                <input
                  type="radio"
                  name="fileType"
                  value="video"
                  checked={fileType === "video"}
                  onChange={(e) => setFileType(e.target.value)}
                />
              </span>
            </radio>
          </div>
          <div className="views">
            <label className="viewlabel">Views: </label>
            <p className="viewcount"> 69</p>
          </div>
          {/* <div>
            <label>Choose File:</label>
            <input
              type="file"
              accept={fileType === "audio" ? "audio/*" : "video/*"}
              onChange={handleFileChange}
            />
          </div> */}
          <div className="submitdiv">
            <input className="submit" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
export default Admin;
