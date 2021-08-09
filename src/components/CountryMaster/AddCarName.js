import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import $ from 'jquery';
import ReactQuill from 'react-quill';
import Constant from '../../Constant';

class AddCarName extends React.Component {
	state = {
		User_Type: '',

		First_name: '',
		Last_name: '',
		phoneNo: '',
		Interest_of_service: '',
		Date_Registration: '',
		status: true,

		// email: '',
		// civilId: '',
	};
	// onHandleDescriptionChange = value => {
	// 	this.setState({ description: value });
	// };

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	// handleImageUpload = event => {
	// 	document.getElementById('banner_image_lable').innerHTML = '';
	// 	let element = $('#banner_image').get(0);
	// 	$('#banner_image').empty();
	// 	this.setState({ accepted: element });
	// 	var proof_img = [];
	// 	let obj = {};
	// 	console.log(element.files);
	// 	this.setState({ banner_image: element.files });
	// 	for (var i = 0; i < element.files.length; i++) {
	// 		var file1 = element.files[i];
	// 		var img = document.createElement('img');
	// 		img.className = 'img-100';
	// 		var filePath = URL.createObjectURL(file1);
	// 		img.src = filePath;
	// 		$('#banner_image_lable').append(img);
	// 	}
	// };
	onSave = () => {
		var that = this;
		that.setState({ isSaving: true });
		if (that.state.accepted) {
		} else {
			that.editUser(that.state.media_id);
			// if (that.props.user_id !== undefined) {
			that.updateUserData(that.state.image);
			// } else {
			that.addUser(that.state.image);
			// }
		}
	};
	// uploadMedia = () => {
	// 	var that = this;
	// 	var form = $('#userImage')[0];
	// 	var data = new FormData(form);
	// 	fetch(Constant.getAPI() + '/media/add', {
	// 		method: 'post',
	// 		body: data,
	// 	})
	// 		.then(function (response) {
	// 			return response.json();
	// 		})
	// 		.then(function (json) {
	// 			if (json.status === true) {
	// 				if (that.props.user_id !== undefined) {
	// 					that.updateUserData(json.data[0].id);
	// 				} else {
	// 					that.addUser(json.data[0].id);
	// 				}
	// 			} else {
	// 				// that.setState({ category_data: [] });
	// 				console.log(json.error);
	// 			}
	// 		});
	// };
	updateUserData = media_url => {
		var that = this;
		var data = new URLSearchParams();
		this.setState({ isLoading: true });
		if (media_url !== undefined && media_url !== null && media_url !== '') {
			data.append('MediaId', media_url);
		}
		// data.append('name', that.state.user_name);
		// data.append('description', that.state.description);
		// data.append('LanguageId', that.props.language_id);
		// data.append('DomainId', Constant.defaultDomain());
		data.append('UserId', that.props.user_id);
		data.append('status', that.state.status);
		fetch(Constant.getAPI() + '/user/update', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: localStorage.getItem('kai_used_car_ad_auth'),
			},
			body: data,
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				if (json.status === true) {
					Swal.fire('Updated !', 'User has been Updated', 'success');
					window.location.href = '#/customers';
					that.setState({ isSaving: false });
				} else {
					Swal.fire(
						'warning !',
						'Something went wrong..Please Try again after sometime.!',
						'warning'
					);
					that.setState({ isLoading: false });
					console.log(json);
				}
			});
	};
	addUser = media_url => {
		var that = this;
		var data = new URLSearchParams();
		this.setState({ isLoading: true });
		// if (media_url !== undefined && media_url !== null && media_url !== '') {
		// 	data.append('MediaId', media_url);
		// }
		data.append('UserType', that.state.User_Type);
		data.append('FirstName', that.state.First_name);
		data.append('LastName', that.state.Last_name);
		data.append('description', that.state.description);
		data.append('LanguageId', that.props.language_id);
		// data.append('DomainId', Constant.defaultDomain());
		data.append('status', that.state.status);
		fetch(Constant.getAPI() + '/user', {
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: localStorage.getItem('kai_used_car_ad_auth'),
			},
			body: data,
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				if (json.status === true) {
					Swal.fire('Added !', 'User has been Added', 'success');
					window.location.href = '#/customers';
					that.setState({ isSaving: false });
				} else {
					Swal.fire(
						'warning !',
						'Something went wrong..Please Try again after sometime.!',
						'warning'
					);
					that.setState({ isLoading: false });
					console.log(json);
				}
			});
	};
	componentWillMount() {
		// this.loadScript(process.env.PUBLIC_URL + "/assets/pages/filer/jquery.fileuploads.init.js");
		// this.getRoleList();
	}
	getRoleList = () => {
		var that = this;
		var data = new URLSearchParams();
		this.setState({ isLoading: true });
		//data.append("type", 'car');
		// data.append("UserId", that.props.user_id);
		fetch(Constant.getAPI() + '/role', {
			method: 'get',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: localStorage.getItem('kai_used_car_ad_auth'),
			},
			//body: data
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				if (json.status === true) {
					that.setState({
						role_list: json.data,
					});
				} else {
					Swal.fire(
						'warning !',
						'Something went wrong..Please Try again after sometime.!',
						'warning'
					);
					that.setState({ isLoading: false, role_list: [] });
					console.log(json);
				}
			});
	};

	render() {
		return (
			// sjfhsdakjf
			<div className=''>
				<div className='col-md-6'>
					<div className='form-group row'>
						<h1>Add Car Name</h1>

						{/* <label className='col-sm-3 col-form-label'>User Type</label> */}
						<div className='col-sm-9'>
							{/* <select
								name='User_type'
								className='form-control'
								value={this.state.User_Type}
								// onChange={this.handleChange}
							>
								<option value='true' name='active'>
									Select From Drop Down
								</option>
								<option value='false' name='inactive'>
									Inactive
								</option>
							</select> */}
						</div>
					</div>
				</div>
				{/* sdjkfj */}
				<div className='card-body'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Car Name</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name=' VehicleType'
										id=' VehicleType'
										placeholder='Car Name'
										onChange={this.handleChange}
										value={this.state.VehicleType}
									/>
								</div>
							</div>
						</div>

						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Description </label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='Description '
										id='Description '
										placeholder='Description '
										onChange={this.handleChange}
										value={this.state.Description}
									/>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Priority</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='Priority'
										id='Priority'
										placeholder='Priority'
										onChange={this.handleChange}
										value={this.state.Priority}
									/>
								</div>
							</div>
						</div>

						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Visibility</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='Visibility'
										id='Visibility'
										placeholder='Visibility'
										onChange={this.handleChange}
										value={this.state.Visibility}
									/>
								</div>
							</div>
						</div>

						{/* <div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>
									Interest Of Service
								</label>
								<div className='col-sm-9'>
									<select
										name='Interest_of_service'
										className='form-control'
										value={this.state.Interest_of_service}
										// onChange={this.handleChange}
									>
										<option value='true' name='active'>
											Garage
										</option>
										<option value='false' name='inactive'>
											Car Towing
										</option>
									</select>
								</div>
							</div>
						</div> */}

						{/* <div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>
									Date Of Registration
								</label>
								<div className='col-sm-9'>
									<input
										type='date'
										name='Date_Registration'
										className='form-control'
										value={this.state.Date_Registration}
										onChange={this.handleChange}
										id='Date_Registration'
									/>
									{/* <select
										name='status'
										className='form-control'
										value={this.state.status}
										onChange={this.handleChange}>
										<option value='true' name='active'>
											Garage
										</option>
										<option value='false' name='inactive'>
											Car Towing
										</option>
									</select> 
								</div>
							</div>
						</div> */}

						{/* jdskla */}
						{/* <div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Civil ID</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='civilId'
										id='civilId'
										placeholder='Civil ID'
										onChange={this.handleChange}
										value={this.state.civilId}
									/>
								</div>
							</div>
						</div> */}

						{/* <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">User Role</label>
                <div className="col-sm-9">
                  <select name="RoleId" className="form-control" value={this.state.RoleId} onChange={this.handleChange}>
                    <option value="0">Select User Role</option>
                    {
                      this.state.role_list !== undefined && this.state.role_list !== null && this.state.role_list !== [] && this.state.role_list.length > 0
                        ?
                        this.state.role_list.map(roles =>
                          <option value={roles.id} key={roles.id}>{roles.name}</option>
                        )
                        :
                        null
                    }
                  </select>
                </div>
              </div>
            </div>
             */}
						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Status</label>
								<div className='col-sm-9'>
									<select
										name='status'
										className='form-control'
										value={this.state.status}
										onChange={this.handleChange}>
										<option value='true' name='active'>
											Active
										</option>
										<option value='false' name='inactive'>
											Inactive
										</option>
									</select>
								</div>
							</div>
						</div>
						{/* <div className='col-md-6'>
							<div className='row'>
								<div className='col-sm-3'> Image</div>
								<div className='col-sm-9'>
									<form
										id='userImage'
										name='userImage'
										encType='multipart/form-data'
										className='text-capitalize'>
										<div className='form-group'>
											<input
												accept='image/*'
												onChange={this.handleImageUpload}
												id='banner_image'
												type='file'
												className='form-control'
												autoComplete='off'
												name='media'
												data-toggle='tooltip'
												title='Click To Upload Photo'
											/>
											<div id='banner_image_lable' className='pt-2'>
												{this.state.image ? (
													this.state.image !== null ||
													this.state.image !== undefined ||
													this.state.image !== {} ? (
														<img
															src={this.state.image}
															alt=''
															className='img-100'
															onError={e => {
																e.target.src = '';
															}}
														/>
													) : (
														''
													)
												) : (
													''
												)}
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>*/}
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
					<div className='card-footer'>
						<div className='row float-right p-3'>
							{this.state.isSaving ? (
								<button className='btn btn-grd-disabled mr-2' disabled>
									Saving...!
								</button>
							) : (
								<button
									onClick={this.onSave}
									className='btn btn-grd-disabled mr-2'>
									<i className='icofont icofont-save'></i> Save
								</button>
							)}
							<Link to={'/user'} className='btn btn-outline-dark'>
								{' '}
								Cancel{' '}
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddCarName;
