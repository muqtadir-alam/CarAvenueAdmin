import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
import UploadImage from "../utils/UploadImage";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategory, addCategory, updateCategory } from "../../actions/index";
import { Category } from "@material-ui/icons";

class VarientsAdd extends React.Component {
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
                    Varients Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Varients Name"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Varients Code
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="code"
                      id="code"
                      placeholder="Varients Code"
                      onChange={this.handleChange}
                      value={this.state.code}
                    />
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Varients Value
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="value"
                      id="value"
                      placeholder="Varients Value"
                      onChange={this.handleChange}
                      value={this.state.value}
                    />
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
                <Link to={"/Varients"} className="btn btn-outline-dark">
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

VarientsAdd.propsTypes = {
 
};

var mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, {  })(
  VarientsAdd
);
  