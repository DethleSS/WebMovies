import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ListMovie from './Pages/ListMovie/listMovie'
import InfoMovieComponent from './Pages/InfoMovie/infoMovieComponent'
import AddComponentMovie from './Pages/AddNewMovie/addNewMovieTemplate'
import EditMovie from './Pages/EditMovie/editMovie'
import Authorization from './Pages/Authorization/Authorization'
import Profile from './Pages/Authorization/Profile/Profile'
import { UseAuth } from './Components/Hook/authHook'
import { AuthContext } from './Components/Context/AuthContext'

function Greeting(token) {
  if (token) {

    return <Route exact path="/authorization" component={Profile} />
  }
  return <Route exact path="/authorization" component={Authorization} />
}

function App() {
  const { usertoken, login, logout, userID } = UseAuth();
  const token = usertoken;
  return (<>
    <AuthContext.Provider value={{
      usertoken, login, logout, userID
    }}>
      <Router>
        <Switch>
          {Greeting(token)}
        </Switch>
      </Router>


    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/authorization" />
        )} />
        <Route exarc path="/listMovie" component={ListMovie} />
        <Route exarc path="/infoMovie/:id" component={InfoMovieComponent} />
        <Route exarc path="/editMovie/:id" component={EditMovie} />
        <Route exarc path="/addNewMovie" component={AddComponentMovie} />

      </Switch>
    </Router>
    </AuthContext.Provider>
  </>
  );
}

export default App;
