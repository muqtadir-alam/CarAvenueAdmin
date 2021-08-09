import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Swal from 'sweetalert2';
import MUIDataTable from 'mui-datatables';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import {
	FormGroup,
	FormLabel,
	Tooltip,
	TextField,
	Button,
	Select,
	FormControl,
	InputLabel,
} from '@material-ui/core';

class SparePartMaster extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {};
	// }
	state = {};
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

	componentDidUpdate(prevProps) {
		console.log('hello 1', prevProps);

		if (prevProps.location.pathname !== this.props.location.pathname) {
			console.log('hello 2');
			if (this.props.match.params.type === 'CarName') {
				this.setState({
					user_list: [
						{
							CarName: 'ford',
							Description: 'NAN',
							Priority: 'high',
							Status: 'Active',
						},
						{ ServiceType: 'code' },
					],
				});
			} else if (this.props.match.params.type === 'CarArea') {
				console.log('under spare part');
				this.setState({
					user_list: [
						{
							CarName: 'ford',
							Description: 'NAN',
							Priority: 'high',
							Status: 'Active',
						},
						{ ServiceType: 'list' },
					],
				});
			} else if (this.props.match.params.type === 'SpareParts') {
				console.log('under spare part');
				this.setState({
					user_list: [
						{ SparePartName: 'Sensor', Status: 'active' },
						{ SparePartName: 'Light' },
					],
				});
			} else if (this.props.match.params.type === 'SparePartTypes') {
				console.log('under spare part');
				this.setState({
					user_list: [
						{
							SpartPartType: 'Air bag snesorcountry list',
							SparePartName: 'Sensor',
							Status: 'Active',
						},
						{
							SpartPartType: 'Power Stop K87-K8687',
							SparePartName: 'Lights',
							Status: 'Active',
						},
					],
				});
			} else if (this.props.match.params.type) {
				console.log('under spare part');
				this.setState({
					user_list: [],
				});
			}
		}
	}

	componentDidMount() {
		this.setState({
			user_list: [
				{
					CarName: 'ford',
					Description: 'NAN',
					Priority: 'high',
					Status: 'Active',
				},
				{ ServiceType: 'code' },
			],
		});
	}

	render() {
		let columns = [];

		if (this.props.match.params.type === 'CarName') {
			columns = [
				{
					name: 'CarName',
					label: 'Car Name',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Description',
					label: 'Description',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Priority',
					label: 'Priority',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Status',
					label: 'Status ',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Visibility',
					label: 'Visibility',
					options: {
						filter: false,
						sort: true,
					},
				},
			];
		} else if (this.props.match.params.type === 'CarArea') {
			columns = [
				{
					name: 'CarArea',
					label: 'Car Area',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Description',
					label: 'Description',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Priority',
					label: 'Priority',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Status',
					label: 'Status ',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Visibility',
					label: 'Visibility',
					options: {
						filter: false,
						sort: true,
					},
				},
			];
		} else if (this.props.match.params.type === 'SpareParts') {
			columns = [
				{
					name: 'SparePartName',
					label: 'Spare Part Name',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Status',
					label: 'Status',
					options: {
						filter: false,
						sort: true,
					},
				},
			];
		} else if (this.props.match.params.type === 'SparePartTypes') {
			columns = [
				{
					name: 'SpartPartType',
					label: 'Spart Part Type',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'SparePartName',
					label: 'Spare Part Name',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Status',
					label: 'Status  ',
					options: {
						filter: false,
						sort: true,
					},
				},
			];
		}

		const options = {
			filter: false,
			viewColumns: false,
			print: false,
			download: false,
			selectableRows: 'none',
			textLabels: {
				body: {
					noMatch: this.state.isSaving
						? 'Loading data..!'
						: 'Sorry, No Data Found',
					toolTip: 'Sort',
					columnHeaderTooltip: column => `Sort for ${column.label}`,
				},
			},
		};
		return (
			<div className='pcoded-inner-content'>
				<div className='main-body'>
					<div className='page-wrapper'>
						<div className='row'>
							<div className='col-sm-12'>
								<div className='card'>
									<div className='card-header'>
										{/* <h5>Product {this.props.match.params.type} List</h5> */}
										<Link
											to={`/SparePartMaster/${this.props.match.params.type}/Add/${this.props.match.params.type}`}
											className='btn btn-sm btn-inverse waves-effect waves-light f-right d-inline-block md-trigger'
											data-modal='modal-13'>
											{' '}
											<i className='icofont icofont-plus m-r-5'></i>
											{`Add ${this.props.match.params.type} `}
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
												title={`Spare Part Master List`}
												className='table-responsive'
												data={this.state.user_list}
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

SparePartMaster.propsTypes = {};

var mapStateToProps = state => ({
	home: state.home,
});

export default connect(mapStateToProps, {})(SparePartMaster);
