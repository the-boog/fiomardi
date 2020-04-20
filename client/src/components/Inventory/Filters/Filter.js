import React from "react";
import { Icon, Table } from "semantic-ui-react";
import MakeFilter from "./MakeFilter";
import BodyStyleFilter from "./BodyStyleFilter";
import ColorFilter from "./ColorFilter";
import ModelFilter from "./ModelFilter";
import ModelYearFilter from "./ModelYearFilter";
import PriceFilter from "./PriceFilter";
import MileageFilter from "./MileageFilter";
import DrivetrainFilter from "./DrivetrainFilter";
import TransmissionFilter from "./TransmissionFilter";

class Filter extends React.Component {
  state = {
    activeBodyStyle: false,
    activeColor: false,
    activeMake: false,
    activeMiles: false,
    activeModel: false,
    activeModelYear: false,
    activePrice: false,
    activeDriveTrain: false,
    activeTransmission: false,
  };

  handleClick = (input) => {
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
      case "activeMiles":
        this.setState({ activeMiles: !this.state.activeMiles });
        break;
      case "activeTransmission":
        this.setState({ activeTransmission: !this.state.activeTransmission });
        break;
      case "activeDrivetrain":
        this.setState({ activeDrivetrain: !this.state.activeDrivetrain });
        break;
    }
  };

  render() {
    const { cars, filterOptions } = this.props;
    const {
      activeBodyStyle,
      activeColor,
      activeMake,
      activeMiles,
      activeModel,
      activeModelYear,
      activePrice,
      activeDrivetrain,
      activeTransmission,
    } = this.state;
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
              {activeMake === true ? (
                <MakeFilter cars={cars} filterOptions={filterOptions} />
              ) : null}
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
              {activeModel === true ? (
                <ModelFilter cars={cars} filterOptions={filterOptions} />
              ) : null}
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
              {activeBodyStyle === true ? (
                <BodyStyleFilter cars={cars} filterOptions={filterOptions} />
              ) : null}
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
              {activeColor === true ? (
                <ColorFilter cars={cars} filterOptions={filterOptions} />
              ) : null}
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
              {activeModelYear === true ? (
                <ModelYearFilter cars={cars} filterOptions={filterOptions} />
              ) : null}
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
              {activePrice === true ? (
                <PriceFilter cars={cars} filterOptions={filterOptions} />
              ) : null}
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
                onClick={() => this.handleClick("activeMiles")}
              >
                Milage
                <Icon name="dropdown" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              {activeMiles === true ? <MileageFilter cars={cars} /> : null}
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
                onClick={() => this.handleClick("activeDrivetrain")}
              >
                DriveTrain
                <Icon name="dropdown" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              {activeDrivetrain === true ? (
                <DrivetrainFilter cars={cars} filterOptions={filterOptions} />
              ) : null}
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
                onClick={() => this.handleClick("activeTransmission")}
              >
                Transmission
                <Icon name="dropdown" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              {activeTransmission === true ? (
                <TransmissionFilter cars={cars} filterOptions={filterOptions} />
              ) : null}
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
