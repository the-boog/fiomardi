import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";
import AddPhotosModal from "./AddPhotosModal";

class NewCarModal extends React.Component {
  state = {
    modalType: "",
    modalOpen: false,
    vin: "",
    carInfo: [],
    year: "",
    make: "",
    model: "",
    miles: "",
    engine: "",
    transmission: "",
    fuel: "",
    drivetrain: "",
    mpgcity: "",
    mpghighway: "",
    mpgcombined: "",
    exterior: "",
    interior: "",
    body: "",
    doors: "",
    vehicleclass: "",
    titlestatus: "",
    condition: "",
    factorycertified: "",
    oneownervehcile: "",
    price: "",
    accessories: "",
  };

  setModalType = (t) => {
    this.setState({ modalType: t });
    console.log(this.state.modalType);
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  decodeVin = () => {
    axios
      .get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${this.state.vin}?format=json`
      )
      .then((res) => {
        var arr = res.data.Results;
        var car = {};
        for (var i = 0; i < arr.length; i++) {
          car[arr[i].Variable] = arr[i].Value;
        }
        this.setState({
          carInfo: car,
          year: car["Model Year"],
          make: car["Make"],
          model: car["Model"],
          miles: "",
          engine: "",
          transmission: "",
          fuel: "",
          drivetrain: car["Drive Type"],
          mpgcity: "",
          mpghighway: "",
          mpgcombined: "",
          exterior: "",
          interior: "",
          body: "",
          doors: car["Doors"],
          vehicleclass: "",
          titlestatus: "",
          condition: "",
          factorycertified: "",
          oneownervehcile: "",
          price: "",
          accessories: "",
        });
        console.log(car);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
  };

  render() {
    const {
      modalType,
      modalOpen,
      carInfo,
      vin,
      year,
      make,
      model,
      miles,
      engine,
      transmission,
      fuel,
      drivetrain,
      mpgcity,
      mpghighway,
      mpgcombined,
      exterior,
      interior,
      body,
      doors,
      vehicleclass,
      titlestatus,
      condition,
      factorycertified,
      oneownervehicle,
      price,
      accessories,
    } = this.state;
    return (
      <>
        <Modal
          trigger={
            <Button color="green" onClick={() => this.setModalType("create")}>
              Create New Car
            </Button>
          }
          open={modalOpen}
          onOpen={() => this.openModal()}
          onClose={() => this.closeModal()}
        >
          <Modal.Header fontStyle="Andale Mono" align="center">
            <div
              style={{
                fontSize: "2em",
                marginBottom: "10px",
              }}
            >
              FioMarDi <br />
            </div>
            Car Dealership LLC
          </Modal.Header>
          <Modal.Content style={{ backgroundColor: "#f5f5f5" }}>
            <Form>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  textAlign: "center",
                }}
              >
                <div style={{ width: "110px" }} />
                <Form.Input
                  width="5"
                  label="Vin"
                  name="vin"
                  value={vin}
                  onChange={this.handleChange}
                />
                <div style={{ marginTop: "22px", marginLeft: "20px" }}>
                  {modalType == "create" ? (
                    <Button color="blue" onClick={() => this.decodeVin()}>
                      decode
                    </Button>
                  ) : (
                    <div style={{ width: "85px" }} />
                  )}
                </div>
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  textAlign: "center",
                }}
              >
                <Form.Input
                  width="5"
                  required
                  label="Year"
                  name="year"
                  value={year}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  required
                  label="Make"
                  name="make"
                  value={make}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  required
                  label="Model"
                  name="model"
                  value={model}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  textAlign: "center",
                }}
              >
                <Form.Input
                  width="5"
                  required
                  label="Miles"
                  name="miles"
                  value={miles}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  label="Engine"
                  name="engine"
                  value={engine}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  required
                  label="Transmission"
                  name="transmission"
                  value={transmission}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  textAlign: "center",
                }}
              >
                <Form.Input
                  width="5"
                  label="Fuel"
                  name="fuel"
                  value={fuel}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  label="Drive Train"
                  name="drivetrain"
                  value={drivetrain}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  label="MPG City"
                  name="mpgcity"
                  value={mpgcity}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  textAlign: "center",
                }}
              >
                <Form.Input
                  width="5"
                  label="MPG Highway"
                  name="mpghighway"
                  value={mpghighway}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  label="MPG combined"
                  name="mpgcombined"
                  value={mpgcombined}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  required
                  label="Exterior"
                  name="exterior"
                  value={exterior}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  textAlign: "center",
                }}
              >
                <Form.Input
                  width="5"
                  label="Interior"
                  name="interior"
                  value={interior}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  label="Body"
                  name="body"
                  value={body}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  required
                  label="Doors"
                  name="doors"
                  value={doors}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  textAlign: "center",
                }}
              >
                <Form.Input
                  width="5"
                  label="Vehicle Class"
                  name="vehicleclass"
                  value={vehicleclass}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  label="Title Status"
                  name="titlestatus"
                  value={titlestatus}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  label="Condition"
                  name="condition"
                  value={condition}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  textAlign: "center",
                }}
              >
                <Form.Input
                  width="5"
                  label="Factory Certified"
                  name="factorycertified"
                  value={factorycertified}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  label="One Owner Vehicle"
                  name="oneownervehicle"
                  value={oneownervehicle}
                  onChange={this.handleChange}
                />
                <Form.Input
                  width="5"
                  required
                  label="Price"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  textAlign: "center",
                }}
              >
                <Form.Input
                  width="5"
                  label="Acessories/Features"
                  name="accessories"
                  value={accessories}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  paddingRight: "50px",
                  paddingLeft: "50px",
                  marginBottom: "50px",
                  textAlign: "center",
                }}
              >
                <Button floated="left" onClick={() => this.closeModal()}>
                  Cancel
                </Button>
                <AddPhotosModal modalType={modalType} />
              </div>
            </Form>
          </Modal.Content>
        </Modal>
      </>
    );
  }
}

export default NewCarModal;
