import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuItemCard from './MenuItemCard';
import DetailsModal from './DetailsModal';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedMenu: false,
      menu: [],
      modalState: {
        open: false,
        type: null,
        position: { top: 0, left: 0 },
        id: null
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    console.log("in componentDidMount")
    fetch('/api/')
      // .then((res) => {return res.json()})
      .then((menu) => {
        console.log(menu)
        if (!Array.isArray(menu)) menu = [];
        return this.setState({
          menu,
          fetchedMenu: true
        });
      })
      .catch(err => console.log('Menu.componentDidMount: get menu: ERROR: ', err));
  }

  openModal(type, position, id) {
    this.setState({
      modalState: {
        ...this.state.modalState,
        open: true,
        type,
        position,
        id
      }
    })
  }

  closeModal() {
    this.setState({
      modalState: {
        ...this.state.modalState,
        open: false
      }
    })
  }

  render() {
    if (!this.state.fetchedMenu) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );

    const { menu } = this.state;

    if (!menu) return null;

    if (!menu.length) return (
      <div>Sorry, no menu found</div>
    );

    const charElems = menu.map((char, i) => {
      return (
        <MenuItemCard
          key={i}
          info={char}
          openModal={this.openModal}
        />
      );
    });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <h2>menu</h2>
          <Link to={`/create`}>
            <button
              type="button"
              className="btnSecondary"
            >
              Add New Menu Item
            </button>
          </Link>
        </header>
        <div className="charContainer">
          {charElems}
        </div>
        {this.state.modalState.open &&
          <DetailsModal
            type={this.state.modalState.type}
            position={this.state.modalState.position}
            id={this.state.modalState.id}
            closeModal={this.closeModal}
          />
        }
      </section>
    );
  }
}

export default Menu;
