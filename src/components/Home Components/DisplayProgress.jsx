import { useQuery, gql } from "@apollo/client";
import { TitleIsEnglish } from "../../App";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

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

  return data.MediaListCollection.lists.map(({ name, entries }) => (
    <Grid
      container
      key={name}
    >
      <DisplayAnimeProgress entries={entries} />
    </Grid>
  ));
}

export default DisplayProgress;



