import "../styles/ListStyles.css";
import { useContext, useState } from "react";
import Filter from "../components/Filter";
import { TitleIsEnglish } from "../App";

function DisplayLibrary(props) {
  const [genre, setGenre] = useState();
  const [format, setFormat] = useState();
  const [status, setStatus] = useState();

  if (props.loading) return <p>Loading...</p>;
  if (props.error) return <p>Error : {error.message}</p>;

  const listEntries = props.data.MediaListCollection.lists.map(({ entries }) => {
    const sortedEntries = [...entries].sort((a, b) => b.media.popularity - a.media.popularity);
    return { entries: sortedEntries };
  });

  const onFilter = (genre, status, format) => {
    setGenre(genre);
    setStatus(status);
    setFormat(format);
  };

  return (
    <>
      <Filter onFilter={onFilter} />

      {props.loading && <p>Loading...</p>}
      {props.error && <p>Error : {error.message}</p>}
      {props.data &&
        listEntries.map(({ index, entries }) => (
          <div key={index} className="gallery">
            {console.log(entries)}
            <DisplayAnime entries={entries} genre={genre} status={status} format={format}/>
          </div>
        ))}
    </>
  );
}

export default DisplayLibrary;

const DisplayAnime = (props) => {
  const isEnglish = useContext(TitleIsEnglish);

  const filteredEntries = props.entries.filter((entry) => {
    let matched = true;

    if (props.genre && entry.media.genres.indexOf(props.genre) === -1) {
      matched = false;
    }
    if (props.format && entry.media.format !== props.format) {
      matched = false;
    }
    if (props.status && entry.status !== props.status) {
      matched = false;
    }
    return matched;
  });
  return (
    <>
      {filteredEntries.map(({ mediaId, media, progress, status }) => (
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
                  style={{ backgroundColor: "#2E8B57" }}
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
            <span>
              {isEnglish
                ? media.title.english
                  ? media.title.english
                  : media.title.romaji
                : media.title.romaji}
            </span>
            {status === 'CURRENT' && <span>
              <em>Progess: </em>
              {progress}
            </span>}
            <span>
              <em>Popularity: </em>
              {media.popularity}
            </span>
          </div>
        </>
      ))}
    </>
  );
};
