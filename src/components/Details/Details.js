import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Details.css';
import Context from '../../Context';
import ItemApiService from '../../services/item-api-service';


export default class Details extends React.Component {
  static contextType = Context;

  handleDelete = () => {
    const { itemList = [] } = this.context;
    const item = itemList.find((i) => i.id === Number(this.props.match.params.id));
    ItemApiService.deleteItem(item.id)
      .then(() => this.props.history.push("/"))
  }

  render(){
    const { itemList = [] } = this.context;
    const item = itemList.find((i) => i.id === Number(this.props.match.params.id));
    if (!item) {
      return <Redirect to='/' />
    }
    const itemsSplitArr = item.items.split(',').map((items, idx) => {
      return <li key={idx} id="listedItem">{items}</li>
    })
    return (  
    <div className="App" id="main-view">
      <Header className="App-header" />
      <Navbar />
      <div id='single-item'>
        <h4>{item.vendor} </h4>
        <span>Full Price: {item.fullPrice}</span>
        <ul >
          {itemsSplitArr}
        </ul>
        <div id='control-btns'>
          <input type="button" value="Go Back" id='back-btn' onClick={() => this.props.history.goBack()}/>
          <input type="button" value="Delete List" id='delete-btn' onClick={() => this.handleDelete()}/>
        </div>
      </div>
      
    </div>
    );
    }
  }