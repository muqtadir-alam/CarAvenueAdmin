import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";
import Constant from "../../Constant";
// import ReactQuill from "react-quill";
import Loader from "../../Loader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCategory } from "../../actions/homeAction";

class CategoryAdd extends React.Component {
  state = {
    status: "",
    description: "",
    category_id: "",
    name: "",
    priority: "",
    mediumId: "",
    isLoading: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSaveData = () => {
    const data = {
      name: this.state.name,
    };
    this.props.addCategory(data);
  };

  render() {
    return (
      <div className="">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Category Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Category Name"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Category Priority
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="priority"
                    placeholder="Category Priority"
                    onChange={this.handleChange}
                    value={this.state.priority}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Category Varients
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="varients"
                    placeholder="Category Varients"
                    onChange={this.handleChange}
                    value={this.state.varients}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-3">Display Image</div>
                <div className="col-sm-9">
                  <form
                    id="categoryImage"
                    name="categoryImage"
                    encType="multipart/form-data"
                    className="text-capitalize"
                  >
                    <div className="form-group">
                      <input
                        accept="image/*"
                        onChange={this.handleImageUpload}
                        id="category_image"
                        type="file"
                        className="form-control"
                        autoComplete="off"
                        name="files"
                      />
                      <span className="mt-1">( 500 x 500 )</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Status</label>
                <div className="col-sm-9">
                  <select
                    name="status"
                    className="form-control"
                    value={this.state.status}
                    onChange={this.handleChange}
                  >
                    <option>Select</option>
                    <option value={true}>Active</option>
                    <option value={false}>InActive</option>
                  </select>
                </div>
              </div>
            </div>
            <div sclassName="col-md-6">
              <div id="category_image_label" className="pt-2">
                {this.state.image ? (
                  this.state.image !== null ||
                  this.state.image !== undefined ||
                  this.state.image !== {} ? (
                    <img
                      src={this.state.image}
                      alt=""
                      className="img-100"
                      onError={(e) => {
                        e.target.src = "";
                      }}
                    />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* <div className="row">
              <div className="col-md-12">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Description</label>
                  <div className="col-sm-10">
                    <ReactQuill
                      value={this.state.description}
                      onChange={this.onHandleDescriptionChange}
                      style={{ height: "200px", marginBottom: "5%" }}
                    />
                  </div>
                </div>
              </div>
            </div> */}

          <div className="card-footer">
            <div className="row float-right p-1">
              {this.props.category_id ? (
                this.state.isLoading ? (
                  <button className="btn btn-grd-disabled mr-2" disabled>
                    Saving...!
                  </button>
                ) : (
                  <button
                    onClick={this.updateCategoryData}
                    className="btn btn-grd-disabled mr-2 "
                  >
                    Update
                  </button>
                )
              ) : this.props.isLoading ? (
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
              <Link to={"/category"} className="btn btn-outline-dark">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CategoryAdd.propsTypes = {
  addCategory: PropTypes.func.isRequired,
};

var mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, { addCategory })(CategoryAdd);
