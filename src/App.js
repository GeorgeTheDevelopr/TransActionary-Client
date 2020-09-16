import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import About from './components/About/About';
import Mainview from './components/Mainview/Mainview';
import AddTAForm from './components/AddTAForm/AddTAForm';
import ItemApiService from './services/item-api-service';
import TokenService from './services/token-service';
import Context from './Context';

export default class App extends React.Component {
  state = {
    userList: [],
    user: {},
    itemList: [],
    error: null,
    setUserList: (userList) => {
      this.setState({ userList });
    },
    setUser: (user) => {
      return this.setState({ user });
    },
    setItemList: (itemList) => {
      this.setState({ itemList });
    },
    itemUpdated: (itemId, newItem) => {
      const itemList = this.state.itemList.map((i) =>
        i.id === itemId ? newItem : i
      );
      this.state.setItemList(itemList);
    },
    addItem: (newItem) => {
      return this.state.setItemList([...this.state.itemList, newItem]);
    },
    setError: (error) => {
      console.error(error);
      this.setState({ error });
    },
    clearError: () => {
      this.setState({ error: null });
    },
    getData: () => {
      ItemApiService.getUsers()
        .then(this.state.setUserList)
        .catch(this.state.setError);

      if (TokenService.hasAuthToken()) {
        ItemApiService.getUser()
          .then(this.state.setUser)
          .then(() => {
              ItemApiService.getItems()
                .then(this.state.setItemList)
                .catch(this.state.setError);
            }
          )
          .catch(this.state.setError);
      }
    },
  };

  componentDidMount() {
    this.state.getData();
  }
  
  render() {
     return (
      <Context.Provider value={this.state}>
        <div className="App">
        <Route
            exact path="/" component={TokenService.hasAuthToken() ? Mainview : Home}
          />
          <Route path='/signin' component={SignIn} />
          <Route
            path="/signout"
            render={(rprops) => {
              TokenService.clearAuthToken();
              this.state.setUser({});
              rprops.history.push("/");
              return <></>;
            }}
          />
          <Route path='/about' component={About} />
          <Route exact path='/addta' component={AddTAForm} />
        </div>
      </Context.Provider>
    );
}
}