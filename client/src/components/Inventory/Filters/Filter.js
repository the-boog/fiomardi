import React from "react";
import { Icon, Table } from "semantic-ui-react";
import MakeFilter from "./MakeFilter";
import BodyStyleFilter from "./BodyStyleFilter";
import ColorFilter from "./ColorFilter";
import ModelFilter from "./ModelFilter";
import ModelYearFilter from "./ModelYearFilter";
import PriceFilter from "./PriceFilter";
import MileageFilter from "./MileageFilter";

class Filter extends React.Component {
  state = {
    activeMake: false,
    activeModel: false,
    activeBodyStyle: false,
    activeColor: false,
    activeModelYear: false,
    activePrice: false,
    activeMileage: false,
  };

  handleClick = (input) => {
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
      case "activeMileage":
        this.setState({ activeMileage: !this.state.activeMileage });
        break;
    }
  };

  render() {
    return (
      <>
        <Table style={{ width: "25%", margin: "0px" }}>
          <Table.Body>
            <Table.Row>
              <Table.Cell
                selectable
                style={{
                  backgroundColor: "#001f52",
                  height: "50px",
                  color: "white",
                  fontSize: "1.2em",
                }}
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
                style={{
                  backgroundColor: "#001f52",
                  height: "50px",
                  color: "white",
                  fontSize: "1.2em",
                }}
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
                style={{
                  backgroundColor: "#001f52",
                  height: "50px",
                  color: "white",
                  fontSize: "1.2em",
                }}
                onClick={() => this.handleClick("activeBodyStyle")}
              >
                Body Style
                <Icon name="dropdown" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              {this.state.activeBodyStyle === true ? <BodyStyleFilter /> : null}
            </Table.Row>
            <Table.Row>
              <Table.Cell
                selectable
                style={{
                  backgroundColor: "#001f52",
                  height: "50px",
                  color: "white",
                  fontSize: "1.2em",
                }}
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
                style={{
                  backgroundColor: "#001f52",
                  height: "50px",
                  color: "white",
                  fontSize: "1.2em",
                }}
                onClick={() => this.handleClick("activeModelYear")}
              >
                Model Year
                <Icon name="dropdown" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              {this.state.activeModelYear === true ? <ModelYearFilter /> : null}
            </Table.Row>
            <Table.Row>
              <Table.Cell
                selectable
                style={{
                  backgroundColor: "#001f52",
                  height: "50px",
                  color: "white",
                  fontSize: "1.2em",
                }}
                onClick={() => this.handleClick("activePrice")}
              >
                Price
                <Icon name="dropdown" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              {this.state.activePrice === true ? <PriceFilter /> : null}
            </Table.Row>
            <Table.Row>
              <Table.Cell
                selectable
                style={{
                  backgroundColor: "#001f52",
                  height: "50px",
                  color: "white",
                  fontSize: "1.2em",
                }}
                onClick={() => this.handleClick("activeMileage")}
              >
                Milage
                <Icon name="dropdown" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              {this.state.activeMileage === true ? <MileageFilter /> : null}
            </Table.Row>
            <Table.Row>
              <Table.Cell
                style={{
                  backgroundColor: "#001f52",
                  height: "400px",
                  color: "white",
                  fontSize: "1.2em",
                }}
              ></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </>
    );
  }
}

export default Filter;
