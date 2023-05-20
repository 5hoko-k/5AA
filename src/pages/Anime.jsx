import { useQuery, gql } from "@apollo/client";
import { TitleIsEnglish } from "../App";
import React, { createContext, useContext, useState } from "react";
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

export default function Anime(props) {
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
  const averageScore = data.Media.averageScore;
  const totalEpisodes = data.Media.episodes;
  const episodes = data.Media.streamingEpisodes;
  const genres = data.Media.genres;
  const tags = data.Media.tags;
  const characters = data.Media.characters;

  return (
    <>
      {" "}
      <Grid container>
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
        <Grid container mx={10} justifyContent="flex-end">
          <Grid item xs={3}>
            <div style={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: -100,
                  left: 25,
                  width: "230px",
                  height: "327px",
                  objectFit: "cover",
                  overflow: "hidden",
                  zIndex: 1,
                  borderRadius: "5px",
                }}
              >
                <img
                  src={coverImage.extraLarge}
                  alt="somn"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </div>
          </Grid>
          <Grid item xs={9} py={3} px={2}>
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
          <Grid item xs={9} py={3} px={2}>
            <AnimeData.Provider
              value={{
                averageScore: averageScore,
                totalEpisodes: totalEpisodes,
                genres: genres,
                tags: tags,
                episodes: episodes,
                characters: characters,
              }}
            >
              <AnimeNavBar />
            </AnimeData.Provider>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
