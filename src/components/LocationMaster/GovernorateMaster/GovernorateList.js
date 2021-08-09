import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGovernorate, deleteGovernorate } from '../../../actions/homeAction';
import MUIDataTable from 'mui-datatables';

class GovernorateList extends React.Component {
	state = {};

	componentWillMount() {
		this.props.getGovernorate();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ governorate: nextProps.home.governorate });
	}

	deleteGovernorate = id => {
		console.log(id);
		var data = {
			GovernorateId: id,
		};
		this.props.deleteGovernorate(data);
	};

	render() {
		const columns = [
			{
				name: 'name',
				label: 'Governorate Name',
				options: {
					filter: true,
					sort: true,
				},
			},
			{
				name: 'Country.name',
				label: 'Country Name',
				options: {
					filter: true,
					sort: true,
				},
			},
			{
				name: 'id',
				label: 'Actions',
				options: {
					filter: true,
					sort: true,
					customBodyRender: (id, tableMeta) => {
						// var id = governate[0].id;
						return (
							<div>
								<Link
									to={'/governorate/add/' + id}
									className='m-r-15 text-muted'
									data-toggle='tooltip'
									data-placement='top'
									title=''
									data-original-title='Edit'>
									<i className='f-20 icofont icofont-ui-edit text-custom'></i>
								</Link>
								<span
									onClick={this.deleteGovernorate.bind(this, id)}
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
						: 'Sorry, No Governorate Found',
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
											<h4>Governorate List</h4>
										</div>
									</div>
									<Link
										to='/governorate/add'
										className='btn btn-sm btn-inverse waves-effect waves-light f-right d-inline-block md-trigger'
										data-modal='modal-13'>
										{' '}
										<i className='icofont icofont-plus m-r-5'></i> Add
										Governorate
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

											<li className='breadcrumb-item active'>
												Governorate List
											</li>
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
													title={'Governorate List'}
													className='table-responsive'
													data={this.state.governorate}
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

GovernorateList.propsTypes = {
	getGovernorate: PropTypes.func.isRequired,
	deleteGovernorate: PropTypes.func.isRequired,
	home: PropTypes.object.isRequired,
};

var mapStateToProps = state => ({
	home: state.home,
});

export default connect(mapStateToProps, { getGovernorate, deleteGovernorate })(
	GovernorateList
);
