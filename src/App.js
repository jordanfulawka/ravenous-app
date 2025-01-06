import './App.css';
import BusinessList from "./BusinessList";
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <BusinessList /> 
    </div>
  );
}

export default App;
