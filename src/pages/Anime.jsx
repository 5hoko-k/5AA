import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const query = gql`
  query ($id: Int) {
    Media(id: $id) {
      title {
        english(stylised: true)
        romaji(stylised: true)
      }
      bannerImage
      coverImage {
        large
      }
      description(asHtml: true)
      averageScore
      episodes
      streamingEpisodes {
        title
        thumbnail
        url
      }
      genres
      tags {
        name
        description
      }
      characters(role: MAIN) {
        edges {
          node {
            name {
              full
              userPreferred
            }
            image {
              medium
            }
          }
          voiceActors(language: ENGLISH) {
            name {
              full
            }
            image {
              medium
            }
          }
        }
      }
    }
  }
`;

export default function Anime(props) {
  const { animeId } = useParams();
  const variables = { id: animeId };

  const { loading, error, data } = useQuery(query, { variables: variables });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <img
        alt="banner Image"
        src={data.Media.bannerImage}
        style={{ width: "100%" }}
      />
      <h1>{animeId}</h1>
      {console.log(data)}
    </>
  );
}
