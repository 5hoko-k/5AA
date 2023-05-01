import "../styles/Filter.css";

const Filter = (props) => {
  return (
    <>
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
          <button type="submit">Filter</button>
        </div>
      </form>
    </>
  );
};

export default Filter;
