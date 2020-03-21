import React from 'react';
import { Table }  from 'semantic-ui-react';

class Inventory extends React.Component {
  render() {
    return (
      <>
      <Table>
        <Table.Header>
            <Table.Row>
              <Table.Cell style={{backgroundColor: '#b5b5b5'}}>Clear Filter</Table.Cell>
              <Table.Cell style={{borderBottom: '1px solid'}}>Sort By</Table.Cell>
              <Table.Cell style={{borderBottom: '1px solid'}}>Listings Per Page</Table.Cell>
              <Table.Cell style={{borderBottom: '1px solid'}}></Table.Cell>
            </Table.Row>
          </Table.Header>
      </Table>
      <div>
      <div>
        <Table style={{width: "50px"}}>stuff</Table>
      </div>
      <div>
        <Table style={{width: "50px"}}>stuff</Table>
      </div>
      </div>
      </>
    );
  }
}


export default Inventory;