import React from "react";
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
  render() {
    return (
      <>
      <Menu inverted fluid>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Inventory</Menu.Item>
      <Menu.Item>Financing</Menu.Item>
      <Menu.Item>Specials</Menu.Item>
      <Menu.Item>Schedule A Test Drive</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
      </Menu>
      </>
    );
  }
}


export default Navbar;