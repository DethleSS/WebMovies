import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ListMovie from './Pages/ListMovie/listMovie'
import InfoMovieComponent from './Pages/InfoMovie/infoMovieComponent'
import AddComponentMovie from './Pages/AddNewMovie/addNewMovieTemplate'
import EditMovie from './Pages/EditMovie/editMovie'
import Authorization from './Pages/Authorization/Authorization'
import Profile from './Pages/Authorization/Profile/Profile'
import { useAuth } from './Components/Hook/authHook'
import { AuthContext } from './Components/Context/AuthContext'

function Greeting(props) {
  const { usertoken } = useAuth()
  const isAuthenticated = !!usertoken
  if (isAuthenticated) {

    return <Route exact path="/authorization" component={Profile} />
  }
  return <Route exact path="/authorization" component={Authorization} />
}

function App() {
  const { usertoken, login, logout, userID } = useAuth()
  const isAuthenticated = !!usertoken
  return (<>
    <AuthContext.Provider value={{
      usertoken, login, logout, userID, isAuthenticated
    }}>
      <Router>
        <Switch>
          {Greeting(isAuthenticated)}
        </Switch>
      </Router>

    </AuthContext.Provider>
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/listMovie" />
        )} />
        <Route exarc path="/listMovie" component={ListMovie} />
        <Route exarc path="/infoMovie/:id" component={InfoMovieComponent} />
        <Route exarc path="/editMovie/:id" component={EditMovie} />
        <Route exarc path="/addNewMovie" component={AddComponentMovie} />

      </Switch>
    </Router>
  </>
  );
}

export default App;
