import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class GeneralMenu extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Поиск клиента и оплата</Link>
        <Link to='/program loyality'>Программы лояльности</Link>
        <Link to='/calc'>Калькулятор каско</Link>
        <Link to='/upsell'>Upsell</Link>
        <Link to='/cross_sell'>Cross sell</Link>
      </div>
    );
  }
}

export default GeneralMenu;
