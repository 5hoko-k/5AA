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

function NewFilter() {
  const { loading, data, error } = useQuery(query);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    const genres = data.User.statistics.anime.genres.map((obj) => obj.genre);
    const formats = data.User.statistics.anime.formats.map((obj) => obj.format);
    const status = ["Watching", "Completed", "Planning", "Dropped", "Paused"];

    return (
      <div className="flex p-5 justify-around shadow-lg rounded-md">
        <ListBox data={genres} text="Genre" />
        <ListBox data={formats} text="Formats" />
        <ListBox data={status} text="Status" />
      </div>
    );
  }
}

export default NewFilter;

const ListBox = ({ data, text }) => {
  const [selectedOption, setSelectedOption] = useState(text);

  return (
    <div className="relative">
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
