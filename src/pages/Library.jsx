import DisplayLibrary from "../components/DisplayLibrary";

export default function Library() {
  return (
    <>
      <Filter />
      <DisplayLibrary />
    </>
  );
}

const Filter = () => {
  return (
    <>
      <form>
        <label htmlFor="category">Status:</label>
        <select id="status" name="status">
          <option value="">All</option>
          <option value="CURRENT">Watching</option>
          <option value="COMPLETE">Complete</option>
          <option value="PLANNING">Planning</option>
          <option value="DROPPED">Dropped</option>
          <option value="PAUSED">Paused</option>
        </select>
        <br />
        <br />

        <input type="submit" value="Filter" />
      </form>
    </>
  );
};
