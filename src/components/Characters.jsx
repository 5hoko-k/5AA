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
            <Grid
              item
              container
              xs={6}
              justifyContent="space-between"
              // m={1}
              sx={{ borderRadius: "10px", overflow: "hidden", backgroundColor: "red" }}
            >
              <Grid item container xs={6}>
                <img
                  src={node.image.medium}
                  alt={node.name.full}
                  style={{ width: "65px", height: "100px" }}
                />
                <Grid item xs={6}>
                  <Typography variant="caption" p={1} align="left" component="p">
                    {node.name.full}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs={6}
                direction="row-reverse"
              >
                <img
                  src={image.medium}
                  alt={name.full}
                  style={{ width: "65px", height: "100px" }}
                />
                <Grid item xs={6}>
                  <Typography variant="caption" p={1} align="right" component="p">
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
