import DisplayLibrary from "../components/DisplayLibrary";
import Filter from "../components/Filter";
import { createContext, useContext, useState } from "react";

const TitleLanguage = createContext("english");

export default function Library() {
  return (
    <>
      <Filter />
      <TitleLanguage.Provider value="english">
        <DisplayLibrary />
      </TitleLanguage.Provider>
    </>
  );
}
