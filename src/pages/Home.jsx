import DisplayProgress from "../components/DisplayProgress";
import DisplayStats from "../components/DisplayStats";
import Container from "@mui/material/Container";

function Home() {
  return (
    <>
      <Container maxWidth="md">
        <DisplayStats />
        <DisplayProgress />
      </Container>
    </>
  );
}
export default Home;
