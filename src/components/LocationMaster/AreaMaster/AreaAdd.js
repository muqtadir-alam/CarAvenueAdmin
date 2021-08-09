import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	updateArea,
	getArea,
	addArea,
	getGovernorate,
} from '../../../actions/homeAction';

class AreaAdd extends React.Component {
	state = {
		// status: "AVAILABLE",
		// description: "desc",
	};

	componentDidMount() {
		if (this.state.area_id !== null) {
			this.getAreaDetails(this.state.area_id);
		}
		this.props.getArea();
		this.props.getGovernorate();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			area: nextProps.home.area,
			governorate_data: nextProps.home.governorate,
		});
		console.log(this.state.governorate_data);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.language_id !== undefined) {
			if (prevProps.area_id !== this.props.area_id) {
				this.setState({ area_id: this.props.area_id });
				this.getAreaDetails();
			}
			if (this.props.language_id !== prevProps.language_id) {
				if (this.props.area_id !== undefined) {
					this.getAreaDetails();
				}
			}
			if (this.state.country_id !== prevState.country_id) {
			}
		}
	}
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	getAreaDetails = () => {
		var area = this.state.area;

		if (area !== undefined) {
			for (let i = 0; i < area.length; i++) {
				if (area[i].id == this.props.area_id) {
					this.fillInputs(area[i]);
					console.log(area[i]);
				}
			}
		}
	};

	updateAreaData = () => {
		var data = {
			AreaId: this.props.area_id,
			name: this.state.name,
			areaCode: this.state.area_short_code,
			pinCode: this.state.pincode,
			GovernorateId: this.state.governateId,
			languageCode: this.props.language_id,
		};
		this.props.updateArea(data);
	};

	addArea = () => {
		var data = {
			name: this.state.name,
			areaCode: this.state.area_short_code,
			pinCode: this.state.pincode,
			GovernorateId: this.state.governateId,
			languageCode: this.props.language_id,
		};
		this.props.addArea(data);
	};

	fillInputs(area) {
		console.log(area);
		this.setState({
			name: area.name,
			area_short_code: area.areaCode,
			pincode: area.pinCode,
			governateId: area.GovernorateId,
		});
	}
	componentWillMount() {
		// this.loadScript(
		//   process.env.PUBLIC_URL + "/assets/pages/filer/jquery.fileuploads.init.js"
		// );
		// this.getGovernorateList();
	}

	onSaveData = () => {
		var that = this;
		// Swal.fire("Added !", "Area has been Added", "success");
		if (that.props.area_id !== undefined) {
			that.updateAreaData();
		} else {
			that.addArea();
		}
	};
	// getCountryList = () => {

	// };
	// getGovernorateList = () => {

	// };
	render() {
		return (
			<div className=''>
				<div className='card-body'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Area Name</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='name'
										id='name'
										placeholder='Area Name'
										onChange={this.handleChange}
										value={this.state.name}
									/>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Area Code</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='area_short_code'
										id='area_short_code'
										placeholder='Area Code'
										onChange={this.handleChange}
										defaultValue={this.state.area_short_code}
									/>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Pincode</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='pincode'
										id='pincode'
										placeholder='Pincode'
										onChange={this.handleChange}
										value={this.state.pincode}
									/>
								</div>
							</div>
						</div>
						{/* 
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Select Country</label>
                <div className="col-sm-9">
                  <select name="country_id" className="form-control form-control-inverse" onChange={this.handleChange} value={this.state.country_id}>
                    <option value="0">Select Country</option>
                    {
                      this.state.country_data !== undefined && this.state.country_data !== null && this.state.country_data !== [] && this.state.country_data.length > 0
                        ?
                        this.state.country_data.map(country_list =>
                          <option value={country_list.id}>{country_list.name}</option>
                        )
                        :
                        null
                    }
                  </select>
                </div>
              </div>
            </div> */}

						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>
									Select Governorate
								</label>
								<div className='col-sm-9'>
									<select
										name='governateId'
										className='form-control form-control-inverse'
										onChange={this.handleChange}
										value={this.state.governateId}>
										<option value=''>Select Governorate</option>
										{this.state.governorate_data !== undefined &&
										this.state.governorate_data !== null &&
										this.state.governorate_data !== [] &&
										this.state.governorate_data.length > 0
											? this.state.governorate_data.map(governorate_data => (
													<option
														value={governorate_data.id}
														key={governorate_data.id}>
														{governorate_data.name}
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
						{/* <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Delivery Charge</label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="form-control"
                    onChange={this.handleChange}
                    name="deliveryCharge"
                    id="deliveryCharge"
                    value={this.state.deliveryCharge}
                    placeholder="Delivery Charge"
                    aria-label="DeliveryCharge"
                    aria-describedby="basic-addon1" />
                </div>
              </div>
            </div> */}
						{/* <div className="col-md-6">
              <div className="form-group ">
                <div className="input-group mb-3">
                  <div className="input-group-addon">
                    <span className="input-group-text" id="basic-addon1">Latitude</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    onChange={this.handleChange}
                    name="lat"
                    id="lat"
                    value={this.state.lat}
                    placeholder="Latitude"
                    aria-label="Username"
                    aria-describedby="basic-addon1" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group ">
                <div className="input-group mb-3">
                  <div className="input-group-addon">
                    <span className="input-group-text" id="basic-addon1">Longitude</span>
                  </div>
                  <input
                    type="number"
                    onChange={this.handleChange}
                    name="lng"
                    id="lng"
                    placeholder="Longitude"
                    value={this.state.lng}
                    className="form-control"
                    aria-label="Longitude" aria-describedby="basic-addon1" />
                </div>
              </div>
            </div>
          */}
					</div>
					<div className='row float-right p-3'>
						{this.state.isSaving ? (
							<button className='btn btn-grd-disabled mr-2' disabled>
								Saving...!
							</button>
						) : (
							<button
								onClick={this.onSaveData}
								className='btn btn-grd-disabled mr-2'>
								<i className='icofont icofont-save'></i> Save
							</button>
						)}
						<Link to={'/area'} className='btn btn-outline-dark'>
							Cancel
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

AreaAdd.propsTypes = {
	getGovernorate: PropTypes.func.isRequired,
	getArea: PropTypes.func.isRequired,
	addArea: PropTypes.func.isRequired,
	updateArea: PropTypes.func.isRequired,
	home: PropTypes.object.isRequired,
};

var mapStateToProps = state => ({
	home: state.home,
});

export default connect(mapStateToProps, {
	getGovernorate,
	getArea,
	addArea,
	updateArea,
})(AreaAdd);
