import React from "react";
import { Table, Icon, Dropdown, Button } from "semantic-ui-react";
import MakeFilter from "./Filters/MakeFilter";
import BodyStyleFilter from "./Filters/BodyStyleFilter";
import ColorFilter from "./Filters/ColorFilter";
import ModelFilter from "./Filters/ModelFilter";
import ModelYearFilter from "./Filters/ModelYearFilter";
import PriceFilter from "./Filters/PriceFilter";
import MileageFilter from "./Filters/MileageFilter";
import CarCard from "./CarCard";
import axios from "axios";

class Inventory extends React.Component {
  state = {
    activeMake: false,
    activeModel: false,
    activeBodyStyle: false,
    activeColor: false,
    activeModelYear: false,
    activePrice: false,
    activeMileage: false,
    cars: []
  };

  componentDidMount() {
    axios.get("/api/cars")
      .then( res => {
        this.setState({ cars: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
    }

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
      case "activeMileage":
        this.setState({ activeMileage: !this.state.activeMileage });
        break;
    }
  };

  render() {
    const sortOptions = [
      {
        key: "Make Ascending",
        text: "Make Ascending",
        value: "Make Ascending"
      },
      {
        key: "Price Low",
        text: "Price Low",
        value: "Price Low"
      },
      {
        key: "Price High",
        text: "Price High",
        value: "Price High"
      },
      {
        key: "Mileage Low",
        text: "Mileage Low",
        value: "Mileage Low"
      },
      {
        key: "Mileage High",
        text: "Mileage High",
        value: "Mileage High"
      },
      {
        key: "Year Ascending",
        text: "Year Ascending",
        value: "Year Ascending"
      },
      {
        key: "Year Descending",
        text: "Year Descending",
        value: "Year Descending"
      }
    ];

    return (
      <>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell
                style={{
                  width: "25%",
                  borderBottom: "1px solid"
                }}
              >
                <Button
                  style={{
                    width: "100%",
                    fontSize: "1.1em",
                    fontFamily: "verdana",
                    backgroundColor: "#575757",
                    color: "white"
                  }}
                >
                  Clear Filters
                </Button>
              </Table.Cell>
              <Table.Cell
                style={{
                  borderBottom: "1px solid",
                  width: "25%"
                }}
              >
                <Dropdown
                  placeholder="Sort By"
                  fluid
                  selection
                  options={sortOptions}
                />
              </Table.Cell>
              <Table.Cell
                style={{
                  borderBottom: "1px solid",

                  width: "25%"
                }}
              >
                Listings Per Page
              </Table.Cell>
              <Table.Cell
                style={{ borderBottom: "1px solid", width: "25%" }}
              ></Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start"
          }}
        >
          <Table style={{ width: "25%", margin: "0px" }}>
            <Table.Body>
              <Table.Row>
                <Table.Cell
                  selectable
                  style={{
                    backgroundColor: "#001f52",
                    height: "50px",
                    color: "white",
                    fontSize: "1.2em"
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
                    fontSize: "1.2em"
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
                    fontSize: "1.2em"
                  }}
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
                  style={{
                    backgroundColor: "#001f52",
                    height: "50px",
                    color: "white",
                    fontSize: "1.2em"
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
                    fontSize: "1.2em"
                  }}
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
                  style={{
                    backgroundColor: "#001f52",
                    height: "50px",
                    color: "white",
                    fontSize: "1.2em"
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
                    fontSize: "1.2em"
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
                    fontSize: "1.2em"
                  }}
                ></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table style={{ width: "75%", margin: "0px" }}>
            <Table.Body>
              {this.state.cars.map( c => (
                <Table.Row  key={c.id} style={{ height: "200px" }}>
                <Table.Cell>
                  <CarCard cars={c} />
                </Table.Cell>
              </Table.Row>
              )
                )}
            </Table.Body>
          </Table>
        </div>
      </>
    );
  }
}

export default Inventory;
