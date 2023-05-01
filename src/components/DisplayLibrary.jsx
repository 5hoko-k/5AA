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
  const isEnglish = useContext(TitleIsEnglish)
  return (
    <>
      {props.entries.map(({ mediaId, media, progress, score, status }) => (
        <>
          <div key={mediaId} className="anime">
            <img alt="image" src={media.coverImage.large} />
            <span>
              <em>ID: </em>
              <span>{media.id}</span>
            </span>
            <span>
              {isEnglish ? media.title.english : media.title.romaji}
            </span>
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
