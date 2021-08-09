import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Constant from '../../../Constant';
import Swal from 'sweetalert2';
import MUIDataTable from 'mui-datatables';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { getallUser, GetServiceFilter,getBusinessListing } from '../../../actions/homeAction';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import {GetServiceFilter } from '../../actions/homeAction';
import {
	FormGroup,
	FormLabel,
	Tooltip,
	TextField,
	Button,
	Select,
	TextareaAutosize,
	Input,
	FormControl,
	InputLabel,
	zIndex,
} from '@material-ui/core';
import { keys } from '@material-ui/core/styles/createBreakpoints';
// import zIndex from '@material-ui/core/styles/zindex';


class UserList extends React.Component {
	state = {
		statusFilter: '',
		serviceFilter: '',
		userFilter: '',
		
		startDate: '',
		userList : [
		
		],
		businessList:[]
	};

	// var classes = useStyles();

	
// handleChange(date) {
// 	this.setState({
// 	startDate: date
// 	})
// 	}

	handleServiceFilter = data => {
		this.setState({ serviceFilter: new Date().toDateString(data) });
		console.log('hendler >>>>>>', data);
		console.log(this.state.serviceFilter);
	};

	handleUserFilter = data => {
		this.setState({ userFilter: data });
		console.log('hendler >>>>>>', data);
		console.log(this.state.userFilter);
	};

	handleDateFilter = data => {
		this.setState({ startDate: data });
		console.log('hendler >>>>>>', data);
		console.log(this.state.dateFilter);
	};

	handlestatusFilter = data => {
		this.setState({ statusFilter: data });
		console.log('hendler >>>>>>', data);
		console.log(this.state.statusFilter);
	};

	onGo = () => {
		console.log('muqtadir')
		var serviceType =
			this.state.serviceFilter !== 'All' ? this.state.serviceFilter : '';
		var userType = this.state.userFilter !== 'All' ? this.state.userFilter : '';
		var statusType =
			this.state.statusFilter !== 'All' ? this.state.statusFilter : '';
			var RegDate=
			this.state.startDate !== 'All' ? this.state.startDate : '';
		console.log('hello here is the date problem ',RegDate)
		// if(RegDate===)
		// console.log('date is here ',RegDate)
		// let data = {
		// 	serviceType,
		// 	userType,
		// 	RegDate,
		// 	statusType,
		// }
		// console.log('date is here ',RegDate)

		// console.log( 'this is data', data);
		this.props.getallUser(	serviceType,
			userType,
			RegDate,
			statusType,);
	};

	handleStatusChange = sid => {
		var isChecked = $('#cattogBtn_' + sid);
		isChecked.prop('checked', !isChecked.prop('checked'));
		console.log(isChecked.prop('checked'), !isChecked.prop('checked'));
		if (!isChecked.prop('checked') === true) {
			var status = 'active';
		} else {
			var status = 'inactive';
		}
		let newArray = this.state.user_list;
		var a = newArray.find(element => {
			return element.id === sid;
		});
		a.status = status;
		console.log(newArray);
		this.setState({ user_list: newArray });
		Swal.fire('Update Status!', 'Status has been updated.', 'success');
	};

	componentWillReceiveProps(nextProps) {

		// console.log('i am next props', nextProps);
		// nextProps.SparePartsGetList()
		// nextProps.getCarRentListin()
			// nextProps.getallUser()
		// 	nextProps.getcardealerListing()
		// 	nextProps.getcarsaleListing()
	
		
		// console.log('hi there', this.props);
		if (this.props.location.pathname === '/user')
		{
			// console.log('inside did update',this.props.match.params.type)
			if (this.props.home.userList !== undefined)
			{
				// nextProps.getallUser()
				
				let userList = this.props.home.userList.data.response
				let businessList = this.props.home.businessList.data.response
				this.setState({ userList })
				this.setState({ businessList })
				
			}
			else
			{this.setState({})
			}
		}
	// this.setState({
    //         home: nextProps.home,            
    //     });
	}
	componentDidMount() {
		this.props.getallUser()
		this.props.getBusinessListing()
		console.log('user list here ', this.props.home.businessList
		)
		console.log('inside did update',this.props.location.pathname)
	}

	componentWillMount() {
		// this.props.getallUsers();
		// this.props.getallData();
		// console.log('hi there', this.props);
	}
	componentDidUpdate() {

		if (this.props.home.businessList === undefined)
		{
			this.props.getBusinessListing()
			console.log('business list ', this.props.home.businessList)
			}
		// let userList = this.props.home.userList.data.response
		
		// console.log('hi there', this.props);
		// if (this.props.location.pathname === '/user')
		// {
		// 	console.log('inside did update',this.props.match.params.type)
		// 	if (this.props.home.userList.data.response === undefined)
		// 	{
		// 		this.setState({})
		// 	}
		// 	else
		// 	{
		// 		this.setState({ userList })
		// 	}
		// }
	
	}

