import React from 'react';
import Context from '../../Context';
import './ItemList.css';
// import ItemTitle from  '../ItemTitle/ItemTitle';

export default class ItemList extends React.Component {
  static contextType = Context;

  renderItemList() {
    return this.context.itemList.map((item) => {
      const { items, vendor, fullPrice } = item;
      console.log(vendor);
      const itemsSplitArr = items.split(',').map((items) => {
        return <li id="listedItem">{items}</li>
      })
      
      const itemList = (
        <div id='itemCard'>
          <h4>{vendor} </h4>
          <span>Full Price: {fullPrice}</span>
          <ul id="itemList">
            {itemsSplitArr}
          </ul>
          <div id='update-btn-container'>
            <input type='button' value='Update List' onClick={() => this.updateItem(item.id)} />
          </div>
        </div>
      
      );
      return itemList;
    });
  }

  render() {
    return (
      <div className="taList" id="taList" >
        {this.renderItemList()}
      </div>) 
    }
}