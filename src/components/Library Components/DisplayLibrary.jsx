import { useState } from "react";
import Filter from "./Filter";
import Grid from "@mui/material/Grid";
import DisplayAnime from "./DisplayAnime";


function DisplayLibrary(props) {
  const [genre, setGenre] = useState();
  const [format, setFormat] = useState();
  const [status, setStatus] = useState();

  if (props.loading) return <p>Loading...</p>;
  if (props.error) return <p>Error : {error.message}</p>;

  const mergedListEntries = props.data.MediaListCollection.lists.flatMap((obj) => obj.entries);
  console.log('MLE')
  console.log(mergedListEntries);
  console.log('MLE')

  const sortedMergedListEntries = mergedListEntries.sort(
    (a, b) => b.media.popularity - a.media.popularity
  );
    console.log('SMLE')
    console.log(sortedMergedListEntries)
    console.log('SMLE')

  const onFilter = (genre, status, format) => {
    setGenre(genre);
    setStatus(status);
    setFormat(format);
  };

  return (
    <>
      <Filter  onFilter={onFilter} />

      {props.data &&
          <Grid container>
            <DisplayAnime
              entries={sortedMergedListEntries}
              genre={genre}
              status={status}
              format={format}
            />
          </Grid>
        }
    </>
  );
}

export default DisplayLibrary;

