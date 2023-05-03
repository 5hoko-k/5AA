import "../styles/ListStyles.css";
import { useContext, useState } from "react";
import Filter from "../components/Filter";
import { TitleIsEnglish } from "../App";

function DisplayLibrary(props) {
  return (
    <>
      <Filter />

      {props.loading && <p>Loading...</p>}
      {props.error && <p>Error : {error.message}</p>}
      {props.data &&
        props.data.MediaListCollection.lists.map(({ index, entries }) => (
          <div key={index} className="gallery" >
            <DisplayAnime entries={entries} />
          </div>
        ))}
    </>
  );
}

export default DisplayLibrary;

const DisplayAnime = (props) => {
  const isEnglish = useContext(TitleIsEnglish);
  return (
    <>
      {props.entries.map(({ mediaId, media, progress, score, status }) => (
        <>
          <div key={mediaId} className="">
            <div class="image-container">
              <img alt="image" src={media.coverImage.large} />
              {status === "CURRENT" && (
                <span
                  className="badge top-right"
                  style={{ backgroundColor: "blue" }}
                ></span>
              )}
              {status === "COMPLETED" && (
                <span
                  className="badge top-right"
                  style={{ backgroundColor: "#008000" }}
                ></span>
              )}
              {status === "PLANNING" && (
                <span
                  className="badge top-right"
                  style={{ backgroundColor: "pink" }}
                ></span>
              )}
              {status === "DROPPED" && (
                <span
                  className="badge top-right"
                  style={{ backgroundColor: "red" }}
                ></span>
              )}
              {status === "PAUSED" && (
                <span
                  className="badge top-right"
                  style={{ backgroundColor: "orange" }}
                ></span>
              )}
            </div>
            <span>{isEnglish ? (media.title.english ? media.title.english : media.title.romaji) : media.title.romaji}</span>
            <span>
              <em>Progess: </em>
              {progress}
            </span>
          </div>
        </>
      ))}
    </>
  );
};
