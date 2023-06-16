import { useContext, useState } from "react";
import Filter from "../components/Filter";
import { TitleIsEnglish } from "../App";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Badge } from "@mui/material";

function DisplayLibrary(props) {
  const [genre, setGenre] = useState();
  const [format, setFormat] = useState();
  const [status, setStatus] = useState();

  if (props.loading) return <p>Loading...</p>;
  if (props.error) return <p>Error : {error.message}</p>;

  const mergedListEntries = props.data.MediaListCollection.lists.flatMap((obj) => obj.entries);
  console.log(mergedListEntries);

  const sortedMergedListEntries = mergedListEntries.sort(
    (a, b) => b.media.popularity - a.media.popularity
  );
    console.log(sortedMergedListEntries)

  const onFilter = (genre, status, format) => {
    setGenre(genre);
    setStatus(status);
    setFormat(format);
  };

  return (
    <>
      <Filter onFilter={onFilter} />

      {props.loading && <p>Loading...</p>}
      {props.error && <p>Error : {error.message}</p>}
      {props.data &&
          <Grid container>
            <DisplayAnime
              entries={sortedMergedListEntries}
              genre={genre}
              status={status}
              format={format}
            />
          </Grid>
        }
    </>
  );
}

export default DisplayLibrary;

const DisplayAnime = (props) => {
  const isEnglish = useContext(TitleIsEnglish);

  const filteredEntries = props.entries.filter((entry) => {
    let matched = true;

    if (props.genre && entry.media.genres.indexOf(props.genre) === -1) {
      matched = false;
    }
    if (props.format && entry.media.format !== props.format) {
      matched = false;
    }
    if (props.status && entry.status !== props.status) {
      matched = false;
    }
    return matched;
  });

  const statusColor = (status) => {
    if (status === "CURRENT") {
      return "blue";
    } else if (status === "COMPLETED") {
      return "#2E8B57";
    } else if (status === "PLANNING") {
      return "pink";
    } else if (status === "DROPPED") {
      return "red";
    } else if (status === "PAUSED") {
      return "orange";
    }
  };

  return (
    <>
      {filteredEntries.map(({ mediaId, media, progress, status }) => (
        <>
          <Grid item key={mediaId} xs={6} md={3} lg={2} px={1} py={1}>
            <Badge
              color="primary"
              badgeContent=""
              sx={{
                height: "100%",
                "& .MuiBadge-badge": {
                  backgroundColor: statusColor(status),
                },
              }}
            >
              <Card>
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
                  {status === "CURRENT" && (
                    <Typography variant="caption" color="text.secondary">
                      <em>Progess: </em>
                      {progress}/<span>{media.episodes}</span>
                      {console.log(media.episodes)}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Badge>
          </Grid>
        </>
      ))}
    </>
  );
};
