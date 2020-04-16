import React, {Component} from 'react';
import Posts from './components/posts';
import Header from './components/header';
import './App.css';
    class App extends Component {
      
      state = {
        contacts: [{}]
      }
      
      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }

      render () {
        return (
          <div className="App">
            <div className="App-header">
              <Header />
            </div>
            <div className="posts">
              <Posts contacts={this.state.contacts} />
            </div>
          </div>
        );
      }
    }


export default App;
