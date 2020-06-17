import React from 'react';
import './App.css';
import { Menu } from 'semantic-ui-react'

export default props => (
    <Menu text className="menu">
        <Menu.Item
            name='About'
            active={props.activeItem === 'About'}
            onClick={props.handleItemClick}
        />
        <Menu.Item
            name='Projects'
            active={props.activeItem === 'Projects'}
            onClick={props.handleItemClick}
        />
        <Menu.Item
            name='Resume'
            href='/resume.pdf' target="_blank"
        />
    </Menu>
);
