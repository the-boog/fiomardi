import React from "react";
import { Button, Modal, Form, Dropdown, Icon } from "semantic-ui-react";
import axios from "axios";
import AddPhotosRow from "./AddPhotosRow";

class AddPhotosModal extends React.Component {
  state = {
    rows: [
      <AddPhotosRow />,
      <AddPhotosRow />,
      <AddPhotosRow />,
      <AddPhotosRow />,
      <AddPhotosRow />,
      <AddPhotosRow />,
      <AddPhotosRow />,
    ],
  };

  addRow = () => {
    this.setState({
      rows: [...this.state.rows, <AddPhotosRow />],
    });
  };
  removeRow = () => {
    var rows = this.state.rows;
    if (rows.length > 1) this.setState({ rows: rows.slice(1) });
  };

  render() {
    const modalType = this.props.modalType;
    return (
      <>
        <Modal
          style={{
            height: "850px",
            backgroundColor: "#f5f5f5",
          }}
          trigger={
            <Button
              onClick={() => console.log("click")}
              color="green"
              floated="right"
            >
              {modalType == "create" ? "Create" : "Update"}
            </Button>
          }
        >
          <Modal.Header
            fontStyle="Andale Mono"
            align="center"
            style={{ backgroundColor: "white" }}
          >
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
          <Modal.Content scrolling style={{ backgroundColor: "#f5f5f5" }}>
            {this.state.rows}
          </Modal.Content>
          <Modal.Content
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
            }}
          >
            <Button floated="left">Cancel</Button>
            <Button floated="right">Done</Button>
            <Button color="green" floated="right" onClick={() => this.addRow()}>
              <Icon name="add" />
            </Button>
            <Button
              color="red"
              floated="right"
              onClick={() => this.removeRow()}
            >
              <Icon name="trash" />
            </Button>
          </Modal.Content>
        </Modal>
      </>
    );
  }
}

export default AddPhotosModal;
