import React from 'react';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Store from './Store.js';
import SelectedStore from './SelectedStore.js';
import ProductForm from './ProductForm.js';
import Header from './Header.js';
//import data from './data.json';
import Stores from './Stores.js'
import Products from './Products.js'
import SelectedProduct from './SelectedProduct.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutUs from './AboutUs.js';
//import Profile from './Profile.js';

//import ProductInfo from './ProductInfo.js';

import ProductForm2 from './ProductForm2.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      display_modal: false,
      obj: '',
      storesData: [],

      productInfo: {},
      showProduct: false,
      range: 0,
      productData:[]

    }
  }

  modal_on = (obj) => {
    this.setState({
      display_modal: true,
      obj: obj
    })
  }

  modal_off = () => {
    this.setState({
      display_modal: false
    })
  }

  storesData = (stores) => {
    this.setState({
      storesData: stores
    })
  }
  productInfo = (product) => {
    this.setState({
      productInfo: product,
      showProduct: true,
    })
  }
  updateRange = (data) =>{
    this.setState({
      range: data
    })
  }


  productData = (products) => {
    this.setState({
      productData: products
    })
  }

  render() {
    console.log(this.state.obj)
    return(
      <div>
        <Router>
          <Header />
          <Switch>

          <Route exact path="/">
              <ProductForm storesData={this.storesData}  productInfo={this.productInfo} updateRange={this.updateRange}/>
              <Stores stores={this.state.storesData} modal_on={this.modal_on} product={this.state.productInfo} show={this.state.showProduct} range={this.state.range}/>
              <SelectedStore modal_show={this.state.display_modal} modal_off={this.modal_off} store={this.state.obj} />
            </Route>

          {/* <Route exact path="/stores">
              <ProductForm storesData={this.storesData}  productInfo={this.productInfo} updateRange={this.updateRange}/>
              <Stores stores={this.state.storesData} modal_on={this.modal_on} product={this.state.productInfo} show={this.state.showProduct} range={this.state.range}/>
              <SelectedStore modal_show={this.state.display_modal} modal_off={this.modal_off} store={this.state.obj} />
          </Route> */}
          <Route exact path="/products">
            <ProductForm2 productData={this.productData}/>
            <Products products={this.state.productData} modal_on={this.modal_on} />
            <SelectedProduct modal_show={this.state.display_modal} modal_off={this.modal_off} product={this.state.obj} />
          </Route>

          </Switch>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
        </Router>
        {/* <div>
          {this.props.auth0.isAuthenticated &&
            <Profile />
          }
        </div> */}
      </div>
    );
  }
}

export default App;
