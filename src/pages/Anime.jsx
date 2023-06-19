import { useQuery, gql } from "@apollo/client";
import { TitleIsEnglish } from "../App";
import React, { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import AnimeNavBar from "../components/AnimeNavBar";

export const AnimeData = createContext({});

const query = gql`
  query ($id: Int) {
    Media(id: $id) {
      title {
        english(stylised: true)
        romaji(stylised: true)
      }
      bannerImage
      coverImage {
        extraLarge
        large
      }
      description(asHtml: false)
      averageScore
      seasonYear
      season
      episodes
      streamingEpisodes {
        title
        thumbnail
        url
      }
      genres
      tags {
        name
        description
      }
      characters(role: MAIN) {
        edges {
          node {
            name {
              full
              userPreferred
            }
            image {
              medium
            }
          }
          voiceActors(language: ENGLISH) {
            name {
              full
            }
            image {
              medium
            }
          }
        }
      }
    }
  }
`;

function Anime(props) {
  const isEnglish = useContext(TitleIsEnglish);
  const { animeId } = useParams();
  const variables = { id: animeId };

  const { loading, error, data } = useQuery(query, { variables: variables });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const title = data.Media.title;
  const bannerImage = data.Media.bannerImage;
  const coverImage = data.Media.coverImage;
  const description = data.Media.description;
  const episodes = data.Media.streamingEpisodes;
  const characters = data.Media.characters;

  const stats = {
    averageScore: data.Media.averageScore,
    totalEpisodes: data.Media.episodes,
    genres: data.Media.genres,
    tags: data.Media.tags,
    seasonYear: data.Media.seasonYear,
    season: data.Media.season,
  }

  return (
    <>
      {/* Full Conteiner Start*/}
      <Grid container>
        {/* banner image start*/}
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundImage: `url(${bannerImage})`,
              position: "relative",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "50vh",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the transparency as desired (0.5 = 50% opacity)
              }}
            />
          </Box>
        </Grid>
        {/* banner image end */}
        {/* Body Start*/}
        <Grid container px={{ xs: 2, sm: 5, md: 7}} justifyContent="flex-start">
          {/* Left start*/}
          <Grid
            item
            xs={12}
            md={3}
            px={3}
            py={10}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* cover image start*/}
            <Box
              sx={{
                position: "absolute",
                top: -100,
                width: "100%",
                height: "auto",
                objectFit: "cover",
                overflow: "hidden",
                zIndex: 1,
                borderRadius: "5px",
                maxWidth: "200px", // Maximum width for the cover image
                maxHeight: "300px", // Maximum height for the cover image
                minWidth: "150px", // Minimum width for the cover image
                minHeight: "225px", // Minimum height for the cover image
              }}
            >
              <img
                src={coverImage.extraLarge}
                alt="somn"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            {/* cover image end*/}
          </Grid>
          {/* Left end */}
          {/* Middle start */}
          <Grid item container direction="column" xs={12} md={9} py={3} px={2} mt={5} wrap="nowrap">
            {/* title + description start*/}
            <Grid item>
              <Typography variant="h5" mb={2}>
                {isEnglish
                  ? title.english
                    ? title.english
                    : title.romaji
                  : title.romaji}
              </Typography>
              <Typography
                variant="body2"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </Grid>
            {/* title + description end*/}

            {/* anime properties navigation start*/}
            <Grid item >
              <AnimeData.Provider
                value={{
                  stats: stats,
                  episodes: episodes,
                  characters: characters,
                }}
              >
                <AnimeNavBar />
              </AnimeData.Provider>
            </Grid>
            {/* anime properties navigation end */}
          </Grid>
          {/* Middle end */}
        </Grid>
        {/* Body End*/}
      </Grid>
      {/* Full Container End*/}
    </>
  );
}

export default Anime;
