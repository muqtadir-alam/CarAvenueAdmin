import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCountry ,
         getGovernorate,
         addGovernorate, 
          updateGovernorate, } from "../../../actions/homeAction"
class GovernorateAdd extends React.Component {
  state = {};

  componentWillMount(){
    if(this.state.governorate_id !== null)
    {
      this.getGovernorateDetails(this.state.governorate_id);
    }
  
  };


  componentWillReceiveProps(nextProps) {
    this.setState({
      country: nextProps.home.country,
      governorate:nextProps.home.governorate,
    });
    console.log(this.state.country)
    console.log(nextProps.home.governorate)
  };

  componentDidUpdate(prevProps) {
    if (prevProps.governorate_id !== this.props.governorate_id) {
      this.setState({ governorate_id: this.props.governorate_id });
      this.getGovernorateDetails();
    }
    if (prevProps.language_id !== this.props.language_id) {
      if (this.props.governorate_id !== undefined) {
        this.props.getGovernorate();
      }
      this.props.getCountry();
    }
  };


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value })
    
  };


  getGovernorateDetails = () => {
    var governorate=this.state.governorate
  
    if(governorate !== undefined){
      
    for(let i=0;i<governorate.length;i++)
    {
      if(governorate[i].id == this.props.governorate_id){
         this.fillInputs(governorate[i])
         console.log(governorate[i])
      }
    }}
  };

  fillInputs(governorate){
    console.log(governorate)
    this.setState({
      name:governorate.name,
      countryId:governorate.Country.name,
    })
  };



  getCountryList = () => {
   
  };


  updateGovernorateData = () => {
    this.setState({ isSaving: true });
    var data = {
      GovernorateId:this.props.governorate_id,
      CountryId:this.state.countryId,
      languageCode:this.props.language_id,
      name:this.state.name,
    };
    console.log(data)
    this.props.updateGovernorate(data)
  };
  
  addGovernorate = () => {
   var data={
     name:this.state.name,
     languageCode:this.props.language_id,
     CountryId:this.state.countryId,
    }
    console.log(data)
    this.props.addGovernorate(data);
  };


  componentDidMount() {
    this.getCountryList();
  }
  onHandleDescriptionChange = (value) => {
    this.setState({ description: value });
  };


  onSaveData = () => {
    var that = this;

    if (that.props.governorate_id !== undefined) {
      that.updateGovernorateData();
       } else {
      that.addGovernorate();
    }
  };

  render() {
    return (
      <div className="">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Governorate Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Governorate Name"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Select Country
                </label>
                <div className="col-sm-9">
                  <select
                    name="countryId"
                    className="form-control form-control-inverse"
                    onChange={this.handleChange}
                    value={this.state.countryId}
                  >
                    <option value="opt1">Select Country</option>
                    {this.state.country!== undefined &&
                    this.state.country.length > 0
                      ? this.state.country.map((country) => (
                          <option value={country.id} key={country.id} >
                            {country.name}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Status</label>
                <div className="col-sm-9">
                  <select
                    name="status"
                    className="form-control"
                    value={this.state.status}
                    onChange={this.handleChange}
                  >
                    <option value="AVAILABLE" name="AVAILABLE">
                      AVAILABLE
                    </option>
                    <option value="NOT_AVAILABLE" name="NOT_AVAILABLE">
                      NOT AVAILABLE
                    </option>
                    <option value="BUSY" name="BUSY">
                      BUSY
                    </option>
                  </select>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col-md-12">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                  <ReactQuill
                    value={this.state.description}
                    onChange={this.onHandleDescriptionChange}
                    style={{ height: "200px", marginBottom: '5%' }}
                  />
                </div>
              </div>
            </div>
          </div> */}

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
            <Link to={"/governorate"} className="btn btn-outline-dark">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    );
  }
}



GovernorateAdd.propsTypes = {
 
  getCountry: PropTypes.func.isRequired,
  getGovernorate:PropTypes.func.isRequired, 
  addGovernorate:PropTypes.func.isRequired,
  updateGovernorate:PropTypes.func.isRequired,
  home: PropTypes.object.isRequired,
  
};

var mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, {

  getCountry,
  getGovernorate, 
  addGovernorate, 
  updateGovernorate
  
  })(GovernorateAdd);