	imgLoadError = event => {
		event.target.src = './assets/images/icon.png';
	};
	render() {
		const columns = [
			{
				name: 'UserType',
				label: 'User Type',
				options: {
					filter: false,
					sort: false,
					// customBodyRender: (Medium, tableMeta) => {
					// 	// return (
					// 	// 	<img
					// 	// 		src={
					// 	// 			Medium !== undefined && Medium !== null && Medium !== {}
					// 	// 				? Medium.url !== undefined &&
					// 	// 				  Medium.url !== null &&
					// 	// 				  Medium.url !== ''
					// 	// 					? Medium.url
					// 	// 					: './assets/images/icon.png'
					// 	// 				: './assets/images/icon.png'
					// 	// 		}
					// 	// 		className='img-fluid img-20'
					// 	// 		alt=''
					// 	// 		onError={this.imgLoadError}
					// 	// 	/>
					// 	// );
					// },
				},
			},
			{
				name: 'firstName',
				label: 'First Name',
				options: {
					filter: false,
					sort: true,
				},
			},

			{
				name: 'lastName',
				label: 'Last Name',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'mobileNumber',
				label: 'Phone No',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'InterestOfService',
				label: 'Interest Of Service',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'updatedAt',
				label: 'Date of Registration',
				options: {
					filter: true,
					sort: true,
				},
			},
			// {
			// 	name: 'status',
			// 	label: 'Status',
			// 	options: {
			// 		filter: true,
			// 		sort: true,
			// 		customBodyRender: (status, tableMeta) => {
			// 			var Id = tableMeta.rowData[6];
			// 			// console.log(tableMeta.rowData[6]);
			// 			return (
			// 				<Toggle
			// 					id={'status_' + Id}
			// 					checked={status}
			// 					value={status}
			// 					onChange={this.handleStatusChange.bind(this, Id, status)}
			// 				/>
			// 			);
			// 		},
			// 	},
			// },
			// {
			// 	name: 'wallet',
			// 	label: 'Wallet History',
			// 	options: {
			// 		filter: false,
			// 		sort: true,
			// 	},
			// },
			// {
			// 	name: 'follower',
			// 	label: 'Connection',
			// 	options: {
			// 		filter: false,
			// 		sort: true,
			// 	},
			// },
			{
				name: '5',
				label: 'Action',
				options: {
					filter: true,
					sort: true,
					customBodyRender: (id, tableMeta) => {
						return (
							<div>
								<Link
									to={'/user/add/:user_id?'}
									className='m-r-15 text-muted'
									data-toggle='tooltip'
									data-placement='top'
									title=''
									data-original-title='Edit'>
									<i className='f-20 icofont icofont-ui-edit text-custom'></i>
								</Link>
								<Link
									to={'/user/View/'}
									// onClick={this.deleteUser.bind(this, id)}
									className='m-r-15 text-muted'
									data-toggle='tooltip'
									data-placement='top'
									title=''
									data-original-title='View'>
									<i className='f-26 icofont icofont-eye text-black'></i>{' '}
								</Link>
							</div>
						);
					},
				},
			},

			{
				name: 'status',
				label: 'Status',
				options: {
					filter: true,
					sort: true,
					customBodyRender: (status, tableMeta) => {
						var Id = tableMeta.rowData[7];
						// console.log(tableMeta.rowData[6]);
						return (
							<Toggle
								id={'status_' + Id}
								checked={status}
								value={status}
								onChange={this.handleStatusChange.bind(this, Id, status)}
							/>
						);
					},
				},
			},
		];
		const options = {
			filter: false,

			viewColumns: false,
			print: false,
			download: false,
			search: false,
			selectableRows: 'none',
			// textLabels: {
			// 	body: {
			// 		noMatch: this.state.isSaving
			// 			? 'Loading data..!'
			// 			: 'Sorry, No Users Found',
			// 		toolTip: 'Sort',
			// 		columnHeaderTooltip: column => `Sort for ${column.label}`,
			// 	},
			// },
		};
		return (
			<div className='pcoded-inner-content'>
				<div className='main-body'>
					<div className='page-wrapper'>
						<div className='row'>
							<div className='col-sm-12'>
								<div className='card'>
									<div className='card-header'>
										{/* <h5>User List </h5> */}

										<div className='row'>
											<div className='col-sm-9'>
												<FormControl
													variant='outlined'
													className='col-sm-2 mx-1'>
													<InputLabel
														htmlFor='outlined-age-native-simple'
														style={{ fontSize: '12px' }}>
														User Type Filter
													</InputLabel>
													<Select
														search
														native
														name='userFilter'
														value={this.state.userFilter}
														onChange={val =>
															this.handleUserFilter(val.target.value)
														}
														label='Time Peroid'
														className='my-3'
														style={{ height: '30px' }}
														inputProps={{
															name: 'User Type',
															id: 'outlined-age-native-simple',
														}}>
														<option value='null'></option>
														
														<option value=' Service Provider'> Service Provider</option>
														<option value='Car User'> Car User</option>
														
													</Select>
												</FormControl>
												<FormControl
													variant='outlined'
													className='col-sm-2 mx-1'>
													<InputLabel
														htmlFor='outlined-age-native-simple'
														style={{ fontSize: '12px' }}>
														Interest of Service
													</InputLabel>
													<Select
														search
														native
														name='serviceFilter'
														value={this.state.serviceFilter}
														onChange={val =>
															this.handleServiceFilter(val.target.value)
														}
														label='Time Peroid'
														className='my-3'
														style={{ height: '30px' }}
														inputProps={{
															name: 'Time Peroid',
															id: 'outlined-age-native-simple',
														}}>
														<option value='null'></option>
														
															{/* {
											
															this.state.businessList.map((item) =>
																<option value=''>{this.item.business}</option>
																
																 console.log('item is here ', item) 
															)
															   } */}
														
															
			                            		<option value='garages'>garages</option>
														<option value={1}> Spare Parts</option>
														<option value={2}> Car Dealers</option>
														<option value={6}>Cars for Sale
														</option>
														
														<option value={29}>Rent a Car
														</option>
														
														<option value={59}> Taxi
														</option>
														
														<option value={89}> Car Wash
														</option>
														
														<option value={179}>Car Towing
														</option>
														<option value={4342}>Car Insurance
</option>
														<option value={4545}>Driving School
</option>
														<option value={1234}>Car Protection
</option>
														<option value={56}> Air Conditioning
</option>
														<option value={67}> Quick Service
														</option>
														<option value="Cars Agent
">Cars Agent
</option> 
														
													</Select>
												</FormControl>

											

												<FormControl
													variant='outlined'
													className='col-sm-2 mx-1'>
													<InputLabel
														htmlFor='outlined-age-native-simple'
														style={{ fontSize: '12px' }}>
														Status
													</InputLabel>
													{/* <InputLabel
														htmlFor='outlined-age-native-simple'
														style={{ fontSize: '12px' }}>
														Status
													</InputLabel> */}
													<Select
														search
														native
														name='status'
														value={this.state.statusFilter}
														onChange={val =>
															this.handlestatusFilter(val.target.value)
														}
														label='Time Peroid'
														className='my-3'
														style={{ height: '30px' }}
														inputProps={{
															name: 'Time Peroid',
															id: 'outlined-age-native-simple',
														}}>
														<option ></option>
														<option value='active'>Active</option>
														<option value=' Inactive'> Inactive</option>
													</Select>
												</FormControl>

												<FormControl
													variant='outlined'
													className='col-sm-2 mx-1'>
													{/* <InputLabel
														htmlFor='outlined-age-native-simple'
														style={{ fontSize: '12px' }}>
														Date of Registration
													</InputLabel> */}

												

													<TextField
														name="startDate"
														dateFormat=""
														defaultValue=""
														// selected={ this.state.startDate }
                                                      id="date"
                                                       label="date of Registration"
                                                        type="date"
                                                          
															className=' px-2 mx-8 '
														style={{ width: '170px' , fontSize: '2px',cursor:'pointer' }}
                                                               InputLabelProps={{
																   shrink: true,
																   name: 'Time Peroid',
															id: 'outlined-age-native-simple',
														}}
														onChange={val =>
															this.handleDateFilter(val.target.value)
														}
                                                                        />
{/* 
													<DatePicker
															
														 selected={ this.state.startDate }
              onChange={ this.handleDateFilter }
              name="startDate"
              dateFormat="MM/dd/yyyy"
                                                  className="form-control  my-2"
                                                          /> */}
 
												
												</FormControl>

												<FormControl className=' mx-5 mt-2'>
													<div
														className='btn btn-dark py-1 mx-3 mt-2'
														onClick={this.onGo}>
														Go
													</div>
												</FormControl>
											</div>
										</div>
										<Link
											to='/user/add'
											className='btn btn-sm btn-inverse waves-effect waves-light f-right d-inline-block md-trigger'
											data-modal='modal-13'>
											{' '}
											<i className='icofont icofont-plus m-r-5'></i> Add User
										</Link>
									</div>
									<div className='card-block'>
										<div className='dt-responsive table-responsive'>
											<button
												className='f-right bg-white b-none'
												data-modal='modal-13'>
												<Tooltip
													title='Download Selected'
													aria-label='download'
													onClick={() => {
														this.exportCSVS();
													}}>
													<i
														className='icofont icofont-download-alt'
														style={{
															fontSize: '30px',
															color: 'grey',
														}}></i>
												</Tooltip>
											</button>
											<MUIDataTable
												title={'User List'}
												className='table-responsive'
												data={this.state.userList }
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

UserList.propsTypes = {
	getallUser : PropTypes.func.isRequired,
	GetServiceFilter: PropTypes.func.isRequired,
	getBusinessListing:PropTypes.func.isRequired,
};
var mapStateToProps = state => {
	return {
		home: state.home,
	};
};

export default connect(mapStateToProps, { getallUser , GetServiceFilter,getBusinessListing })(
	UserList
);
