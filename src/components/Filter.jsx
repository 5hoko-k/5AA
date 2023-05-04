import "../styles/Filter.css";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

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
        <form className="filter-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="category">Status:</label>
            <select id="status" name="status" onChange={(e) => setStatus(e.target.value)}>
              <option value="">All</option>
              <option value="CURRENT">Watching</option>
              <option value="COMPLETED">Complete</option>
              <option value="PLANNING">Planning</option>
              <option value="DROPPED">Dropped</option>
              <option value="PAUSED">Paused</option>
            </select>
          </div>

          <div>
            <label htmlFor="genre">Genre:</label>
            <select id="genre" name="genre" onChange={(e) => setGenre(e.target.value)}>
              <option value="">All</option>
              {data.User.statistics.anime.genres.map(({ genre }) => (
                <option value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="format">Type:</label>
            <select id="format" name="format" onChange={(e) => setFormat(e.target.value)}>
              <option value="">All</option>
              {data.User.statistics.anime.formats.map(({ format }) => (
                <option value={format}>{format}</option>
              ))}
            </select>
          </div>

          <div>
            <button type="submit">Filter</button>
          </div>
        </form>
      )}
    </>
  );
};

export default Filter;
