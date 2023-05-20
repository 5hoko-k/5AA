import { useContext } from "react";
import { AnimeData } from "../pages/Anime";

export default function Episodes() {
    const { averageScore, totalEpisodes, genres, tags, episodes, characters } =
    useContext(AnimeData);
    return (
        <>
        
        </>
    )
}