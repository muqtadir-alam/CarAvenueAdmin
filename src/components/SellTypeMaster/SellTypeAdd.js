import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategory, addCategory, updateCategory } from "../../actions/index";

class SellTypeAdd extends React.Component {
  state = {
    
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
                  Sell Type
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="sellType"
                      id="sellType"
                      placeholder="  Sell Type"
                      onChange={this.handleChange}
                      value={this.state.sellType}
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
                <Link to={"/role"} className="btn btn-outline-dark">
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

SellTypeAdd.propsTypes = {
  getCategory: PropTypes.func.isRequired,
  updateCategory:PropTypes.func.isRequired,
  home: PropTypes.object.isRequired,
};

var mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, { getCategory, addCategory,updateCategory })(
  SellTypeAdd
);
  