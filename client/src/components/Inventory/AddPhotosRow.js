import React from "react";
import { Image, Dropdown, Form, Button } from "semantic-ui-react";

class AddPhotosRow extends React.Component {
  state = {
    picture: "",
    pictureUrl: "https://react.semantic-ui.com/images/wireframe/image.png",
  };

  handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
  };

  render() {
    const { picture, pictureUrl } = this.state;
    const optionNumbers = [...Array(21).keys()];
    const options = [];
    {
      for (var i = 0; i < optionNumbers.length; i++) {
        options.push({ key: i, text: i, value: i });
      }
    }
    return (
      <>
        <Form>
          <span
            style={{
              display: "flex",
              justifyContent: "left",
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            <Image
              src={pictureUrl}
              size="tiny"
              style={{ marginTop: "5px", paddingRight: "5px" }}
            />
            <Form.Input
              width="5"
              type="file"
              label="File Name"
              name="picture"
              value={picture}
              onChange={this.handleChange}
              style={{ height: "38px", paddingRight: "5px" }}
            />
            <div style={{ fontWeight: 600, fontSize: "0.9em" }}>
              Sort Priority
              <div
                style={{
                  backgroundColor: "white",
                  height: "36px",
                  borderRadius: 5,
                  marginTop: "6px",
                  width: "100px",
                  paddingRight: "5px",
                }}
              >
                <Dropdown
                  scrolling
                  fluid
                  color="black"
                  button
                  basic
                  floating
                  options={options}
                  defaultValue={options[0].value}
                />
              </div>
            </div>
            <Button
              color="blue"
              style={{
                height: "35px",
                marginTop: "23px",
                marginRight: "5px",
              }}
            >
              Upload To Cloudinary
            </Button>
            <div
              style={{
                fontWeight: 600,
                fontSize: "0.7em",
                marginTop: "25px",
                overflowWrap: "break-word",
                wordWrap: "break-word",
                hyphens: "auto",
                width: "200px",
              }}
            >
              (ImageURL)
            </div>
          </span>
        </Form>
      </>
    );
  }
}

export default AddPhotosRow;
