import { useContext } from "react";
import { AnimeData } from "../../pages/Anime";
import { Box, Grid, Typography } from "@mui/material";

export default function Characters() {
  const { characters } = useContext(AnimeData);
  // console.log(characters.edges)
  return (
    <>
      <Grid container justifyContent="space-around">  
        {characters.edges.map(({ node, voiceActors }) =>
          voiceActors.map(({ image, name }) => (
            <Grid
              item
              container
              xs={5}
              mb={2}
              ml={{ xs: 1, sm: 3}}
              justifyContent="space-between"
              sx={{ borderRadius: "10px", overflow: "hidden" , minWidth: "300px"}}
            >
              <Grid item container xs={6}>
                <img
                  src={node.image.medium}
                  alt={node.name.full}
                  style={{ width: "50px", height: "76.92px" }}
                />
                <Grid item xs={6}>
                  <Typography variant="caption" px={1} align="left" component="p">
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
                  style={{ width: "50px", height: "76.92px" }}
                />
                <Grid item xs={6}>
                  <Typography variant="caption" px={1} align="right" component="p">
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
