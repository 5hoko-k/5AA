import { useState } from "react";

const Filter = () => {
  const [animeTitleLanguage, setAnimeTitleLanguage] = useState("english");

  const handleTitleChange = () => {
    if (titleLangeage !== "english") {
      setAnimeTitleLanguage("english");
    } else if (titleLangeage === "english") {
      setAnimeTitleLanguage("romaji");
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
          {animeTitleLanguage === "english" ? "English" : "Romaji"}
        </button>
        <input type="submit" value="Filter" />
      </form>
    </>
  );
};

export default Filter;
