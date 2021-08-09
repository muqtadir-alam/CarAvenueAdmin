import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategory, addCategory, updateCategory } from "../../actions/index";

class OrderStatusAdd extends React.Component {
  state = {
    name:'',
    code:'',
    value:'',
    status:''
  };
 
  componentWillReceiveProps(nextProps) {
    
  };

  componentDidMount() {
  
  }
  
  render() {
    return (
      <div className="">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Title
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Status Name"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Priority
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      name="priority"
                      id="priority"
                      placeholder="Priority"
                      onChange={this.handleChange}
                      value={this.state.priority}
                    />
                  </div>
                </div>
              </div>
             <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Status</label>
                <div className="col-sm-9">
                  <select name="status" className="form-control" value={this.state.status} onChange={this.handleChange}>
                    <option value="true" name="active">Active</option>
                    <option value="false" name="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
           </div>
            <div className="card-footer">
              <div className="row float-right p-3">
                {this.state.isSaving ? (
                  <button className="btn btn-grd-disabled mr-2" disabled>
                    Saving...!
                  </button>
                ) : (
                  
                  <button
                    onClick={this.onSaveData}
                    className="btn btn-grd-disabled mr-2"
                  >
                    <i className="icofont icofont-save"></i> Save
                  </button>
                )}
                <Link to={"/order-status"} className="btn btn-outline-dark">
                  Cancel
                </Link>
              </div>
            </div>
            </div>
        )}
      </div>
    );
  }
}

OrderStatusAdd.propsTypes = {
 
};

var mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, {  })(
  OrderStatusAdd
);
  