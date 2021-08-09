import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
import UploadImage from "../utils/UploadImage";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategory, addCategory, updateCategory } from "../../actions/index";
import { Category } from "@material-ui/icons";

class PaymentAdd extends React.Component {
  state = {
    
  };
 
  componentWillReceiveProps(nextProps) {
    
  };
  componentDidMount() {
    
    this.loadScript(
      process.env.PUBLIC_URL + "/assets/pages/filer/jquery.fileuploads.init.js"
    );
    this.props.getCategory();
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
                   Payment Type
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="type"
                      id="type"
                      placeholder="Payment Type"
                      onChange={this.handleChange}
                      value={this.state.type}
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
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Display Image</label>
                <UploadImage id={"customFile"} uploadGalleryImage={this.uploadImage}></UploadImage>
                <label class="custom-file-label" for="customFile">
                    {this.state.label}
                    
                  </label>
              </div>
            </div>
            <div className="col-md-8 ">
                <div id="id_image_section_label" className="pt-2">
                  { this.state.imageurl ?
                    this.state.imageurl !== undefined 
                     ? (
                      <img
                        src={`http://204.48.26.50:8060/${this.state.imageurl}`}
                        alt=  ""
                        className="img-100"
                        onError={(e) => {
                          e.target.src = "";
                        }}
                      />
                    ) : (
                      ""
                    
                  ) : (
                    ""
                  )}
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
                <Link to={"/payment"} className="btn btn-outline-dark">
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

PaymentAdd.propsTypes = {
  getCategory: PropTypes.func.isRequired,
  updateCategory:PropTypes.func.isRequired,
  home: PropTypes.object.isRequired,
};

var mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, { getCategory, addCategory,updateCategory })(
  PaymentAdd
);
  