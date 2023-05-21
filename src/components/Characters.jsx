import { useContext } from "react";
import { AnimeData } from "../pages/Anime";
import { Box, Grid, Typography } from "@mui/material";

export default function Characters() {
  const { characters } = useContext(AnimeData);
  // console.log(characters.edges)
  return (
    <>
      <Grid container spacing={2}>
        {characters.edges.map(({ node, voiceActors }) =>
          voiceActors.map(({ image, name }) => (
            <Grid item container xs={6} justifyContent="space-between">
              <Grid item container sx={{ width: "50%" }}>
                <img
                  src={node.image.medium}
                  alt={node.name.full}
                  style={{ width: "50", height: "100px" }}
                />
                <Grid item> 
                  <Typography variant="caption" p={1}>
                    {node.name.full}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                sx={{ width: "50%" }}
                direction="row-reverse"
              >
                <img
                  src={image.medium}
                  alt={name.full}
                  style={{ width: "50", height: "100px" }}
                />
                <Grid item>
                  <Typography variant="caption" p={1}>
                    {name.full}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
