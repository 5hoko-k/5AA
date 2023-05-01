import "../styles/ListStyles.css";
import { useState } from "react";
import Filter from "../components/Filter";

function DisplayLibrary(props) {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <>
      <Filter isEnglish={isEnglish} setIsEnglish={setIsEnglish} />

      {props.loading && <p>Loading...</p>}
      {props.error && <p>Error : {error.message}</p>}
      {props.data &&
        props.data.MediaListCollection.lists.map(({ entries }) => (
          <div className="library">
            <DisplayAnime entries={entries} isEnglish={isEnglish} />
          </div>
        ))}
    </>
  );
}

export default DisplayLibrary;

const DisplayAnime = (props) => {
  return (
    <>
      {props.entries.map(({ media, progress, score, status }) => (
        <>
          <div key={media.id} className="anime">
            <img alt="image" src={media.coverImage.large} />
            <span>
              <em>ID: </em>
              <span>{media.id}</span>
            </span>
            <span>
              {props.isEnglish ? media.title.english : media.title.romaji}
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
