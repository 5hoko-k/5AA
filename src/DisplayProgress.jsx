import { useQuery, gql } from '@apollo/client';

var query = gql``;

function DisplayProgress() {
    const { loading, error, data } = useQuery(query);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
      <>

      </>
     );
}

export default DisplayProgress;