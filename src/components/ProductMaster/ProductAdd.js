import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategory, addCategory, updateCategory } from '../../actions/index';
import UploadImage from '../utils/UploadImage';

class ProductAdd extends React.Component {
	state = {
		name: '',
		code: '',
		value: '',
		status: '',
	};

	componentWillReceiveProps(nextProps) {}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div className=''>
				{this.state.isLoading ? (
					<Loader />
				) : (
					<div className='card-body'>
						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group row'>
									<label className='col-sm-3 col-form-label'>Name</label>
									<div className='col-sm-9'>
										<input
											type='text'
											className='form-control'
											name='name'
											id='name'
											placeholder='Name'
											onChange={this.handleChange}
											value={this.state.name}
										/>
									</div>
								</div>
							</div>
							{this.props.type === 'auction' ? (
								<>
									<div className='col-md-6'>
										<div className='form-group row'>
											<label className='col-sm-3 col-form-label'>
												Auction Live
											</label>
											<div className='col-sm-9'>
												<input
													type='number'
													className='form-control'
													name='auctionLive'
													id='auctionLive'
													placeholder='Time auction is Live'
													onChange={this.handleChange}
													value={this.state.auctionLive}
												/>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group row'>
											<label className='col-sm-3 col-form-label'>
												Auction Live Date
											</label>
											<div className='col-sm-9'>
												<input
													type='date'
													className='form-control'
													name='date'
													id='date'
													placeholder='Date for auction'
													onChange={this.handleChange}
													value={this.state.date}
												/>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group row'>
											<label className='col-sm-3 col-form-label'>
												Auction Live Time
											</label>
											<div className='col-sm-9'>
												<input
													type='time'
													className='form-control'
													name='time'
													id='time'
													placeholder='Time for auction'
													onChange={this.handleChange}
													value={this.state.time}
												/>
											</div>
										</div>
									</div>
								</>
							) : (
								''
							)}
							<div className='col-md-6'>
								<div className='form-group row'>
									<label className='col-sm-3 col-form-label'>Category</label>
									<div className='col-sm-9'>
										<select
											name='Category'
											className='form-control'
											value={this.state.category}
											onChange={this.handleChange}>
											<option value='true'>Phone</option>
											<option value='false'>Dress</option>
										</select>
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group row'>
									<label className='col-sm-3 col-form-label'>Price</label>
									<div className='col-sm-9'>
										<input
											type='number'
											className='form-control'
											name='price'
											id='price'
											placeholder='Price'
											onChange={this.handleChange}
											value={this.state.price}
										/>
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group row'>
									<label className='col-sm-3 col-form-label'>Quantity</label>
									<div className='col-sm-9'>
										<input
											type='number'
											className='form-control'
											name='Quantity'
											id='Quantity'
											placeholder='Quantity'
											onChange={this.handleChange}
											value={this.state.Quantity}
										/>
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group row'>
									<label className='col-sm-3 col-form-label'>Sell Type</label>
									<div className='col-sm-9'>
										<select
											name='sellType'
											className='form-control'
											value={this.props.type}
											onChange={this.handleChange}>
											<option value={'fixed'} name='active'>
												Fixed
											</option>
											<option value={'auction'} name='inactive'>
												Auction
											</option>
										</select>
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group row'>
									<label className='col-sm-3 col-form-label'>
										Display Image
									</label>
									<UploadImage
										id={'customFile'}
										uploadGalleryImage={this.uploadImage}></UploadImage>
									<label class='custom-file-label' for='customFile'>
										{this.state.label}
									</label>
								</div>
							</div>

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
							<div className='col-md-6'>
								<div className='form-group row'>
									<label className='col-sm-3 col-form-label'>Details</label>
									<div className='col-sm-9'>
										<textarea
											className='form-control'
											name='details'
											id='address'
											placeholder='Details'
											onChange={this.handleChange}
											value={this.state.address}
											rows={3}
										/>
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<div id='id_image_section_label' className='pt-2'>
									{this.state.imageurl ? (
										this.state.imageurl !== undefined ? (
											<img
												src={`http://204.48.26.50:8060/${this.state.imageurl}`}
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
						</div>
						<div className='card-footer'>
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
								<Link to={'/product/fixed'} className='btn btn-outline-dark'>
									Cancel
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

ProductAdd.propsTypes = {};

var mapStateToProps = state => ({
	home: state.home,
});

export default connect(mapStateToProps, {})(ProductAdd);
