import { useContext } from "react";
import { AnimeData } from "../pages/Anime";
import { Grid, Typography } from "@mui/material";

export default function Stats() {
  const { stats } = useContext(AnimeData);
  console.log(stats);
  return (
    <>
      {/* anime info start */}
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid item>
          <Typography variant="subtitle1">
            Anime Status:
            <Typography variant="caption" paragraph>
              {stats.status}
            </Typography>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Released:
            <Typography variant="caption" paragraph>
              {stats.season} {stats.seasonYear}
            </Typography>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Total Episodes:
            <Typography variant="caption" paragraph>
              {stats.totalEpisodes}
            </Typography>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Average Score:
            <Typography variant="caption" paragraph>
              {stats.averageScore}%
            </Typography>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Genres:
            {stats.genres.map((genre) => (
              <Typography variant="caption" sx={{ display: 'flex', flexDirection: 'column' }}>
                {genre} {console.log(genre)}
              </Typography>
            ))}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Tags:
            {stats.tags.map((tag) => (
              <Typography variant="caption" sx={{ display: 'flex', flexDirection: 'column' }}>
                {tag.name} {console.log(tag)}
              </Typography>
            ))}
          </Typography>
        </Grid>
        {stats.timeStats && (
          <Grid item container justifyContent="space-evenly">
            <Typography variant="subtitle1">
              Next Episode Airing:
              <Typography variant="caption" paragraph>
                {stats.timeStats.airingAt.date} {stats.timeStats.airingAt.time}
              </Typography>
            </Typography>
            <Typography variant="subtitle1">
              Time until Airing:
              <Typography variant="caption" paragraph>
                {stats.timeStats.timeUntilAiring.days}days /{" "}
                {stats.timeStats.timeUntilAiring.hours}hours /{" "}
                {stats.timeStats.timeUntilAiring.minutes}minutes /{" "}
                {stats.timeStats.timeUntilAiring.seconds}seconds{" "}
              </Typography>
            </Typography>
          </Grid>
        )}
      </Grid>
      {/* anime info end */}
    </>
  );
}
