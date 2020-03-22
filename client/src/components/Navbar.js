import React from "react";
import { Menu, Input } from "semantic-ui-react";

class Navbar extends React.Component {
  state = {
    home: false,
    inventory: false,
    scheduleTestDrive: false,
    financing: false,
    specials: false,
    contact: false
  };

  handleHover = () => {};

  render() {
    return (
      <>
        <Menu style={{ backgroundColor: "#001f52" }}>
          <Menu.Item style={{ color: "white" }}>Home</Menu.Item>
          <Menu.Item active style={{ color: "white" }}>
            Inventory
          </Menu.Item>
          <Menu.Item style={{ color: "white" }}>Financing</Menu.Item>
          <Menu.Item style={{ color: "white" }}>Specials</Menu.Item>
          <Menu.Item style={{ color: "white" }}>
            Schedule A Test Drive
          </Menu.Item>
          <Menu.Item style={{ color: "white" }}>Contact</Menu.Item>
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

// style={{ backgroundColor: "#001f52" }}
