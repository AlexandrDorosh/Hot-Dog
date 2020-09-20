import React from 'react';
import ReactDOM from 'react-dom';
import uuid from "uuid";
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header/header";
import AddHotDog from "./AddHotDog/AddHotDog";
import HotDogsList from './HotDogsList/HotDogsList';
import EditHotDog from './EditHotDog/EditHotDog';

class App extends React.Component{
  state = {
    List: [],
    currentHotDog: "",
  };

  // componentDidMount(){
  //   this.updateHotDog();
  //  }
 
  //  updateHotDog = () => {
  //    fetch(this.List)
  //    .then(response => {
  //      return response.json();
  //    })
  //    .then(list => {
  //      if(list == null){
  //        this.setState({
  //          List: []
  //        })
  //      }
  //      else{
  //        this.setState({
  //        List: list
  //      })
  //      }
  //    })
  //    .catch(err => console.log(err));
  //  };

  onAddHotDog = (name, price, description, image) => {
    let newHotDog = {
      id: uuid(),
      name: name,
      price: price,
      description: description,
      image: image,
    };

    const newList = [...this.state.List, newHotDog];
    this.onSaveData = () => (newList);
    this.setState(state => {
      return {
        List: newList
      };
    });
  };

  onDeleteHotDog = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);

    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.onSaveData(newList)
    console.log("NewList => ", newList);
    this.setState(state => {
      return {
        List: newList
      };
    });
  };

  onEditHotDog = id =>{
    const index = this.state.List.findIndex(elem => elem.id === id);
    const currentHotDog = this.state.List[index];
    this.setState({
      currentHotDog: currentHotDog
    });
  };

  onEditCurrentHotDog = (id, name, price, description, image) => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    let editedHotDog = {
      id: id,
      name: name,
      price: price,
      description: description,
      image: image,
    };
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, editedHotDog, ...partTwo];
    this.onSaveData(newList);
    this.setState({
      List:newList
    });
  };

 render(){
   return(
    <div className="container">
      <Router>
      <Header />
      <h4 className="all">All hot-dogs</h4>
      <hr className="all_hr" />
      <Switch>
      <Route
                  path="/"
                  exact
                  render={() => (
                      <HotDogsList
                          List={this.state.List}
                          onDeleteHotDog={this.onDeleteHotDog}
                          onEditHotDog={this.onEditHotDog} />
                          )}
                />
      <Route
                  path="/add"
                  exact
                  render={() => <AddHotDog onAddHotDog={this.onAddHotDog} />}
                />
      <Route
                  path='/edit'
                  exact
                  render={() => <EditHotDog 
                  currentHotDog={this.state.currentHotDog} 
                  onEditCurrentHotDog={this.onEditCurrentHotDog} />}
          />
      </Switch>
      </Router>
          </div>
   )
 }
}

ReactDOM.render( <App />, document.getElementById('root')
);