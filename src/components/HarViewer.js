// require('fixed-data-table/dist/fixed-data-table.css');
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {Grid, Row, Col, PageHeader, Button, ButtonGroup, Input} from
  'react-bootstrap';
import mimeTypes from '../core/mimeTypes.js';
import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';

const GutterWidth = 30;

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
      tableHeight: 500,
      isColumnResizing: false
    };
  }
  render() {
    var buttons = _.map(_.keys(mimeTypes.types), x => {
      return this._createButton(x, mimeTypes.types[x].label);
    });
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <PageHeader> Har Viewer </PageHeader>
          </Col>

          <Col sm={3} smOffset={9}>
            <div>
              <label className='control-label'></label>
              <select
                className='form-control'
                onChange={this._sampleChanged.bind(this)}>
                <option value=''>---</option>
              </select>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <p>Pie Chart</p>
          </Col>
        </Row>

        <Row>
          <Col sm={8}>
            <ButtonGroup bsSize='small'>
              {this._createButton('all', 'All')}
              {buttons}
            </ButtonGroup>
          </Col>

          <Col sm={4}>
            <Input type='Search'
                   placeholder='Search Url'
                   bsSize='small'
                   onChange={this._filterTextChanged.bind(this)}
                   ref='filterText'/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Table
              ref='entriesTable'
              rowsCount={this.props.entries.length}
              width={this.state.tableWidth}
              headerHeight={30}
              height={this.state.tableHeight}
              rowHeight={30}
              rowGetter={this._getEntry.bind(this)}
              isColumnResizing={this.state.isColumnResizing}
              onColumnResizeEndCallback={this._onColumnResized.bind(this)}>
              <Column
                cell='url'
                dataKey='url'
                width={this.state.columnWidths.url}
                isResizable={true}
                label='URL'
                flexGrow={null}/>
              <Column
                cell='size'
                dataKey='size'
                width={this.state.columnWidths.size}
                isResizable={true}
                label='Size'/>
              <Column
                cell='time'
                dataKey='time'
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
  _onColumnResized(newColumnWidth, dataKey) {
    var columnWidths = this.state.columnWidths;
    columnWidths[dataKey] = newColumnWidth;
    this.setState({
      columnWidths: columnWidths,
      isColumnResizing: false
    })
  }
  _sampleChanged() {

  }
  componentDidMount() {
    window.addEventListener('resize', _.debounce(this._onResize.bind(this), 50, {
      leading: true, trailing: true
    }));
    this._onResize();
  }
  _onResize() {
    var parent = ReactDOM.findDOMNode(this.refs.entriesTable).parentNode;
    this.setState({
      tableWidth: parent.clientWidth - GutterWidth,
      tableHeight: document.body.clientHeight -
        parent.offsetTop - GutterWidth * 0.5
    })
  }
  _createButton(type, label) {
    var handler = this._filterRequested.bind(this, type);
    return (
      <Button key={type}
              bsStyle='primary'
              active={this.state.type === type}
              onClick={handler}>
        {label}
      </Button>
    );
  }
  _filterRequested(type, e) {

  }
  _filterTextChanged() {

  }
}

HarViewer.defaultProps = {
  entries: []
};
