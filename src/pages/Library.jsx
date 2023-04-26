import DisplayLibrary from "../components/DisplayLibrary";
import { createContext, useContext, useState } from "react";

const TitleLanguage = createContext("english");

export default function Library() {
  return (
    <>
      <TitleLanguage.Provider value="english">
        <Filter />
        <DisplayLibrary />
      </TitleLanguage.Provider>
    </>
  );
}

const Filter = () => {
  const [titleLangeage, steTitleLanguage] = useState("english");

  const handleTitleChange = () => {
    if (titleLangeage !== "english") {
      steTitleLanguage("english");
    } else if (titleLangeage === "english") {
      steTitleLanguage("romaji");
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

        <button onClick={handleTitleChange}>{titleLangeage === 'english' ? 'English' : 'Romaji'}</button>
        <input type="submit" value="Filter" />
      </form>
    </>
  );
};
