import { useQuery, gql } from "@apollo/client";
import { Listbox, Menu } from "@headlessui/react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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

function Filter({ onFilter }) {
  const { loading, data, error } = useQuery(query);
  const [genre, setGenre] = useState();
  const [format, setFormat] = useState();
  const [status, setStatus] = useState();

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    const genres = data.User.statistics.anime.genres.map((obj) => obj.genre);
    const formats = data.User.statistics.anime.formats.map((obj) => obj.format);
    const statusData = ["CURRENT", "COMPLETED", "PLANNING", "DROPPED", "PAUSED"];

    const handleSubmit = (e) => {
      onFilter(genre, status, format);
    };

    return (
      <div className="flex flex-col gap-4 sm:flex-row p-5 mb-10 sm:justify-around items-center justify-center shadow-lg rounded-md">
        <ListBox data={genres} text="Genre" setFilter={setGenre}/>
        <ListBox data={formats} text="Formats" setFilter={setFormat}/>
        <ListBox data={statusData} text="Status" setFilter={setStatus}/>
        <button type="button" className="p-2 w-24 hover:bg-emerald-600 ring-2 rounded-sm bg-emerald-500" onClick={handleSubmit}>Filter</button>
      </div>
    );
  }
}

export default Filter;

const ListBox = ({ data, text, setFilter }) => {
  const [selectedOption, setSelectedOption] = useState(text);
  setFilter(selectedOption)
  return (
    <div className="relative shrink">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button className="p-2 w-44 ring-2 rounded-md flex justify-between items-center">
          <em>{selectedOption}</em>
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        </Listbox.Button>
        <Listbox.Options className="w-44 max-h-60 shadow-xl rounded-sm absolute left-0 z-10 bg-white overflow-auto">
          {data.map(word => (
            <Listbox.Option key={word} value={word}>
              {({ active, selected }) => (
                <div className={` p-2 ${active ? "bg-slate-400" : ""}`}>
                  <span className={selected ? `bg-slate-400` : ``}>{word}</span>
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
