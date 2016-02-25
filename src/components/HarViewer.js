// require('fixed-data-table/dist/fixed-data-table.css');
import React from 'react';
import _ from 'lodash';
import {Grid, Row, Col, PageHeader, Button, ButtonGroup, Input} from
  'react-bootstrap';
import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';

export default class HarViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      columnWidths: {
        url: 500,
        size: 100,
        time: 200
      },
      tableWidth: 1000,
      tableHeight: 500
    };
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <PageHeader> Har Viewer </PageHeader>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Table
              rowsCount={this.props.entries.length}
              width={this.state.tableWidth}
              headerHeight={30}
              height={this.state.tableHeight}
              rowHeight={30}
              rowGetter={this._getEntry.bind(this)}>
              <Column
                cell='url'
                width={this.state.columnWidths.url}
                isResizable={true}
                label='URL'
                flexGrow={null}/>
              <Column
                cell='size'
                width={this.state.columnWidths.size}
                isResizable={true}
                label='Size'/>
              <Column
                cell='time'
                width={this.state.columnWidths.time}
                minWidth={200}
                isResizable={true}
                label='Timeline'/>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
  _getEntry(index) {
    return this.props.entries[index];
  }
}

HarViewer.defaultProps = {
  entries: []
};
