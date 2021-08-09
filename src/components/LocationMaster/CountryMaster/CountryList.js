import React from 'react';
import { Link } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountry, deleteCountry } from '../../../actions/homeAction';

class CountryList extends React.Component {
	state = {
		country: [],
	};

	componentWillMount() {
		this.props.getCountry();
	}

	componentWillReceiveProps(nextProps) {
		console.log('hi there', this.props);
		if (this.props.location.pathname === '/country') {
			console.log('inside did update', this.props.match.params.type);
			if (this.props.home === undefined) {
				this.setState({});
			} else {
				this.setState({});
				let country = this.props.home.data.response;
				console.log('country code ', country);
				this.setState({ country });
			}
		}
		// this.setState({ country: nextProps.home });
	}

	state = {};

	deleteCountry = id => {
		var data = {
			CountryId: id,
		};
		this.props.deleteCountry(data);
	};

	render() {
		const columns = [
			{
				name: 'name',
				label: 'Country Name',
				options: {
					filter: true,
					sort: true,
				},
			},
			{
				name: 'countryCode',
				label: 'Country Code',
				options: {
					filter: true,
					sort: true,
				},
			},
			{
				name: 'currency',
				label: 'Currency',
				options: {
					filter: true,
					sort: true,
				},
			},

			{
				name: 'id',
				label: 'Action',
				options: {
					filter: true,
					sort: true,
					customBodyRender: (id, tableMeta) => {
						return (
							<div>
								<Link
									to={'/country/add/' + id}
									className='m-r-15 text-muted'
									data-toggle='tooltip'
									data-placement='top'
									title=''
									data-original-title='Edit'>
									<i className='f-20 icofont icofont-ui-edit text-custom'></i>
								</Link>
								<span
									onClick={this.deleteCountry.bind(this, id)}
									className='m-r-15 text-muted'
									data-toggle='tooltip'
									data-placement='top'
									title=''
									data-original-title='Delete'>
									<i className='f-20 icofont icofont-delete-alt text-danger'></i>{' '}
								</span>
							</div>
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
			selectableRows: 'none',
			textLabels: {
				body: {
					noMatch: this.state.isSaving
						? 'Loading data..!'
						: 'Sorry, No Country Found',
					toolTip: 'Sort',
					columnHeaderTooltip: column => `Sort for ${column.label}`,
				},
			},
		};
		return (
			<div className='pcoded-inner-content'>
				<div className='main-body'>
					<div className='page-wrapper'>
						<div className='page-header'>
							<div className='row align-items-end'>
								<div className='col-lg-8'>
									<div className='page-header-title'>
										<div className='d-inline'>
											<h4>Country List</h4>
										</div>
									</div>

									<Link
										to='/country/add'
										className='btn btn-sm btn-inverse waves-effect waves-light f-right d-inline-block md-trigger'
										data-modal='modal-13'>
										{' '}
										<i className='icofont icofont-plus m-r-5'></i> Add Country
									</Link>
								</div>
								<div className='col-lg-4'>
									<div className='page-header-breadcrumb'>
										<ul className='breadcrumb-title'>
											<li className='breadcrumb-item'>
												<Link to='/'>
													<i className='feather icon-home'></i>{' '}
												</Link>
											</li>
											<li className='breadcrumb-item active'>Country List</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='page-body'>
							<div className='row'>
								<div className='col-sm-12'>
									<div className='card'>
										<div className='card-block'>
											<div className='dt-responsive table-responsive'>
												<MUIDataTable
													title={'Country List'}
													className='table-responsive'
													data={this.state.country}
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
			</div>
		);
	}
}

CountryList.propsTypes = {
	getCountry: PropTypes.func.isRequired,
	deleteCountry: PropTypes.func.isRequired,
	home: PropTypes.object.isRequired,
};

var mapStateToProps = state => ({
	home: state.home.country,
});

export default connect(mapStateToProps, { getCountry, deleteCountry })(
	CountryList
);
