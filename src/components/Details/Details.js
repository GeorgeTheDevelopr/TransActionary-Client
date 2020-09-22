import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Details.css';
// import ItemApiService from '../../services/item-api-service';
import Context from '../../Context';


export default class Details extends React.Component {
  static contextType = Context;

  render(){
    const { itemList = [] } = this.context;
    const item = itemList.find((i) => i.id === Number(this.props.match.params.id)) || {};
    const itemsSplitArr = item.items.split(',').map((items) => {
      return <li key={item.id} id="listedItem">{items}</li>
    })
    return (  
    <div className="App" id="main-view">
      <Header className="App-header" />
      <Navbar />
      <div id='single-item'>
        <h4>{item.vendor} </h4>
        <span>Full Price: {item.fullPrice}</span>
        <ul>
          {itemsSplitArr}
        </ul>
        <input type="button" value="Go Back" id='back-btn' onClick={() => this.props.history.goBack()}/>
      </div>
      
    </div>
    );
    }
  }