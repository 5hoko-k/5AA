import { useQuery, gql } from "@apollo/client";
import "./styles/ListStyles.css";

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
            bannerImage
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
    <div key={name} className="library">
      <DisplayAnimeProgress entries={entries} />
    </div>
  ));
}

export default DisplayProgress;

const DisplayAnimeProgress = (props) => {
  return props.entries.map(({ id, progress, media, episodes }) => (
    <>
      <div key={id} className="anime">
        <img className='ProgressImg' alt="image" src={media.coverImage.large} />
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
        <span>{episodes}</span>
      </div>
    </>
  ));
};
