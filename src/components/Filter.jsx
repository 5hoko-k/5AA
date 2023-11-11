import "../styles/Filter.css";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Paper } from "@mui/material";

const query = gql`
  query {
    User(id: 853967) {
      statistics {
        anime {
          formats(sort: COUNT_DESC) {
            format
          }
          genres(sort: COUNT_DESC) {
            genre
          }
        }
      }
    }
  }
`;

const Filter = (props) => {
  const { loading, error, data } = useQuery(query);
  const [genre, setGenre] = useState();
  const [format, setFormat] = useState();
  const [status, setStatus] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFilter(genre, status, format);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      {data && (
        <Paper elevation={3}>
          <form className="filter-form" onSubmit={handleSubmit}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                value={format}
                onChange={(e) => setStatus(e.target.value)}
                label="status"
              >
                <MenuItem value=""><em>All</em></MenuItem>
                <MenuItem value="CURRENT">Watching</MenuItem>
                <MenuItem value="COMPLETED">Complete</MenuItem>
                <MenuItem value="PLANNING">Planning</MenuItem>
                <MenuItem value="DROPPED">Dropped</MenuItem>
                <MenuItem value="PAUSED">Paused</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="genre">Genre</InputLabel>
              <Select
                labelId="genre"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                label="genre"
              >
                <MenuItem value=""><em>All</em></MenuItem>
                {data.User.statistics.anime.genres.map(({ genre }) => (
                  <MenuItem value={genre}>{genre}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="type">Type</InputLabel>
              <Select
                labelId="type"
                id="format"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                label="type"
              >
                <MenuItem value=""><em>All</em></MenuItem>
                {data.User.statistics.anime.formats.map(({ format }) => (
                  <MenuItem value={format}>{format}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <div>
              <Button variant="contained" type="submit">
                Filter
              </Button>
            </div>
          </form>
        </Paper>
      )}
    </>
  );
};

export default Filter;
