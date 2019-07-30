import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
//import { paginationConfig } from 'constants/paginationConfig';

class ViewTemplateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRows: [],
      tableHeaders: null,
      selectedRow: [],
      showDropdown: '',
    };
  }

  updateSelectedRowsInContainer() {
    if (this.props.handleAction) {
      setTimeout(() => this.props.handleAction('updateSelectedRows', this.state.selectedRow), 50);
    }
  }

  hideActionPopupsOnDocumentClick = event => {
    let triggerEl = false;
    if (event['path'] && event['path'].length) {
      event['path'].some(el => {
        if (
          (el.className && el.className.length && el.className.indexOf('dd-popup-trigger') >= 0) ||
          (el.nodeName && el.nodeName === 'INPUT')
        ) {
          triggerEl = true;
          return true;
        }
        return false;
      });
    }
    if (triggerEl) {
      return false;
    }
    this.setState({ showDropdown: '' });
  };

  componentDidMount() {
    this.setState({
      tableHeaders: this.props.tableHeaders,
      tableRows: this.props.tableRows,
    });
    document.getElementById('root').addEventListener('click', this.hideActionPopupsOnDocumentClick);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tableHeaders: nextProps.tableHeaders,
      tableRows: nextProps.tableRows,
    });

    if (this.state.tableRows.length !== nextProps.tableRows.length) {
      this.setState({
        selectedRow: [],
        showDropdown: '',
      });
    }
  }

  componentWillUnmount() {
    document
      .getElementById('root')
      .removeEventListener('click', this.hideActionPopupsOnDocumentClick);
  }

  handleTableClicks = (event, action, row) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    if (this.props.handleAction) {
      this.props.handleAction(action, row);
    }
  };

  tableHeaderView(data) {
    let view = null;
    const { tableRows, selectedRow } = this.state;
    if (data && data.length) {
      view = data.map((col, index) => {
        const width = col.width ? { width: col.width } : {};
        const dataAlign = col.dataAlign ? { textAlign: col.dataAlign } : {};

        console.log(col.dataField);
        return (
          <div
            className={col.width ? '' : 'col'}
            key={col + index}
            style={{ ...width, ...dataAlign }}
          >
            {col.firstCol &&
              !col.hideCheckbox && (
                <div className="check-box">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      className=""
                      value=""
                      onChange={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        const checked = e.target.checked;
                        setTimeout(() => {
                          this.setState({
                            selectedRow: checked
                              ? this.state.tableRows.map(obj => ({
                                ...obj,
                                id: obj.uid || obj.id,
                              }))
                              : [],
                          });
                        }, 10);
                        this.updateSelectedRowsInContainer();
                      }}
                      checked={
                        tableRows && tableRows.length && tableRows.length === selectedRow.length
                          ? true
                          : false
                      }
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              )}
            {col.icon && <i className={col.icon} aria-hidden="true" />}
            <span className={col.firstCol ? 'ml-4 padd-left font-weight-bold' : 'font-weight-bold'}>
              {col.name}
            </span>
          </div>
        );
      });
    }
    console.log(view);
    return view;
  }

  tableBodyView(headers, rows, selectedRow) {
    let view = null;
    const hLength = headers && headers.length,
      rLength = rows && rows.length;
    if (hLength && rLength) {
      view = rows.map(row => {
        const rowEls = [];
        const isRowSelected =
          selectedRow.length && selectedRow.some(obj => obj.id === (row.id || row.uid));
        for (let i = 0; i < hLength; i++) {
          const col = headers[i];
          const width = col.width ? { width: col.width } : null;
          const dataAlign = col.dataAlign ? { textAlign: col.dataAlign } : {};
          rowEls.push(
            <div
              className={col.width ? '' : 'col'}
              key={`${row.id || row.uid}-${col.dataField}`}
              style={{ ...width, ...dataAlign }}
            >
              {col.firstCol &&
                !col.hideCheckbox && (
                  <div className="check-box">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        className=""
                        value=""
                        onChange={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          const checked = e.target.checked;
                          setTimeout(() => {
                            this.setState({
                              selectedRow: checked
                                ? [...this.state.selectedRow, { ...row, id: row.uid || row.id }]
                                : this.removeRow(this.state.selectedRow, row),
                            });
                          }, 10);
                          this.updateSelectedRowsInContainer();
                        }}
                        checked={isRowSelected ? true : false}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                )}
              {col.actions &&
                Array.isArray(col.actions) &&
                col.actions.length &&
                this.createActionsView(col, row)}
              {!col.actions &&
                (col.firstCol ? (
                  <span className="ml-4 table-word-break">{row[col.dataField] || ''}</span>
                ) : (
                    <span>{row[col.dataField] || ''}</span>
                  ))}
            </div>,
          );
        }
        const selectedRowClass = isRowSelected
          ? 'row grid-odd no-gutters vtt-selected-row'
          : 'row grid-odd no-gutters';
        return (
          <div className={selectedRowClass} key={row.id || row.uid}>
            {rowEls.length ? rowEls : null}
          </div>
        );
      });
    } else {
      view = (
        <div
          className="row grid-odd no-gutters heading-level no-border"
          style={{ display: 'block', fontWeight: 'bold', textAlign: 'center' }}
        >
          No records found.
        </div>
      );
    }
    return view;
  }

  createActionsView(col, row) {
    if (col.conditionalActions) {
      col.actions = col.conditionalActions(row);
    }
    return col.actions.map((obj, _index) => {
      const showDropdown =
        this.state.showDropdown && this.state.showDropdown === (row.id || row.uid) ? true : false;
      if (obj.mode === 'simple') {
        return (
          <span
            title={obj.title}
            className={
              obj.customClass
                ? obj.customClass(row) + ' hand ml-4 text-break'
                : 'hand ml-4 text-break'
            }
            key={(row.id || row.uid) + '-' + obj.actionType}
            onClick={e =>
              this.state.selectedRow.length === 0
                ? obj.customClass && obj.customClass(row) === 'disabled'
                  ? ''
                  : this.handleTableClicks(e, obj.actionType, row)
                : false
            }
          >
            {obj.icon ? <i className={obj.icon} aria-hidden="true" /> : row[col.dataField] || ''}
          </span>
        );
      }
      if (obj.mode === 'popup') {
        return (
          <div
            className="btn-group ml-4"
            key={(row.id || row.uid) + '-' + _index + '-' + col.dataField + row[col.dataField]}
          >
            <a
              title={obj.title}
              className="dd-popup-trigger"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                if (this.state.selectedRow.length === 0) {
                  this.setState({ showDropdown: row.id || row.uid });
                }
              }}
            >
              {obj.icon ? <i className={obj.icon} aria-hidden="true" /> : row[col.dataField] || ''}
            </a>
            <div className={showDropdown ? 'dropdown-menu tt-dropdown-menu' : 'dropdown-menu'}>
              {obj.childs &&
                obj.childs.map(act => {
                  if (row.hideActions && row.hideActions[act.type]) {
                    return null;
                  }
                  return (
                    <a
                      className="dropdown-item"
                      key={(row.id || row.uid) + '-' + act.type}
                      onClick={e =>
                        this.state.selectedRow.length === 0
                          ? this.handleTableClicks(e, act.type, row)
                          : false
                      }
                    >
                      {act.icon && <i className={act.icon} aria-hidden="true" />}
                      {act.name}
                    </a>
                  );
                })}
            </div>
          </div>
        );
      }
      return null;
    });
  }

  removeRow(selectedRow, row) {
    let index = null;
    selectedRow.some((obj, i) => {
      if (obj.id === (row.id || row.uid)) {
        index = i;
        return true;
      }
      return false;
    });
    if (index > -1) {
      selectedRow.splice(index, 1);
    }
    return selectedRow;
  }

  render() {
    const { tableHeaders, tableRows, selectedRow } = this.state;
    console.log("table Headers"+JSON.stringify(tableHeaders));
    console.log("table Rows"+JSON.stringify(tableRows));

    // check if table rows objects has id key or not
    const idExistsinEachRow =
      tableRows &&
      Array.isArray(tableRows) &&
      tableRows.length > 0 &&
      tableRows.every(obj => obj.hasOwnProperty('id') || obj.hasOwnProperty('uid'));
    if (Array.isArray(tableRows) && tableRows.length && !idExistsinEachRow) {
      return <h2>Each row object must have an id OR uid property.</h2>;
    }
    return (
      <div>
        <div className="row grid-header no-gutters">{this.tableHeaderView(tableHeaders)}</div>
        <div className="mrgin-0">
          <div className="">{this.tableBodyView(tableHeaders, tableRows, selectedRow)}</div>
        </div>
        {this.props.totalItemsCount > 0 ? (
          <div className="custom-pagination pt-3">
            <Pagination
              activePage={this.props.activePage}
              innerClass="custom-pagination-ul"
              itemClass="custom-pagination-ul-li"
              linkClass="custom-pagination-ul-li-a"
              itemClassLast="custom-pagination-ul-li-last"
              itemClassFirst="custom-pagination-ul-li-first"
              activeClass="custom-pagination-ul-li-active"
              activeLinkClass="custom-pagination-ul-li-a-active"
              disabledClass="custom-pagination-disabled"
              itemsCountPerPage={this.props.itemsPerPage}
              totalItemsCount={this.props.totalItemsCount}
              pageRangeDisplayed={5}
              onChange={pageNumber => this.props.setPageNumber(pageNumber)}
            />
          </div>
        ) : (
            ''
          )}
      </div>
    );
  }
}

export default ViewTemplateTable;
