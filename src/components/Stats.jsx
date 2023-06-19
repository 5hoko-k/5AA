import { useContext } from "react";
import { AnimeData } from "../pages/Anime";

export default function Stats() {
    const { averageScore, totalEpisodes, genres, tags,  } =
    useContext(AnimeData);
    return (
        <>
        
        </>
    )
}