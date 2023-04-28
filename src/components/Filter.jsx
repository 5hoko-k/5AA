import { useContext } from "react";
import { TitleLanguage } from "../pages/Library";

const Filter = () => {
  const {isEnglish, setIsEnglish} = useContext(TitleLanguage)

  const handleTitleChange = () => {
    if (isEnglish !== true) {
      setIsEnglish(true);
    } else if (isEnglish === true) {
      setIsEnglish(false);
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
          { isEnglish ? "English" : "Romaji"}
        </button>
        <input type="submit" value="Filter" />
      </form>
    </>
  );
};

export default Filter;
