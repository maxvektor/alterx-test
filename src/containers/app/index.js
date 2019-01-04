import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../login'
import Contacts from '../contacts'
import css from './index.module.css'

let auth = true

const renderContacts = auth => {
  console.log('WWWWWW', auth)

  if (auth) {
    console.log('auth1', auth)
    return <Contacts />
  }

  console.log('auth2', auth)

  return <Redirect to="/" />
}

const App = () => (
  <div className={css.app}>
    <header className={css.header}>
      <Link className={css.link} to="/login">
        login
      </Link>
      <Link className={css.link} to="/contacts">
        contacts
      </Link>
    </header>

    <main>
      <Route exact path="/" render={() => <Redirect to="/contacts" />} />
      <Route path="/login" component={Login} />
      <Route path="/contacts" render={() => renderContacts(auth)} />
    </main>
  </div>
)

const mapStateToProps = ({ user }) => ({
  name: user.auth
})

export default connect(mapStateToProps)(App)
