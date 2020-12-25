// import classes from './App.module.scss';
import { Route, Switch } from 'react-router-dom';

// import MovieComponent from "./componnents/fullMovieComponent/fullMovie.component";
import Header from "./componnents/headerComponent/header.component";
import HomePage from "./pages/home/home.page";
import SearchPage from "./pages/search/search.page";

function App() {
  return (
    <div>
      <Header />
      {/* <MovieComponent /> */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </div>
  );
}

export default App;
