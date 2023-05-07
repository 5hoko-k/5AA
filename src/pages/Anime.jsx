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

  const title = data.Media.title;
  const bannerImage = data.Media.bannerImage;
  const coverImage = data.Media.coverImage;
  const description = data.Media.description;
  const averageScore = data.Media.averageScore;
  const totalEpisodes = data.Media.episodes;
  const episodes = data.Media.streamingEpisodes;
  const genres = data.Media.genres;
  const tags = data.Media.tags;
  const characters = data.Media.characters;

  return (
    <>
      <img alt="banner Image" src={bannerImage} style={{ width: "100%" }} />
      <h1>{animeId}</h1>
      {description}
    </>
  );
}
