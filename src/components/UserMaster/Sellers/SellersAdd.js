import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import $ from "jquery";



class SellerAdd extends React.Component {
  state = {
    status: "active",
    shop_name:'',
    seller_name:'',
    bussinessType:'',
    phoneNo:'',
    email:'',
    civilId:'',
    address:'',
    licence:'',
    bank:'',
    iban_number:''

  };

  componentDidUpdate(prevProps) {
    if (prevProps.seller_id !== this.props.seller_id) {
      this.setState({ seller_id: this.props.seller_id });
      this.getsellersDetails();
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getsellersDetails = () => {
    var a = this.state.Seller_list.find((element) => {
      return element.SellerID === this.props.seller_id;
    })
    this.setState({
      sellers_data: a,
      seller_name: a.SellerName,
      Email: a.email,
      PhoneNo: a.PhoneNo,
      WhatsAppNo: a.WhatsAppNo,
      image_url: a.SellersImage

    });
  }

  addsellers = () => {
    var that = this;
    var data = new FormData();
    that.setState({ isSaving: true })
    if (
      that.state.seller_name === undefined ||
      that.state.seller_name === null ||
      that.state.seller_name === ""
    ) {
      document.getElementById("seller_name").focus();
      that.setState({ isSaving: false })
      return false;
    }
    Swal.fire("Added !", "Sellers has been Added", "success");
    window.location.href = "#/seller"
    that.setState({ isSaving: false })

  };
  componentWillMount() {
    // this.loadScript(process.env.PUBLIC_URL + "/assets/pages/filer/jquery.fileuploads.init.js");
  }
  
  handleImageUpload = (event) => {
    document.getElementById('id_image_section_lable').innerHTML = "";
    let element = $("#user_Image").get(0);
    $("#id_image_section").empty();
    this.setState({ accepted: element });
    var proof_img = [];
    let obj = {};
    console.log(element.files);
    this.setState({ user_Image: element.files });
    for (var i = 0; i < element.files.length; i++) {
      var file1 = element.files[i];
      var img = document.createElement("img");
      img.className = "img-100";
      var filePath = URL.createObjectURL(file1);
      img.src = filePath;
      $("#id_image_section_lable").append(img);
    }
  }
  // uploadMedia = () => {
  //   var that = this;
  //   var form = $('#userImage')[0];
  //   var data = new FormData(form);
  //   data.append('upload_for', 'user');
  //   fetch(Constant.getAPI() + "/mediaUpload", {
  //     method: "post",
  //     body: data
  //   }).then(function (response) {
  //     return response.json();
  //   }).then(function (json) {
  //     if (json.error === "SFD") {
  //       that.editUser(json.data.media_id);
  //     } else {
  //       that.setState({ category_data: [] });
  //       console.log(json.error);
  //     }
  //   });
  // }
  onSaveData = () => {
    var that = this;
    that.setState({ isSaving: true });
    if (that.state.accepted) {
      that.uploadMedia();
    } else {
      that.editUser(that.state.media_id);
    }
  }
  render() {
    return (
      <div className="">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Seller Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="seller_name"
                    id="seller_name"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    value={this.state.seller_name}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Shop Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="shop_name"
                    id="shop_name"
                    placeholder="Shop Name"
                    onChange={this.handleChange}
                    value={this.state.shop_name}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                  <input
                    type="Email"
                    className="form-control"
                    name="Email"
                    id="Email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.Email}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Phone No</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="PhoneNo"
                    id="PhoneNo"
                    placeholder="Phone No"
                    onChange={this.handleChange}
                    value={this.state.PhoneNo}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
              <label className="col-sm-3 col-form-label">Business Type</label>
              <div className="col-sm-9">
              <select name="bussinessType" className="form-control " value={this.state.bussinessType} onChange={this.handleChange}>
                  <option value="active" name="active">Value 1</option>
                  <option value="inactive" name="inactive">Value 2</option>
                </select>
              </div>
              
              </div>
            </div>
          
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Civil Id</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="CivilId"
                    id="CivilId"
                    placeholder="Civil Id Number "
                    onChange={this.handleChange}
                    value={this.state.CivilId}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Licence No </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="licence"
                    id="licence"
                    placeholder="Licence No "
                    onChange={this.handleChange}
                    value={this.state.licence}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Address</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="Address"
                    onChange={this.handleChange}
                    value={this.state.address}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Bank</label>
              <div className="col-sm-9">
                <select name="bank" className="form-control" value={this.state.bank} onChange={this.handleChange}>
                  <option value="active" name="active">Bank 1</option>
                  <option value="inactive" name="inactive">bank 2</option>
                </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">IBAN Number</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="iban_number"
                    id="iban_number"
                    placeholder="IBAN Number"
                    onChange={this.handleChange}
                    value={this.state.iban_number}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-3">
                  User Image
                </div>
                <div className="col-sm-9">
                  <form id="userImage" name="userImage" encType="multipart/form-data" className="text-capitalize">

                    <div className="form-group">

                      <input accept="image/*" onChange={this.handleImageUpload} id="user_Image" type="file" className="form-control" autoComplete="off" name="media[]"
                        data-toggle="tooltip" title="Click To Upload Photo"
                      />
                      <div id="id_image_section_lable" className="pt-2">
                        {
                          this.state.image_url
                            ?
                            this.state.image_url !== null || this.state.image_url !== undefined || this.state.image_url !== {}
                              ?
                              <img src={this.state.image_url} alt=""
                                className="img-100" onError={e => {
                                  e.target.src = ""
                                }} />
                              :
                              ''
                            :
                            ''
                        }
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon4">Status</span>
                <select name="status" className="form-control" value={this.state.status} onChange={this.handleChange}>
                  <option value="active" name="active">Active</option>
                  <option value="inactive" name="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row float-right p-3">
            {
              this.state.isSaving
                ?
                <button className="btn btn-info mr-2" disabled>Saving...!</button>
                :
                <button onClick={this.addsellers} className="btn btn-info mr-2">Save</button>
            }
            <Link to={"/seller"} className="btn btn-outline-dark">
              Cancel
        </Link>
          </div>
        </div>
      </div >
    );
  }
}

export default SellerAdd;
