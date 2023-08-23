import { useQuery, gql } from "@apollo/client";
import "../styles/StatsStyles.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);
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
            minutesWatched
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

function DisplayStats() {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const name = data.User.name;
  const count = data.User.statistics.anime.count;
  const minutes = data.User.statistics.anime.minutesWatched;
  const score = data.User.statistics.anime.meanScore;
  const episodes = data.User.statistics.anime.episodesWatched;
  const statuses = data.User.statistics.anime.statuses.map(
    (status) => status.status
  );
  const statusesCount = data.User.statistics.anime.statuses.map(
    (status) => status.count
  );
  const statusesMinutes = data.User.statistics.anime.statuses.map(
    (status) => status.minutesWatched
  );
  const genres = data.User.statistics.anime.genres.map((genre) => genre.genre);
  const genresCount = data.User.statistics.anime.genres.map(
    (genre) => genre.count
  );

  const statusChart = {
    labels: statuses,
    datasets: [
      {
        label: "5hoko's Anime",
        data: statusesCount,
        backgroundColor: [
          "rgb(0, 127, 95)",
          "rgb(238, 239, 32)",
          "rgb(244, 162, 97)",
          "rgb(34, 87, 122)",
          "rgb(193, 18, 31)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const genreChart = {
    labels: genres,
    datasets: [
      {
        label: "5hoko's Anime",
        data: genresCount,
        backgroundColor: [
          "rgb(0, 127, 95)",
          "rgb(238, 239, 32)",
          "rgb(244, 162, 97)",
          "rgb(34, 87, 122)",
          "rgb(193, 18, 31)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = { responsive: true, maintainAspectRatio: false };

  // console.log(name)
  // console.log(stats)
  return (
    <>
      <Box>
        <Doughnut
          data={statusChart}
          options={options}
        />
      </Box>
      <TimeCount
        episodeCount={episodes}
        minutesCount={minutes}
        animeCount={count}
        meanScore={score}
      />
      <div>
        <Doughnut data={genreChart} options={options} />
      </div>
    </>
  );
}

export default DisplayStats;

const TimeCount = (props) => {
  return (
    <>
      <div id="stats">
        <span>
          <em>Animes: </em>
          {props.animeCount}
        </span>
        <span>
          <em>Episodes Watched: </em>
          {props.episodeCount}
        </span>
        <span>
          <em>Hours spent: </em>
          {props.minutesCount / 60}
        </span>
        <span>
          <em>Mean Score: </em>
          {props.meanScore}
        </span>
      </div>
    </>
  );
};
