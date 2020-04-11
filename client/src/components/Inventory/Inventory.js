import React from "react";
import { Table, Dropdown, Button } from "semantic-ui-react";
import CarCard from "./CarCard";
import axios from "axios";
import Filter from "./Filters/Filter.js";

class Inventory extends React.Component {
  state = {
    cars: [],
  };

  componentDidMount() {
    axios
      .get("/api/cars")
      .then((res) => {
        this.setState({ cars: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  filterOptions = (option) => {
    console.log(option);
  };

  render() {
    const sortOptions = [
      {
        key: "Make Ascending",
        text: "Make Ascending",
        value: "Make Ascending",
      },
      {
        key: "Price Low",
        text: "Price Low",
        value: "Price Low",
      },
      {
        key: "Price High",
        text: "Price High",
        value: "Price High",
      },
      {
        key: "Mileage Low",
        text: "Mileage Low",
        value: "Mileage Low",
      },
      {
        key: "Mileage High",
        text: "Mileage High",
        value: "Mileage High",
      },
      {
        key: "Year Ascending",
        text: "Year Ascending",
        value: "Year Ascending",
      },
      {
        key: "Year Descending",
        text: "Year Descending",
        value: "Year Descending",
      },
    ];

    const cars = this.state.cars;
    return (
      <>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell
                style={{
                  width: "25%",
                  borderBottom: "1px solid",
                }}
              >
                <Button
                  style={{
                    width: "100%",
                    fontSize: "1.1em",
                    fontFamily: "verdana",
                    backgroundColor: "#575757",
                    color: "white",
                  }}
                >
                  Clear Filters
                </Button>
              </Table.Cell>
              <Table.Cell
                style={{
                  borderBottom: "1px solid",
                  width: "25%",
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

                  width: "25%",
                }}
              >
                Listings Per Page
              </Table.Cell>
              <Table.Cell
                style={{
                  borderBottom: "1px solid",
                  width: "25%",
                  textAlign: "right",
                }}
              >
                <Button color="green" inverted>
                  Create New Car
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Filter cars={cars} filterOptions={this.filterOptions} />
          <Table style={{ width: "75%", margin: "0px" }}>
            <Table.Body>
              {cars.map((c) => (
                <Table.Row key={c.id} style={{ height: "200px" }}>
                  <Table.Cell>
                    <CarCard cars={c} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </>
    );
  }
}

export default Inventory;
