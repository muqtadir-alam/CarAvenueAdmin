import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Swal from 'sweetalert2';
import MUIDataTable from 'mui-datatables';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';

class ManageCars extends React.Component {
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
			if (this.props.match.params.type === 'countryCode') {
				this.setState({
					user_list: [{ ServiceType: 'country code' }, { ServiceType: 'code' }],
				});
			} else if (this.props.match.params.type === 'CountryList') {
				console.log('under spare part');
				this.setState({
					user_list: [{ ServiceType: 'country list' }, { ServiceType: 'list' }],
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
					CarName: 'Ford',
					BannerImage: '',
					Color: 'red-Green',
					Category: 'Car',
				},
				{ ServiceType: 'Garages' },
			],
		});
	}

	render() {
		let columns = [
			{
				name: 'CarName',
				label: 'Car Name',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'BannerImage',
				label: 'Banner Image ',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'ThumbnailImage',
				label: 'Thumbnail Image',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'PriceRangeFrom',
				label: 'Price Range From',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'Cylinder',
				label: 'Cylinder',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'Color',
				label: 'Color',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'Category',
				label: 'Category',
				options: {
					filter: false,
					sort: true,
				},
			},
			{
				name: 'Type',
				label: 'Type',
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
		];

		let options = {
			filterType: 'dropdown',
			viewColumns: false,
			print: false,
			download: false,
			selectableRows: 'none',
			textLabels: {
				body: {
					noMatch: this.state.isSaving
						? 'Loading data..!'
						: 'Sorry, No Users Found',
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
											to={`/ServiceProviders/Agent/AddManageCAr`}
											className='btn btn-sm btn-inverse waves-effect waves-light f-right d-inline-block md-trigger'
											data-modal='modal-13'>
											{' '}
											<i className='icofont icofont-plus m-r-5'></i>
											Add New Manage Car
										</Link>
									</div>

									<div className='card-block'>
										<div className='dt-responsive table-responsive'>
											<MUIDataTable
												title={` Manage Cars			`}
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

ManageCars.propsTypes = {};

var mapStateToProps = state => ({
	home: state.home,
});

export default connect(mapStateToProps, {})(ManageCars);
