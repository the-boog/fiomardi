import React from 'react';
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Logo extends React.Component {
  render() {
    return (
      <>
      <Table style={{margin: '0em', border: '0px'}}>
        <Table.Body>
        <Table.Row >
          <Table.Cell style={{width: "15%"}}>
            <a href="https://www.google.com/maps/dir/41.2099854,-111.9641728/577+N+State+St,+Orem,+UT+84057/@40.7659439,-112.4326662,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x874d8532f4826477:0x3086d1ebf3a2a4e9!2m2!1d-111.7002149!2d40.3077827" style={{color: 'black'}}>
              <div style={{ paddingTop: "50px"}}>577 N State St</div>
              <div>Orem, UT 84057</div>
            </a>
          </Table.Cell>
          <Table.Cell style={{width: "70%"}}>
            <div style={{height: "90px"}}>
              <div style={{
                marginTop: "5px",
                fontSize: "3em",
                textAlign: "center",
                fontStyle: "Andale Mono"
              }}>
                FioMarDi
              </div>
              <div style={{
                marginTop: "30px",
                fontSize: "1.5em",
                textAlign: "center"
                }}>
                  Car Dealership LLC
              </div>
            </div>
          </Table.Cell>
          <Table.Cell style={{width: "15%"}}>
            <div style={{textAlign: "right", paddingTop: "50px"}}>
              (801) 427-3969
            </div>
            <div style={{textAlign: "right"}}>
              (801) 427-9177
            </div>
          </Table.Cell>
        </Table.Row>
        </Table.Body>
      </Table>
      </>
    );
  }
}

export default Logo;


