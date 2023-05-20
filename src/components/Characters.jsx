import { useContext } from "react";
import { AnimeData } from "../pages/Anime";
import { Box, Grid, Typography } from "@mui/material";

export default function Characters() {
  const { characters } = useContext(AnimeData);
  // console.log(characters.edges)
  return (
    <>
      <Grid container>
        {characters.edges.map(({ node, voiceActors }) =>
          voiceActors.map(({ image, name }) => (
            <Grid item>
              <img
                src={node.image.medium}
                alt={node.name.full}
              />

              <Typography variant="body2">{node.name.full}</Typography>

              <Typography variant="body2">{name.full}</Typography>

              <img
                src={image.medium}
                alt={name.full}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
