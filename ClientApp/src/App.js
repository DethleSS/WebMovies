import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ListMovie from './Pages/ListMovie/listMovie'
import InfoMovieComponent from './Pages/InfoMovie/infoMovieComponent'
import AddComponentMovie from './Pages/AddNewMovie//addNewMovieTemplate'
import EditMovie from './Pages/EditMovie/editMovie'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/listMovie" />
        )} />
        <Route exarc path="/listMovie" component={ListMovie} />
        <Route exarc path="/infoMovie" component={InfoMovieComponent} />
        <Route exarc path="/editMovie" component={EditMovie} />
        <Route exarc path="/addNewMovie" component={AddComponentMovie} />

      </Switch>
    </Router>
  );
}

export default App;
