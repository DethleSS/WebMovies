import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ListMovie from './Pages/ListMovie/listMovie'
import InfoMovieComponent from './Pages/InfoMovie/infoMovieComponent'
import AddComponentMovie from './Pages/AddNewMovie/addNewMovieTemplate'
import EditMovie from './Pages/EditMovie/editMovie'
import Authorization from './Pages/Authorization/Authorization'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/listMovie" />
        )} />
        <Route exarc path="/listMovie" component={ListMovie} />
        <Route exarc path="/infoMovie/:id" component={InfoMovieComponent} />
        <Route exarc path="/editMovie/:id" component={EditMovie} />
        <Route exarc path="/addNewMovie" component={AddComponentMovie} />
        <Route exarc path="/authorization" component={Authorization} />
      </Switch>
    </Router>
  );
}

export default App;
