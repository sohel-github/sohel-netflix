import Row from "./components/Row";
import request from "./request";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Original"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentary Movies" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
