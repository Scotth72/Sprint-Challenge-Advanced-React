import React from 'react';
import axios from 'axios';
import Team from './components/Team';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response)
      this.state({
        data: response.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    return(
      <div>
        <h1 >2019 Womens World Cup</h1>
        <Team/>
      </div>
    )
  }


}

export default App;
