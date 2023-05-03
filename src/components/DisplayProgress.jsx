import { useQuery, gql } from "@apollo/client";
import "../styles/ListStyles.css";
import { TitleIsEnglish } from "../App";
import { useContext } from "react";

var query = gql`
  query {
    MediaListCollection(
      userId: 853967
      type: ANIME
      status: CURRENT
      sort: UPDATED_TIME_DESC
    ) {
      lists {
        name
        entries {
          id
          progress
          status
          updatedAt
          media {
            id
            title {
              english
              romaji
            }
            episodes
            coverImage {
              medium
              large
            }
          }
        }
      }
    }
  }
`;

function DisplayProgress() {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.MediaListCollection.lists.map(({ name, entries }) => (
    <div key={name} className="gallery">
      <DisplayAnimeProgress entries={entries} />
    </div>
  ));
}

export default DisplayProgress;

const DisplayAnimeProgress = (props) => {
  const isEnglish = useContext(TitleIsEnglish);

  return props.entries.map(({ id, progress, media, episodes, status }) => (
    <>
      <div key={id} className="">
        <div className="image-container">
          <img className="" alt="image" src={media.coverImage.large} />
          {status === "CURRENT" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "blue" }}
            ></span>
          )}              {status === "CURRENT" && (
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
        <span>
          <em>ID: </em>
        </span>
        <span>{media.id}</span>
        <span>
          {isEnglish
            ? media.title.english
              ? media.title.english
              : media.title.romaji
            : media.title.romaji}
        </span>
        <span>
          <em>Progess: </em>
          {progress}
        </span>
        <span>{episodes}</span>
      </div>
    </>
  ));
};
