import React from 'react';
import { Table } from 'semantic-ui-react'

class Logo extends React.Component {
  render() {
    return (
      <>
      <Table style={{margin: '0em', border: '0px'}}>
        <Table.Row >
          <Table.Cell style={{width: "15%"}}>
            <div style={{ paddingTop: "50px"}}>577 N State St</div>
            <div>Orem, UT 84057</div>
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
      </Table>
      </>
    );
  }
}

export default Logo;


