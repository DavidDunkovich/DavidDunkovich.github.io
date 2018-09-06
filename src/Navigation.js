import React, { Component } from 'react';
import './App.css';
import { Menu } from 'semantic-ui-react'

class Navigation extends Component {
    render() {

    const { activeItem } = this.props;

    return (
        <Menu text className="menu">
            <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={this.props.handleItemClick}
            />
            <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.props.handleItemClick}
            />
            <Menu.Item
            name='Resume'
            active={activeItem === 'Resume'}
            onClick={this.props.handleItemClick}
            />
        </Menu>
    );
  }
}

export default Navigation;
