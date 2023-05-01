import "../styles/Filter.css";
import { useQuery, gql } from "@apollo/client";
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
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      {data && (
        <form className="filter-form">
          <div>
            <label htmlFor="category">Status:</label>
            <select id="status" name="status">
              <option value="">All</option>
              <option value="CURRENT">Watching</option>
              <option value="COMPLETE">Complete</option>
              <option value="PLANNING">Planning</option>
              <option value="DROPPED">Dropped</option>
              <option value="PAUSED">Paused</option>
            </select>
          </div>

          <div>
            <label htmlFor="genre">Genre:</label>
            <select id="genre" name="genre">
              <option value="">All</option>
              {data.User.statistics.anime.genres.map(({ genre }) => (
                <option value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="format">Type:</label>
            <select id="format" name="format">
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
