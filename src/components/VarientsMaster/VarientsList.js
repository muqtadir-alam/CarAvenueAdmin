import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Swal from 'sweetalert2'
import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Toggle from 'react-toggle'



class VarientsList extends React.Component {
  state = {
    user_list: []
  }
  handleStatusChange = (sid) => {
    var isChecked = $('#cattogBtn_' + sid);
    isChecked.prop("checked", !isChecked.prop("checked"));
    console.log(isChecked.prop('checked'), !isChecked.prop("checked"));
    if (!isChecked.prop("checked") === true) {
      var status = 'active'
    } else {
      var status = 'inactive'
    }
    let newArray = this.state.user_list;
    var a = newArray.find((element) => {
      return element.id === sid
    })
    a.status = status;
    console.log(newArray)
    this.setState({ user_list: newArray })
    Swal.fire("Update Status!", "Status has been updated.", "success");
  }
  
  componentWillMount() {
  }

  render() {
    const columns = [{
      name: "Medium",
      label: "Image",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (Medium, tableMeta) => {
          return <img src={Medium !== undefined && Medium !== null && Medium !== {} ? Medium.url !== undefined && Medium.url !== null && Medium.url !== "" ? Medium.url : "./assets/images/icon.png" : "./assets/images/icon.png"} className="img-fluid img-20" alt="" onError={this.imgLoadError} />
        }
      }
    }, {
      name: "name",
      label: "Title",
      options: {
        filter: false,
        sort: true
      }
    },{
      name: "code",
      label: "Code",
      options: {
        filter: false,
        sort: true
      }
    },{
      name: "value",
      label: "Values",
      options: {
        filter: false,
        sort: true
      }
    },{
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (status, tableMeta) => {
          var Id = tableMeta.rowData[6];
          // console.log(tableMeta.rowData[6]);
          return <Toggle
            id={"status_" + Id}
            checked={status}
            value={status}
            onChange={this.handleStatusChange.bind(this,Id,status)}
          />
        }
      }
    },{
        name: "id",
        label: "Action",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (id, tableMeta) => {
            return <div>
              <Link to={"/varients/edit/" + id}
                className="m-r-15 text-muted"
                data-toggle="tooltip"
                data-placement="top" title=""
                data-original-title="Edit">
                <i className="f-20 icofont icofont-ui-edit text-custom"></i>
              </Link>
              <span onClick={this.deleteUser.bind(this, id)}
                className="m-r-15 text-muted"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Delete">
                <i className="f-20 icofont icofont-delete-alt text-danger"></i>  </span>
            </div>
          }
        }
    }
    ];
    const options = {
      filterType: "dropdown",
      viewColumns: false,
      print: false,
      download: false,
      selectableRows: 'none',
      textLabels: {
        body: {
          noMatch: this.state.isSaving ?
            "Loading data..!" :
            "Sorry, No Users Found",
          toolTip: "Sort",
          columnHeaderTooltip: column => `Sort for ${column.label}`
        }
      }
    };
    return (
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Varients List</h5>
                    <Link to="/varients/add"
                      className="btn btn-sm btn-inverse waves-effect waves-light f-right d-inline-block md-trigger" data-modal="modal-13"> <i className="icofont icofont-plus m-r-5"></i> Add Varients
                       </Link>
                  </div>
                  <div className="card-block">
                    <div className="dt-responsive table-responsive">
                      <MUIDataTable
                        title={"Varients List"}
                        className="table-responsive"
                        data={this.state.user_list}
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

VarientsList.propsTypes = {
 
};

var mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, {  })(VarientsList);
