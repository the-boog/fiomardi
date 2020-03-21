import React from "react";
import { Table, Icon } from "semantic-ui-react";
import MakeFilter from "./Filters/MakeFilter";
import BodyStyleFilter from "./Filters/BodyStyleFilter";
import ColorFilter from "./Filters/ColorFilter";
import ModelFilter from "./Filters/ModelFilter";
import ModelYearFilter from "./Filters/ModelYearFilter";
import PriceFilter from "./Filters/PriceFilter";

class Inventory extends React.Component {
  state = {
    activeMake: false,
    activeModel: false,
    activeBodyStyle: false,
    activeColor: false,
    activeModelYear: false,
    activePrice: false
  };

  handleClick = input => {
    console.log(!this.state.activeMake);
    switch (input) {
      case "activeMake":
        this.setState({ activeMake: !this.state.activeMake });
        break;
      case "activeModel":
        this.setState({ activeModel: !this.state.activeModel });
        break;
      case "activeBodyStyle":
        this.setState({ activeBodyStyle: !this.state.activeBodyStyle });
        break;
      case "activeColor":
        this.setState({ activeColor: !this.state.activeColor });
        break;
      case "activeModelYear":
        this.setState({ activeModelYear: !this.state.activeModelYear });
        break;
      case "activePrice":
        this.setState({ activePrice: !this.state.activePrice });
        break;
    }
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
                  onClick={() => this.handleClick("activeMake")}
                >
                  Make
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                {this.state.activeMake === true ? <MakeFilter /> : null}
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  selectable
                  style={{ backgroundColor: "#b5b5b5" }}
                  onClick={() => this.handleClick("activeModel")}
                >
                  Model
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                {this.state.activeModel === true ? <ModelFilter /> : null}
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  selectable
                  style={{ backgroundColor: "#b5b5b5" }}
                  onClick={() => this.handleClick("activeBodyStyle")}
                >
                  Body Style
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                {this.state.activeBodyStyle === true ? (
                  <BodyStyleFilter />
                ) : null}
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  selectable
                  style={{ backgroundColor: "#b5b5b5" }}
                  onClick={() => this.handleClick("activeColor")}
                >
                  Color
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                {this.state.activeColor === true ? <ColorFilter /> : null}
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  selectable
                  style={{ backgroundColor: "#b5b5b5" }}
                  onClick={() => this.handleClick("activeModelYear")}
                >
                  Model Year
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                {this.state.activeModelYear === true ? (
                  <ModelYearFilter />
                ) : null}
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  selectable
                  style={{ backgroundColor: "#b5b5b5" }}
                  onClick={() => this.handleClick("activePrice")}
                >
                  Price
                  <Icon name="dropdown" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                {this.state.activePrice === true ? <PriceFilter /> : null}
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
