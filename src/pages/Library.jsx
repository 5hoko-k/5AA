import DisplayLibrary from "../components/DisplayLibrary";
import { createContext, useContext, useState } from "react";

export const TitleLanguage = createContext("english");

export default function Library() {
  const [isEnglish, setIsEnglish] = useState(true);
  return (
    <>
          <TitleLanguage.Provider value={{ isEnglish, setIsEnglish }}>
          <DisplayLibrary />
          </TitleLanguage.Provider>

    </>
  );
}
