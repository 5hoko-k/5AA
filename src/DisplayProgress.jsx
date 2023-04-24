import { useQuery, gql } from "@apollo/client";

var query = gql`
  query {
    MediaListCollection(
      userId: 853967
      type: ANIME
      status: CURRENT
      sort: UPDATED_TIME_DESC
    ) {
      lists {
        entries {
          progress
          updatedAt
          media {
            title {
              english
            }
            episodes
            coverImage {
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

  return data.MediaListCollection.lists.map(({ entries }) => (
    <>
      <DisplayAnime entries={entries} />
    </>
  ));
}

export default DisplayProgress;

const DisplayAnime = (props) => {
  return props.entries.map(({progress, media, updatedAt}) => {
    <div key={media.id} className="anime">
      <img alt="image" src={media.coverImage.large} />
      <span>
        <em>ID: </em>
      </span>
      <span>{media.id}</span>
      <span>
        {media.title.english ? media.title.english : media.title.romaji}
      </span>
      <span><em>Progess: </em>{ progress }</span>
    </div>;
  });
};
