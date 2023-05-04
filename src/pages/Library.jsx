import DisplayLibrary from "../components/DisplayLibrary";
import { useQuery, gql } from "@apollo/client";

var query = gql`
  query {
    MediaListCollection(userName: "5hoko", type: ANIME, sort: STATUS) {
      lists {
        entries {
          mediaId
          media {
            id
            genres
            format
            popularity
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

export default function Library() {
  const { loading, error, data } = useQuery(query);

  return (
    <>
      <DisplayLibrary loading={loading} error={error} data={data} />
    </>
  );
}
