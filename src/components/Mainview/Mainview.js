import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Mainview.css';
import ItemApiService from '../../services/item-api-service';
import Context from '../../Context';
import ItemList from '../ItemList/ItemList'


export default class Mainview extends React.Component {
  static contextType = Context;
  updateItem = (itemId) => {
    ItemApiService.updateItem(itemId).then((updatedItem) =>
      this.context.itemUpdated(itemId, updatedItem)
    );
  };

render(){
  return (  
  <div className="App" id="main-view">
    <Header className="App-header" />
    <Navbar />
    <div id='addTA-container'>
      <Link to="/addta"><input type='button' value="Add Item" id='addTA-btn'/></Link>
    </div>
    <ItemList className='itemList' />
  </div>
  );
  }
}