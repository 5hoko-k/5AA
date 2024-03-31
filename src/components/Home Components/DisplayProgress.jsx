import { useQuery, gql } from "@apollo/client";
import Grid from "@mui/material/Grid";
import DisplayAnimeProgress from "./DisplayAnimeProgress";
import Test from "./CurrentlyInProgress";

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
          mediaId
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
              extraLarge
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
  
  const [list] = data.MediaListCollection.lists

  return (

      // <DisplayAnimeProgress entries={ list.entries } />
      <Test entries={ list.entries } />

  );
}

export default DisplayProgress;



