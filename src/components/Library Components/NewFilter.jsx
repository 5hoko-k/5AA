import { useQuery, gql } from "@apollo/client";
import { Menu } from "@headlessui/react";

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
            mediaIds
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
        <Menu>
          <Menu.Button className='p-2 ring-2 rounded-md'>Genre</Menu.Button>
          <Menu.Items>
            {genres.map(({ genre }) => (
              <Menu.Item key={genre}>
                {({ active }) => (
                  <p className={`${active && 'bg-slate-300'}`}>{genre}</p>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </>
    );
  }
}

export default NewFilter;
