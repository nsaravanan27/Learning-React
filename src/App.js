import SearchResults from "./component/SearchResults";
import "./styles.css";

// https://hn.algolia.com/api/v1/search?query=
export default function App() {
  return (
    <div className="App">
      <SearchResults />
    </div>
  );
}
