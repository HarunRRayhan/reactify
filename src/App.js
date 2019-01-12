import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <div className="bg-purple w-full px-2">
            <div className="container mx-auto rounded-t shadow bg-cover bg-bottom m-4">
              <div className="text-center text-white pb-16">
                <h1>Hello!</h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
