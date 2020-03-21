import React from "react";
import { Table, Icon } from "semantic-ui-react";
import MakeFilter from "./Filters/MakeFilter";

class Inventory extends React.Component {
  state = {
    activeMake: false,
    activeModel: false,
    activeBodyStyle: false,
    activeColor: false,
    activeModelYear: false,
    activePrice: false
  };

  handleclickMake = () => {
    this.setState({ activeMake: !this.state.activeMake });
  };

  render() {
    return (
      <>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell style={{ backgroundColor: "#b5b5b5" }}>
                Clear Filter
              </Table.Cell>
              <Table.Cell style={{ borderBottom: "1px solid" }}>
                Sort By
              </Table.Cell>
              <Table.Cell style={{ borderBottom: "1px solid" }}>
                Listings Per Page
              </Table.Cell>
              <Table.Cell style={{ borderBottom: "1px solid" }}></Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginRight: "50px"
          }}
        >
          <Table style={{ width: "29.5%", height: "100%" }}>
            <Table.Body>
              <Table.Row>
                <Table.Cell
                  selectable
                  style={{ backgroundColor: "#b5b5b5" }}
                  onClick={this.handleclickMake}
                >
                  Make
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                {this.state.activeMake === true ? <MakeFilter /> : null}
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable style={{ backgroundColor: "#b5b5b5" }}>
                  Model
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable style={{ backgroundColor: "#b5b5b5" }}>
                  Body Style
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable style={{ backgroundColor: "#b5b5b5" }}>
                  Color
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable style={{ backgroundColor: "#b5b5b5" }}>
                  Model Year
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable style={{ backgroundColor: "#b5b5b5" }}>
                  Price
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table style={{ width: "70%", height: "100%" }}>
            <Table.Body>
              {/* <Table.Row>2</Table.Row>
              <Table.Row>2</Table.Row>
              <Table.Row>2</Table.Row>
              <Table.Row>2</Table.Row>
              <Table.Row>2</Table.Row>
              <Table.Row>2</Table.Row>
              <Table.Row>2</Table.Row> */}
            </Table.Body>
          </Table>
        </div>
      </>
    );
  }
}

export default Inventory;
