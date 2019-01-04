import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Contacts = ({ name }) => (
  <section>{`Hello, ${name} this is contacts`}</section>
)

const mapStateToProps = ({ user }) => ({
  name: user.name
})

export default connect(mapStateToProps)(Contacts)
