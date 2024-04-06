import { useQuery, gql } from "@apollo/client";
import { Listbox, Menu } from "@headlessui/react";
import { useState } from "react";

const query = gql`
  query {
    User(id: 853967) {
      statistics {
        anime {
          formats(sort: COUNT_DESC) {
            format
          }
          genres(sort: COUNT_DESC) {
            genre
          }
        }
      }
    }
  }
`;

function NewFilter() {
  const { loading, data, error } = useQuery(query);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    const genres = data.User.statistics.anime.genres;

    return (
      <>
        <ListBox genres={genres} />
      </>
    );
  }
}

export default NewFilter;

const ListBox = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.genres[0].genre);
  console.log(selectedOption);
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <Listbox.Button className="p-2 ring-2 rounded-md">
        {selectedOption}
      </Listbox.Button>
      <Listbox.Options>
        {props.genres.map(({ genre }) => (
          <Listbox.Option key={genre} value={genre}>
            {({ active, selected }) => (
              <div className={` py-3 px-2 ${ active ? 'bg-slate-400' : ''}`}>
                <span className={selected ? `bg-slate-400` : ``}>{genre}</span>
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
