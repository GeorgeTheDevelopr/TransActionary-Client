import React from 'react';
import './AddTAForm.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Context from '../../Context';
import ItemApiService from '../../services/item-api-service';

export default class AddItemForm extends React.Component {
  static contextType = Context;

  handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      vendor: e.target.vendorName.value,
      items: e.target.items.value,
      full_price: e.target.fullPrice.value,
    };
    ItemApiService.postItem(newItem)
      .then((item) => this.context.addItem(item))
      .then(() => this.props.history.push("/"));
  };


  render(){
    return(
     <div>
      <Header />
      <Navbar />
      <form className="addTA" onSubmit={this.handleSubmit}>
            <legend>Add Transaction</legend>
            <label htmlFor="vendorName">Vendor</label>
            <input type="text" name="vendorName" id="vendorName" placeholder="Kroger" required />

            <label htmlFor="items">Items</label>
            <textarea name="items" id="items" placeholder="Enter items seperated by commas. i.e. Broccoli, Corn, Juice" required />

            <label htmlFor="fullPrice">Total Price</label>
            <input type="text" name="fullPrice" id="fullPrice" placeholder="$4.99" required />
            
            <div className='form-btn-container'>
              <input type="submit" placeholder="Submit" value="Submit" id='submit-ta' />

              <input className="btn" type="button" value="Cancel" id='cancel-ta' onClick={() => this.props.history.goBack()}/>
            </div>
          </form>
      </div>
    )
  }
}