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
          <div key={index} className="library">
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
          <div key={mediaId} className="anime">
            <div class="image-container">
              <img alt="image" src={media.coverImage.large} />
              {status === "CURRENT" && (
                <span
                  className="badge top-right"
                  style={{ backgroundColor: "blue" }}
                ></span>
              )}
              {status === "COMPLETE" && (
                <span
                  className="badge top-right"
                  style={{ backgroundColor: "green" }}
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


              <span class="badge top-right"></span>
            </div>

            <span>
              <em>ID: </em>
              <span>{media.id}</span>
            </span>
            <span>{isEnglish ? media.title.english : media.title.romaji}</span>
            <span>
              <em>Progess: </em>
              {progress}
            </span>
            <span>
              <em>Score: </em>
              {score}
            </span>
            <span>
              <em>Status: </em>
              {status}
            </span>
          </div>
        </>
      ))}
    </>
  );
};
