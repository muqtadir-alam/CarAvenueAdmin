import React from 'react';
import { Link } from 'react-router-dom';
import {
	addCountry,
	getCountry,
	updateCountry,
} from '../../../actions/homeAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CountryAdd extends React.Component {
	state = {};
	componentDidMount() {
		if (this.props.country_id !== null) {
			this.getCountryDetails(this.props.country_id);
		}
		this.props.getCountry();
		console.log(this.props.country_id);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			country: nextProps.home.country,
		});
		console.log(nextProps.home.country);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.country_id !== this.props.country_id) {
			this.setState({ country_id: this.props.country_id });
			this.getCountryDetails();
		}
		if (prevProps.language_id !== this.props.language_id) {
			if (this.props.country_id !== undefined) {
				this.getCountryDetails();
			}
		}
	}
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	getCountryDetails = id => {
		var country = this.state.country;

		if (country !== undefined) {
			console.log(country[0].id);
			console.log(this.props.country_id);
			for (let i = 0; i < country.length; i++) {
				if (country[i].id == this.props.country_id) {
					this.fillInputs(country[i]);
					console.log(country[i]);
				}
			}
		}
	};

	fillInputs(country) {
		console.log(country);
		this.setState({
			name: country.name,
			countryCode: country.countryCode,
			currency: country.currency,
		});
	}

	updateCountryData = () => {
		this.setState({ isSaving: true });
		var data = {
			CountryId: this.props.country_id,
			LanguageCode: this.props.language_id,
			name: this.state.name,
			currency: this.state.currency,
			countryCode: this.state.countryCode,
		};
		console.log(data);
		this.props.updateCountry(data);
	};

	addCountry = () => {
		this.setState({ isSaving: true });
		var data = {
			payload: {
				anguageCode: this.props.language_id,
				name: this.state.name,
				currency: this.state.currency,
				countryCode: this.state.countryCode,
			},
		};
		this.props.addCountry(data);
	};
	onHandleDescriptionChange = value => {
		this.setState({ description: value });
	};
	onSaveData = () => {
		var that = this;

		if (that.props.country_id !== undefined) {
			that.updateCountryData();
		} else {
			that.addCountry();
		}
	};
	render() {
		return (
			<div className=''>
				<div className='card-body'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Country Name</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='name'
										id='name'
										placeholder='Country Name'
										onChange={this.handleChange}
										value={this.state.name}
										required
									/>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>Country Code</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='countryCode'
										id='countryCode'
										placeholder='Country Code'
										onChange={this.handleChange}
										value={this.state.countryCode}
										required
									/>
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-group row'>
								<label className='col-sm-3 col-form-label'>
									Country Currency
								</label>
								<div className='col-sm-9'>
									<input
										type='text'
										className='form-control'
										name='currency'
										id='currency'
										placeholder='Country Currency'
										onChange={this.handleChange}
										value={this.state.currency}
										required
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='card-footer'>
						<div className='row'>
							<div className='text-right col-6 offset-6'>
								<Link to='/country' className='btn btn-outline-secondary'>
									<i className='icofont icofont-rounded-double-left'></i>
									Back
								</Link>
								{this.state.isSaving ? (
									<button
										className='btn hor-grd btn-grd-inverse offset-1'
										disabled>
										Saving...!
									</button>
								) : (
									<button
										onClick={this.onSaveData}
										className='btn hor-grd btn-grd-inverse offset-1'>
										<i className='ti-save'></i>Save
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

CountryAdd.propsTypes = {
	addCountry: PropTypes.func.isRequired,
	getCountry: PropTypes.func.isRequired,
	updateCountry: PropTypes.func.isRequired,
	home: PropTypes.object.isRequired,
};

var mapStateToProps = state => ({
	home: state.home,
});

export default connect(mapStateToProps, {
	addCountry,
	getCountry,
	updateCountry,
})(CountryAdd);
