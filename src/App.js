import React from 'react';
import './App.css';
import DeckContainer from './components/deck_container.js'
import PackContainer from './components/pack_container.js'
import Header from './components/header.js'
import {getPacks} from './actions.js'
import {connect} from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    this.props.getPacks()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <h3>Let's Draft!</h3>
        <PackContainer />
        <DeckContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {getPacks: () => dispatch(getPacks())}
}

export default connect(((state) => ({packs: state.packs})), mapDispatchToProps)(App)
