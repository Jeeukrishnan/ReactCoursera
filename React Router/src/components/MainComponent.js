import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailedComponent';
import { DISHES } from '../shared/dishes';
import Header from './Headercomponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
     const HomePage = () => {
      return(
          <Home 
          />
      );
    }


    return (
      <div>
       <Header/>
             <Switch>
               <Route path='/home' component={HomePage} />
                   <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />

             </Switch> 
     
      <Footer />
      </div>
    );
  }
}

export default Main;