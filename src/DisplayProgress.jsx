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

  return <></>;
}

export default DisplayProgress;
