import { useParams } from "react-router-dom"

export default function Anime(props) {
    const { animeId } = useParams()
    return (
        <>
        <h1>{animeId}</h1>
        </>
    )
}