import { useContext } from "react";
import "../styles/Footer.css";
import { TitleIsEnglish, SetTitleIsEnglish } from "../App";
function Footer() {
const isEnglish = useContext(TitleIsEnglish)
const setEnglish = useContext(SetTitleIsEnglish)

  const handleTitleChange = () => {
    setEnglish(!isEnglish)
  };
  return (
    <>
      <footer>
        <nav>
          <ul>
            <li>link</li>
            <li>
              <button onClick={handleTitleChange}>
                {isEnglish ? "English" : "Romaji"}
              </button>
            </li>
            <li>link</li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
