

const Filter = (props) => {

  const handleTitleChange = () => {
    if (props.isEnglish !== true) {
      props.setIsEnglish(true);
    } else if (props.isEnglish === true) {
      props.setIsEnglish(false);
    }
  };

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

        <button onClick={handleTitleChange}>
          { props.isEnglish ? "English" : "Romaji"}
        </button>
        <input type="submit" value="Filter" />
      </form>
    </>
  );
};

export default Filter;
