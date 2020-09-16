import React from 'react';
import Context from '../../Context';
import './ItemTitle.css';

export default class ItemTitle extends React.Component {
  static contextType = Context;
  
  renderItemList() {
    return this.context.itemList.map((item) => {
      const { vendor, fullPrice } = item;
  
      const itemList = (
        <div id="#itemTitle">
          <h4>{vendor} </h4>
          <span>Full Price: {fullPrice}</span>
        </div>
      );
      return itemList;
    });
  }

  render() {
    return(
        this.renderItemList()
    )
  }
}