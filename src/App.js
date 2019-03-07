import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let items = [
      { name: 'Shirt', price: '$14' },
      { name: 'Towel', price: '$10' },
      { name: 'Sandals', price: '$30' },
      { name: 'Bucket', price: '$20' },
      { name: 'Ticket to Hawaii', price: '$5000' },
    ]

    let content = items.map((item) => {
      return (
        <li key={item.name}>{item.name}: {item.price}</li>
      )
    })

    return (
      <div className="App">
        Welcome to the store!
        <ol className="Content">
          { content }
        </ol>
      </div>
    );
  }
}

export default App;
