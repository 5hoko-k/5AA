import { useQuery, gql } from "@apollo/client";
// import "../styles/ListStyles.css";
import { TitleIsEnglish } from "../App";
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
    <Grid
      container
      key={name}
    >
      <DisplayAnimeProgress entries={entries} />
    </Grid>
  ));
}

export default DisplayProgress;

const DisplayAnimeProgress = (props) => {
  const isEnglish = useContext(TitleIsEnglish);

  return props.entries.map(({ id, progress, media, mediaId }) => (
    <>
      <Grid item key={id} xs={6} md={3} lg={2} px={1} py={1}>
        <Card sx={{ maxWidth: 345, height: "100%" }}>
        <Link to={`/library/${mediaId}`}>
          <CardMedia
            component="img"
            alt={
              isEnglish
                ? media.title.english
                  ? media.title.english
                  : media.title.romaji
                : media.title.romaji
            }
            image={media.coverImage.large}
          />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {isEnglish
                ? media.title.english
                  ? media.title.english
                  : media.title.romaji
                : media.title.romaji}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              <em>Progess: </em>
              {progress}/<span>{media.episodes}</span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  ));
};

