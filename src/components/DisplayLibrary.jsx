import { useQuery, gql } from "@apollo/client";
import "../styles/ListStyles.css";

var query = gql`
  query {
    MediaListCollection(userName: "5hoko", type: ANIME, sort: STATUS) {
      lists {
        entries {
          media {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              large
            }
          }
          status
          score
          progress
        }
      }
    }
  }
`;

function DisplayLibrary() {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.MediaListCollection.lists.map(({ entries }) => (
    <>
      {console.log(entries)}
      <div className="library">
        <DisplayAnime entries={entries} />
      </div>
    </>
  ));
}

export default DisplayLibrary;

const DisplayAnime = (props) => {
  return props.entries.map(({ media, progress, score, status }) => (
    <>
      <div key={media.id} className="anime">
        <img alt="image" src={media.coverImage.large} />
        <span>
          <em>ID: </em>
        </span>
        <span>{media.id}</span>
        <span>
          {media.title.english ? media.title.english : media.title.romaji}
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
  ));
};
