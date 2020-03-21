import React from "react";
import { Menu, Input } from "semantic-ui-react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Menu inverted>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Inventory</Menu.Item>
          <Menu.Item>Financing</Menu.Item>
          <Menu.Item>Specials</Menu.Item>
          <Menu.Item>Schedule A Test Drive</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>
            <Input className="icon" icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default Navbar;

//fiomardicardealership.com
//honda.com
//
