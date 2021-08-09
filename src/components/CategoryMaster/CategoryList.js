/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MUIDataTable from "mui-datatables";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Toggle from "react-toggle";
import { getCategory } from "../../actions/homeAction";

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideOld: false,
      checkedItems: new Map(),
      check: false,
      downdata: [],
      categoryList: [],
      checked: false,
      data: [],
      open: false,
      dataLength: 25,
      datarange: 0,
      hidedownload: false,
    };
  }

  componentWillMount() {
    this.props.getCategory();
  }

  // handleChange = (e, id) => {
  //   const item = e.target.name;
  //   const isChecked = e.target.checked;
  //   this.setState((prevState) => ({
  //     hidedownload: !this.state.hidedownload,
  //     checkedItems: prevState.checkedItems.set(item, isChecked),
  //   }));
  //   console.log(this.state.checkedItems);
  //   let newArray = this.props.categoryData.data.filter((d) => {
  //     // console.log(d)
  //     let searchValue = d.id;
  //     return searchValue.indexOf(item) !== -1;
  //   });
  //   console.log(newArray);
  //   this.setState({
  //     downdata: [...this.state.downdata, newArray],
  //   });
  //   console.log(this.state.downdata);
  // };
  handleStatus = (status, sid) => {
    const data = {
      CategoryId: sid,
      status: !status,
    };
    console.log(data);
    this.props.updateStatusCategory(data);
  };
  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps.category.data, "next");
    console.log(this.props);
    this.setState({
      categoryList: nextProps.category.data,
    });
  };
  render() {
    const columns = [
      {
        name: "id",
        label: "Category Image",
        options: {
          filter: false,
          sort: false,
          customBodyRender: (Medium, tableMeta) => {
            return (
              <div>
                {
                  <img
                    src={
                      Medium !== undefined && Medium !== null && Medium !== ""
                        ? Medium.url
                        : "./assets/images/icon.png"
                    }
                    alt=""
                    className="img-40"
                    onError={this.imgLoadError}
                  />
                }
              </div>
            );
          },
        },
      },
      {
        name: "name",
        label: "Category Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "id",
        label: "Status",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (id, tableMeta) => {
            var Id = tableMeta.rowData[6];
            // console.log(tableMeta.rowData[6]);
            return (
              <Toggle
                id={"status_" + Id}
                checked={true}
                value={true}
                // onChange={this.handleStatusChange.bind(this, Id)}
              />
            );
          },
        },
      },
      {
        name: "id",
        label: "Action",
        options: {
          filter: false,
          sort: false,
          customBodyRender: (id, tableMeta) => {
            return (
              <div>
                <Link
                  to={"/category/add/" + id}
                  className="m-r-15 text-muted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Edit"
                >
                  <i className="f-20 icofont icofont-ui-edit text-custom"></i>
                </Link>
              </div>
            );
          },
        },
      },
    ];
    const options = {
      filter: false,
      viewColumns: false,
      responsive: "scrollMaxHeight",
      search: false,
      print: false,
      pagination: true,
      selectableRows: "none",
      download: false,
    };
    return (
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Category List</h5>
                    <Link
                      to="/category/add"
                      className="btn btn-sm btn-inverse waves-effect waves-light f-right d-inline-block md-trigger"
                      data-modal="modal-13"
                    >
                      {" "}
                      <i className="icofont icofont-plus m-r-5"></i> Add
                      Category
                    </Link>
                  </div>
                  <div className="card-block">
                    <div className="dt-responsive table-responsive">
                      <MUIDataTable
                        title={"Category List"}
                        className="table-responsive"
                        data={this.state.categoryList}
                        columns={columns}
                        options={options}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    category: state.home.categoryList,
  };
};
CategoryList.propTypes = {
  getCategory: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { getCategory })(CategoryList);
