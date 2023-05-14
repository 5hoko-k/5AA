import { useQuery, gql } from "@apollo/client";
// import "../styles/ListStyles.css";
import { TitleIsEnglish } from "../App";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

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
      // sx={{ backgroundColor: 'red' }}
      // rowSpacing={1}
      // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <DisplayAnimeProgress entries={entries} />
    </Grid>
  ));
}

export default DisplayProgress;

const DisplayAnimeProgress = (props) => {
  const isEnglish = useContext(TitleIsEnglish);

  return props.entries.map(({ id, progress, media, status }) => (
    <>
      <Grid item key={id} xs={6} md={3} lg={2} px={1} py={1}>
        <Card sx={{ maxWidth: 345, height: "100%" }}>
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

{
  /* <div className="image-container">
          <img className="" alt="image" src={media.coverImage.large} />
          {status === "CURRENT" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "blue" }}
            ></span>
          )}{" "}
          {status === "CURRENT" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "blue" }}
            ></span>
          )}
          {status === "COMPLETED" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "#008000" }}
            ></span>
          )}
          {status === "PLANNING" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "pink" }}
            ></span>
          )}
          {status === "DROPPED" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "red" }}
            ></span>
          )}
          {status === "PAUSED" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "orange" }}
            ></span>
          )}
          {status === "COMPLETED" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "#008000" }}
            ></span>
          )}
          {status === "PLANNING" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "pink" }}
            ></span>
          )}
          {status === "DROPPED" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "red" }}
            ></span>
          )}
          {status === "PAUSED" && (
            <span
              className="badge top-right"
              style={{ backgroundColor: "orange" }}
            ></span>
          )}
        </div>
        <span>
          <em>ID: </em>
        </span>
        <span>{media.id}</span>
        <span>
          {isEnglish
            ? media.title.english
              ? media.title.english
              : media.title.romaji
            : media.title.romaji}
        </span>
        <span>
          <em>Progess: </em>
          {progress}
        </span> / 
        <span>{media.episodes}</span> */
}
