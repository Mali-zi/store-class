import { Component } from "react";
import PropTypes from 'prop-types';

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£',
};

item.propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionFull: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="background-element" />
        <div className="highlight-window">
          <div className="highlight-overlay" />
        </div>
        <div className="window">
          <ShopItemFunc item={item} />
        </div>
      </div>
    );
  };
};

class ShopItemFunc extends Component {
  render() {
    return (
      <div class="main-content">
        <h2>{this.props.item.brand}</h2>
        <h1>{this.props.item.title}</h1>
        <h3>{this.props.item.description}</h3>
        <div class="description">{this.props.item.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay" />
        </div>
        <div class="divider" />
        <div class="purchase-info">
          <div class="price">£{this.props.item.price}.00</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }; 
};

export default App;