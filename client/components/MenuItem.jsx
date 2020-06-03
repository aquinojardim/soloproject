import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuItemCard from './MenuItemCard';
import DetailsModal from './DetailsModal';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedMenu: false,
      allData: {},
      modalState: {
        open: false,
        type: null,
        position: { top: 0, left: 0 },
        name: null
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    fetch('/api/')
      .then((res) => {return res.json()})
      .then((allData) => {
        return this.setState({
          allData,
          fetchedMenu: true
      })
    })
      .catch(err => console.log('Menu.componentDidMount: get menu: ERROR: ', err));
  }

  openModal(type, position, name) {
    this.setState({
      modalState: {
        ...this.state.modalState,
        open: true,
        type,
        position,
        name
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

    const { allData } = this.state;

    const itemElems = allData['menuitem'].map((info, key) => {
      return (
        <MenuItemCard
        key={key}
        info={info}
        allData={allData}
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
          {itemElems}
        </div>
        {this.state.modalState.open &&
          <DetailsModal
            type={this.state.modalState.type}
            position={this.state.modalState.position}
            name={this.state.modalState.name}
            allData={this.state.allData}
            closeModal={this.closeModal}
          />
        }
      </section>
    );
  }
}

export default Menu;
