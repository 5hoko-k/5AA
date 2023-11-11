import { useContext } from "react";
import { AnimeData } from "../../pages/Anime";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function Episodes() {
  const { totalEpisodes, episodes } = useContext(AnimeData);
  console.log(episodes);
  console.log(totalEpisodes);
  return (
    <>
      <Grid container spacing={2}>
        {episodes.map(({ thumbnail, title, url }) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%" }}>
              <CardActionArea>
                <CardMedia component="img" image={thumbnail} />
                <CardContent>
                  <Typography variant="body2">{title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
