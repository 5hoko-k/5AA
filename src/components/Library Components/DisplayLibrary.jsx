import { useState } from "react";
import Filter from "./Filter";
import Grid from "@mui/material/Grid";
import DisplayAnime from "./DisplayAnime";
import NewFilter from "./NewFilter";
import DisplayAnimeProgress from '../Home Components/DisplayAnimeProgress';

function DisplayLibrary(props) {
  const [genre, setGenre] = useState();
  const [format, setFormat] = useState();
  const [status, setStatus] = useState();

  if (props.loading) return <p>Loading...</p>;
  if (props.error) return <p>Error : {error.message}</p>;

  const mergedListEntries = props.data.MediaListCollection.lists.flatMap(
    (obj) => obj.entries
  );
  // console.log("MLE");
  // console.log(mergedListEntries);
  // console.log("MLE");

  const sortedMergedListEntries = mergedListEntries.sort(
    (a, b) => b.media.popularity - a.media.popularity
  );
  // console.log("SMLE");
  // console.log(sortedMergedListEntries);
  // console.log("SMLE");

  const onFilter = (genre, status, format) => {
    setGenre(genre);
    setStatus(status);
    setFormat(format);
  };

  const filteredEntries = sortedMergedListEntries.filter((entry) => {
    let matched = true;

    if (genre && entry.media.genres.indexOf(genre) === -1) {
      matched = false;
    }
    if (format && entry.media.format !== format) {
      matched = false;
    }
    if (status && entry.status !== status) {
      matched = false;
    }
    return matched;
  });

  console.log(filteredEntries);

  return (
    <>
      <div className="h-32"></div>
      <div className="px-16">
        <NewFilter onFilter={onFilter} />
      </div>

      {props.data && (
        <>
          <DisplayAnimeProgress entries={filteredEntries} />
          {/* <Grid container>
            <DisplayAnime
              entries={sortedMergedListEntries}
              genre={genre}
              status={status}
              format={format}
            />
          </Grid> */}
        </>
      )}
    </>
  );
}

export default DisplayLibrary;
