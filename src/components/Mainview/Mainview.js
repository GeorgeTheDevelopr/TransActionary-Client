import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Mainview.css';
import ItemApiService from '../../services/item-api-service';
import Context from '../../Context';


export default class Mainview extends React.Component {
  static contextType = Context;
  updateItem = (itemId) => {
    ItemApiService.updateItem(itemId).then((updatedItem) =>
      this.context.itemUpdated(itemId, updatedItem)
    );
  };

  renderItemList() {
    const { itemList = [] } = this.context
    return itemList.map((item) => {
      const { id, vendor, fullPrice } = item;      
      const itemList = (
        <div id='itemCard' key={id}>
          <h4>{vendor} </h4>
          <span>Full Price: {fullPrice}</span>
          <div id='update-btn-container'>
            <Link to={`/items/${id}`}><input type='button' id="viewList-btn" value='View List'/></Link>
          </div>
        </div>

      
      );
      return itemList;
    });
  }

componentDidMount() {
  this.renderItemList()
}

render(){
  return (  
  <div className="App" id="main-view">
    <Header className="App-header" />
    <Navbar />
    <div id='addTA-container'>
      <Link to="/addta"><input type='button' value="Add New Transaction" id='addTA-btn'/></Link>
    </div>
    <h2 id='ta-list-header'>Transactions List</h2>
    <div className='item-list'>
      {this.renderItemList()}
    </div>
  </div>
  );
  }
}