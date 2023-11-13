import React, { useState, PureComponent } from "react";
import { useQuery, gql } from "@apollo/client";
import TheRadar from "./RadarChart";
import TheRadialBar from "./RadialBarChart";
import ThePieChart from "./PieChart";

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
      <ThePieChart status={status} />

      {/* <TheRadar data={status}/> */}
      <TheRadialBar data={genres} total={totalAnime}/>
    </>
  );
};

export default TheCharts;
