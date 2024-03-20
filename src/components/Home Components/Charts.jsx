import React, { useState, PureComponent } from "react";
import { useQuery, gql } from "@apollo/client";
import TheRadar from "./RadarChart";
import TheRadialBar from "./RadialBarChart";
import ThePieChart from "./PieChart";
import { Box, Container } from "@mui/material";

const query = gql`
  query {
    User(id: 853967) {
      name
      statistics {
        anime {
          count
          meanScore
          minutesWatched
          episodesWatched
          statuses {
            status
            count
          }
          genres(limit: 10, sort: COUNT_DESC) {
            genre
            count
          }
          tags(limit: 10, sort: COUNT_DESC) {
            tag {
              name
              description
            }
            count
          }
          studios(sort: COUNT_DESC, limit: 10) {
            studio {
              name
            }
            count
          }
        }
      }
    }
  }
`;

const TheCharts = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const status = data.User.statistics.anime.statuses;
  const genres = data.User.statistics.anime.genres;
  const totalAnime = data.User.statistics.anime.count;

  return (
    <>
      <div className="px-5 pt-16">
        <span className="text-xl">Watchlist Overview</span>
        <p className="text-base">
          This chart illustrates the number of anime watched and
          categorized into different statuses.
        </p>
      </div>
      <div className="max-w-sm">
        <ThePieChart status={status} />
      </div>


      <div className="px-5 pt-8">
        <span className="text-xl">Genre Distribution</span>
        <p className="text-base">
        Explore the breakdown of anime genres in my watchlist and discover the diverse range of anime genres that have captured my interest.
        </p>
      </div>
      <div className="min-w-full ">
        <TheRadialBar data={genres} total={totalAnime} />
      </div>
    </>
  );
};

export default TheCharts;
