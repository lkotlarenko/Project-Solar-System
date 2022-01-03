import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
class App extends React.Component {
  render() {
    return (
      <>
        <Header headerTitle="Sistema Solar" />
        <SolarSystem data="test" />
        <Title headline="batata" />
      </>
    );
  }
}

export default App;
