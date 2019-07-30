import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

// It's a data format example.
function actFormatter(cell, row) {
  return '<i className="glyphicon glyphicon-usd"></i> ' + cell;
}

const selectRowProp = {
  mode: "checkbox"
};

class TableView extends Component {
  /** manipulate the title to make the title clickable */
  titleFormatter = (cell, row) => {
    return <span onClick={() => this.props.getDetails(row)}>{cell}</span>;
  }
  render() {
    console.log("this =="+JSON.stringify(this.props.data));
    return (
      <div>
        <BootstrapTable
          data={this.props.data || []}
          selectRow={selectRowProp}
          hover={true}
          version="4"
          className="table table-design"
        >
        <TableHeaderColumn
            dataField="id"
            isKey={true}
            dataAlign="left"
            dataSort={false}
            //width="60%"
            columnClassName="table-title"
            dataFormat={this.titleFormatter}
          >
            Id
          </TableHeaderColumn>

          {this.props.columnHeader.map((value)=>{
           return ( <TableHeaderColumn
            dataField={value}
          //  dataAlign="left"
            dataSort={false}
            //width="60%"
            columnClassName="table-title"
            dataFormat={this.titleFormatter}
          >
            {value}
        </TableHeaderColumn>  
           )
          })}
        </BootstrapTable>
      </div>
    );
  }
}

export default TableView;
