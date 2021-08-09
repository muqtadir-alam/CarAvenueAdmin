import axios from 'axios';
import Constant from '../Constant';
import {
	SET_LOADING,
	LOGOUT,
	ADMIN_REGISTER,
	SET_USER,
	GET_COUNTRY,
	GET_ALL_USER,
	GET_CATEGORY,
	GET_GOVERNORATE,
	GET_AREA,
	GET_TERMS,
	GET_TAXI_DATA,
	GET_SPARE_PART_DATA,
	GET_CAR_DEALER_DATA,
	GET_CAR_SALE_DATA,
	GET_CAR_RENT_DATA,
	GET_SERVICE_FILTER,
	GET_GARAGE_DATA,
	GET_BUSINESS_DATA,
} from './types';
import Swal from 'sweetalert2';

var config = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: localStorage.getItem('loged_In_auth'),
	},
};
var configuser = {
	headers: {
		'Content-Type': 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjMzBlZWRlNi01MGI1LTRiOTYtOGFlZC0yZDA5MTk0NGUyNjMiLCJpYXQiOjE2MjY2Nzk0OTh9.znCD1cz8-GNGUjQpt4ixE8XLHswg4PBNU2Hm4M9CPZU',
	},
};
// SET LOADING
export const setLoading = data => dispatch => {
	dispatch({
		type: SET_LOADING,
		payload: data,
	});
};

// LOGIN
export const loginUser = data => dispatch => {
	try {
		console.log('hd>>>>', data);
		axios

			.post('http://dev.infoware.xyz:8080/api/admin/login', data)

			.then(res => {
				console.log('heeee<<<<', res);
				dispatch({
					type: SET_USER,
					payload: res.data,
				});
				console.log('woooo coool', res.data);

				console.log('heeee<<<<', res);

				Swal.fire({
					title: 'Login Successfully',
					icon: 'success',
					imageUrl: './assets/images/favicon/android-chrome-192x192.png',
					imageHeight: 100,
					text: '',
					type: 'success',
					confirmButtonColor: '#3ab1f7',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok',
				});

				localStorage.setItem('loged_In_auth', res.data.response.authToken);
				localStorage.setItem('ucs-adminId', res.data.response.adminId);
				// localStorage.setItem('ad_name', res.data.data.fullName);
				// localStorage.setItem('ad_email', res.data.data.email);
				// localStorage.setItem('ucs-mobile', res.data.data.contactNo);
				localStorage.setItem('loged_In', true);
				window.location.href = '#/';
				window.location.reload();
			})
			.catch(err => {
				if (err.response) {
					// Request made and server responded
					console.log('reeeeeeeeeeeeeeee.....', err.response.data);
					console.log(err.response.status);
					console.log(err.response.headers);
				} else if (err.request) {
					console.log('The request was made but no response was received');
					// The request was made but no response was received
					console.log(err.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log(
						'Something happened in setting up the request that triggered an Errord'
					);
					console.log('Error', err.message);
				}
				console.log(err);
				Swal.fire({
					title: 'Enter the valid username or password',
					icon: 'error',
					imageUrl: './assets/images/favicon/android-chrome-192x192.png',
					imageHeight: 100,
					text: '',
					type: 'success',
					confirmButtonColor: '#3ab1f7',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok',
				});
			});
	} catch (err) {
		// console.log('err ???', err);
		Swal.fire('Incorrect Credentials', '', 'error');
	}
};

// LOGOUT
export const logout = () => dispatch => {
	dispatch({
		type: LOGOUT,
		payload: {},
	});
	localStorage.clear();
	window.location.href = '#/';
	window.location.reload();
};

// Register Admin

export const AdminRegister = admin => dispatch => {
	try {
		console.log('hd>>>>', admin);
		axios

			.post('http://dev.infoware.xyz:8080/api/admin/register', admin)

			.then(res => {
				console.log('heeee<<<<', res);
				dispatch({
					type: ADMIN_REGISTER,
					payload: res.data.response,
				});

				console.log('response', res.data.response);

				console.log('data is here<<<<', res);

				Swal.fire({
					title: 'Register Successfully',
					icon: 'success',
					imageUrl: './assets/images/favicon/android-chrome-192x192.png',
					imageHeight: 100,
					text: '',
					type: 'success',
					confirmButtonColor: '#3ab1f7',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok',
				});

				localStorage.setItem('OtpId', res.data.response.otpId);
				localStorage.setItem('isActive', res.data.response.isActive);
				localStorage.setItem('otp', res.data.response.otp);
				// localStorage.setItem('ad_email', res.data.data.email);
				// localStorage.setItem('ucs-mobile', res.data.data.contactNo);
				// localStorage.setItem('loged_In', true);
				window.location.href = '#/OtpVerification';
				// window.location.href = '#/login';
				window.location.reload();
			})
			.catch(err => {
				if (err.response) {
					// Request made and server responded
					console.log('reeeeeeeeeeeeeeee.....', err.response.data);
					console.log(err.response.status);
					console.log(err.response.headers);
				} else if (err.request) {
					console.log('The request was made but no response was received');
					// The request was made but no response was received
					console.log(err.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log(
						'Something happened in setting up the request that triggered an Errord'
					);
					console.log('Error', err.message);
				}
				console.log(err);
				Swal.fire({
					title: 'Registeration faild please try again!!!',
					icon: 'error',
					imageUrl: './assets/images/favicon/android-chrome-192x192.png',
					imageHeight: 100,
					text: '',
					type: 'success',
					confirmButtonColor: '#3ab1f7',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok',
				});
			});
	} catch (err) {
		// console.log('err ???', err);
		Swal.fire('Incorrect Credentials', '', 'error');
	}
};

//get all users
// export const getallUsers = () => dispatch => {
// 	dispatch(setLoading(true));
// 	axios
// 		.get(Constant.getAPI() + '/taxiOwner/listing', config)
// 		.then(res => {
// 			dispatch({
// 				type: GET_ALL_USER,
// 				payload: res,
// 			});
// 			console.log(res);
// 			dispatch(setLoading(true));
// 		})
// 		.catch(err => console.log(err));
// };
var data = new URLSearchParams();

export const getGarageData = data => dispatch => {
	var data = new URLSearchParams();
	console.log('this is inside axios', data);

	axios
		.get(
			`http://dev.infoware.xyz:8080/api/garageOwner/listing`,

			config
		)
		.then(res => {
			dispatch({
				type: GET_GARAGE_DATA,
				payload: res,
			});
			console.log('ress>>', res);
			dispatch(setLoading(true));
		})
		.catch(err => console.log(err));
};

export const getallUser = (
	serviceType,
	userType,
	RagDate,
	statusType
) => dispatch => {
	// var data = new URLSearchParams();
	console.log('hell iam here');

	console.log(
		'this is inside axios  get all user section ',
		RagDate,
		serviceType,
		statusType,
		userType
	);
	let Id = null;
	// let userId = RagDate;
	let createdAt = RagDate;
	let userId = Id;
	let status = statusType;
	var object = {};
	console.log('.this is the testing >>>>>', createdAt, status);

	console.log('helll ', status, userId, createdAt);
	if (status !== '' && createdAt !== undefined && userId != null) {
		object = { userId, createdAt, status };
	} else if (status !== '' && createdAt !== undefined) {
		object = { createdAt, status };
	} else if (status !== '' && userId != null) {
		object = { userId, status };
	} else if (createdAt !== undefined && userId != null) {
		object = { userId, createdAt };
	} else if (userId != null) {
		object = { userId };
	} else if (createdAt !== undefined) {
		object = { createdAt };
	}
	// object = { userId, createdAt, status };
	console.log('here final tuch ', object);

	let query = '';
	Object.keys(object).forEach(key => {
		query += key + '=' + object[key].trim() + '&';
	});
	query = query.slice(0, -1);
	axios
		.get(`http://dev.infoware.xyz:8080/api/user` + '?' + query, config)
		.then(res => {
			dispatch({
				type: GET_ALL_USER,
				payload: res,
			});
			console.log('ress>>', res);
			dispatch(setLoading(true));
		})
		.catch(err => console.log(err));
};

export const getcardealerListing = () => dispatch => {
	console.log('this is inside axios cardealer', data);

	axios
		.get('http://dev.infoware.xyz:8080/api/carDealer/listing', config)
		.then(res => {
			dispatch({
				type: GET_CAR_DEALER_DATA,
				payload: res,
			});
			console.log(res);
			dispatch(setLoading(true));
		})
		.catch(err => console.log(err));
};

export const getBusinessListing = () => dispatch => {
	console.log('this is inside axios get business listing ');

	axios
		.get('http://dev.infoware.xyz:8080/api/business/listing', configuser)
		.then(res => {
			dispatch({
				type: GET_BUSINESS_DATA,
				payload: res.data.response,
			});
			console.log(res);
			dispatch(setLoading(true));
		})
		.catch(err => console.log(err));
};

export const getcarsaleListing = () => dispatch => {
	// var data = new URLSearchParams();
	console.log('this is inside axios cardealer', data);

	axios
		.get('http://dev.infoware.xyz:8080/api/carSale/listing', config)
		.then(res => {
			dispatch({
				type: GET_CAR_SALE_DATA,
				payload: res,
			});
			console.log(res);
			dispatch(setLoading(true));
		})
		.catch(err => console.log(err));
};

export const getCarRentListing = () => dispatch => {
	axios
		.get('http://dev.infoware.xyz:8080/api/carRent/listing', config)
		.then(res => {
			dispatch({
				type: GET_CAR_RENT_DATA,
				payload: res,
			});
			console.log(res);
			dispatch(setLoading(true));
		})
		.catch(err => console.log(err));
};

export const SparePartsGetList = () => dispatch => {
	console.log('this is inside axios');

	axios
		.get('http://dev.infoware.xyz:8080/api/spareParts/listing', config)
		.then(res => {
			dispatch({
				type: GET_SPARE_PART_DATA,
				payload: res,
			});
			console.log(res);
			dispatch(setLoading(true));
		})
		.catch(err => console.log(err));
};

export const getTaxiData = () => dispatch => {
	console.log('this is inside axios  taxi');

	axios
		.get(
			'http://dev.infoware.xyz:8080/api/taxiOwner/listing',

			config
		)
		.then(res => {
			dispatch({
				type: GET_TAXI_DATA,
				payload: res,
			});
			console.log(res);
			dispatch(setLoading(true));
		})
		.catch(err => console.log(err));
};

// CATEGORY LIST
export const getCategory = data => dispatch => {
	dispatch(setLoading(true));
	axios
		.post(Constant.getAPI() + '/category/get', config)
		.then(res => {
			console.log(res.data);
			dispatch({
				type: GET_CATEGORY,
				payload: res.data,
			});
			console.log(res);
			dispatch(setLoading(false));
		})
		.catch(err => console.log(err));
};

// ADD CATEGORY
export const addCategory = data => dispatch => {
	dispatch(setLoading(true));
	axios
		.post(Constant.getAPI() + '/category/add', data, config)
		.then(res => {
			console.log(res);
			Swal.fire({
				title: 'Category added',
				icon: '',
				imageUrl: './assets/images/test.png',
				imageHeight: 100,
				text: '',
				type: 'success',
				confirmButtonColor: '#3ab1f7',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
			window.location.href = '#/category';
			dispatch(getCategory());
		})
		.catch(err => console.log(err));
};

//DELETE CATEGORY
export const deleteCategory = data => dispatch => {
	//console.log(data)

	Swal.fire({
		title: 'Are you sure?',
		text: 'You will not be able to recover this !',
		type: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: 'No, keep it',
	}).then(isConfirm => {
		if (isConfirm.value) {
			axios
				.post(Constant.getAPI() + '/category/delete', data, config)
				.then(res => {
					Swal.fire({
						title: 'Deleted!',
						text: 'You will not be able to recover this !',
						imageUrl: './assets/images/test.png',
						imageHeight: 100,
						type: 'warning',
					});
					window.location.reload();
					dispatch(getCategory());
				})
				.catch(err => console.log(err));
		}
	});
};

//update category
export const updateCategory = data => dispatch => {
	console.log(data);
	axios

		.post(Constant.getAPI() + `/category/edit`, data, config)
		.then(res => {
			console.log(res.data);
			Swal.fire({
				title: 'Category Updated',
				icon: '',
				imageUrl: './assets/images/test.png',
				imageHeight: 100,
				text: '',
				type: 'success',
				confirmButtonColor: '#3ab1f7',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
			dispatch(getCategory());
			window.location.href = '#/category';
		})
		.catch(err => console.log(err));
};

// COUNTRY LIST
export const getCountry = data => dispatch => {
	dispatch(setLoading(true));

	axios
		.get('http://dev.infoware.xyz:8080/api/user', config)
		.then(res => {
			dispatch({
				type: GET_COUNTRY,
				payload: res,
			});
			console.log(res);
			dispatch(setLoading(false));
		})
		.catch(err => console.log(err));
};
//ADD COUNTRY
export const addCountry = data => dispatch => {
	console.log(config);
	axios
		.post(Constant.getAPI() + `/country/add`, data.payload, config)
		.then(res => {
			console.log(res);
			Swal.fire({
				title: 'Country added',
				icon: '',
				imageUrl: './assets/images/test.png',
				imageHeight: 100,
				text: '',
				type: 'success',
				confirmButtonColor: '#3ab1f7',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
			dispatch(getCountry());
			window.location.href = '#/country';
		})
		.catch(err => console.log(err));
};
//UPDATE COUNTRY
export const updateCountry = data => dispatch => {
	console.log(data);
	axios

		.post(Constant.getAPI() + `/country/edit`, data, config)
		.then(res => {
			console.log(res.data);
			Swal.fire({
				title: 'Country Updated',
				icon: '',
				imageUrl: './assets/images/test.png',
				imageHeight: 100,
				text: '',
				type: 'success',
				confirmButtonColor: '#3ab1f7',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
			dispatch(getCountry());
			window.location.href = '#/country';
		})
		.catch(err => console.log(err));
};

//COUNTRY DELETE
export const deleteCountry = data => dispatch => {
	//console.log(data)

	Swal.fire({
		title: 'Are you sure?',
		text: 'You will not be able to recover this !',
		imageUrl: './assets/images/test.png',
		imageHeight: 100,
		type: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: 'No, keep it',
	}).then(isConfirm => {
		if (isConfirm.value) {
			axios
				.post(Constant.getAPI() + '/country/delete', data, config)
				.then(res => {
					Swal.fire({
						title: 'Country Deleted',
						text: 'You will not be able to recover this !',
						type: 'warning',
						imageUrl: './assets/images/test.png',
						imageHeight: 100,
						// showCancelButton: true,
						// confirmButtonText: "Yes, delete it!",
						// cancelButtonText: "No, keep it",
					});
					dispatch(getCountry());
					window.location.href = '#/country';
				})
				.catch(err => console.log(err));
		}
	});
};

// GOVERNORATE LIST
export const getGovernorate = data => dispatch => {
	dispatch(setLoading(true));

	axios
		.post(Constant.getAPI() + '/governorate/get', data, config)
		.then(res => {
			dispatch({
				type: GET_GOVERNORATE,
				payload: res.data.data,
			});
			console.log(res);
			dispatch(setLoading(false));
		})
		.catch(err => console.log(err));
};
// DELETE GOVERNORATE
export const deleteGovernorate = data => dispatch => {
	console.log(data);

	Swal.fire({
		title: 'Are you sure?',
		text: 'You will not be able to recover this !',
		imageUrl: './assets/images/test.png',
		imageHeight: 100,
		type: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: 'No, keep it',
	}).then(Confirm => {
		if (Confirm.value) {
			axios
				.post(Constant.getAPI() + '/governorate/delete', data, config)
				.then(res => {
					Swal.fire({
						title: 'Governorate Deleted',
						imageUrl: './assets/images/test.png',
						imageHeight: 100,
						text: 'You will not be able to recover this !',
						imageUrl: './assets/images/test.png',
						imageHeight: 100,
						type: 'warning',
					});
					dispatch(getGovernorate());
					window.location.href = '#/governorate';
				})
				.catch(err => console.log(err));
		}
	});
};
//ADD GOVERNORATE
export const addGovernorate = data => dispatch => {
	axios
		.post(Constant.getAPI() + '/governorate/add', data, config)
		.then(res => {
			console.log(res);
			Swal.fire({
				title: 'Governorate added',
				type: 'success',
				imageUrl: './assets/images/test.png',
				imageHeight: 100,
				confirmButtonColor: '#3ab1f7',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
			dispatch(getGovernorate());
			window.location.href = '#/governorate';
		})
		.catch(err => console.log(err));
};
//UPDATE GOVERNORATE
export const updateGovernorate = data => dispatch => {
	console.log(data);
	axios
		.post(Constant.getAPI() + '/governorate/edit', data, config)
		.then(res => {
			console.log(res.data);
			Swal.fire({
				title: 'Governorate Updated',
				type: 'success',
				imageUrl: './assets/images/test.png',
				imageHeight: 100,
				confirmButtonColor: '#3ab1f7',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
			dispatch(getGovernorate());
			window.location.href = '#/governorate';
		})
		.catch(err => console.log(err));
};

// AREA LIST
export const getArea = data => dispatch => {
	dispatch(setLoading(true));

	axios
		.post(Constant.getAPI() + '/area/get', data, config)
		.then(res => {
			dispatch({
				type: GET_AREA,
				payload: res.data.data,
			});
			console.log(res);
			dispatch(setLoading(false));
		})
		.catch(err => console.log(err));
};
//DELETE AREA
export const deleteArea = data => dispatch => {
	console.log(data);

	Swal.fire({
		title: 'Are you sure?',
		text: 'You will not be able to recover this !',
		type: 'warning',
		imageUrl: './assets/images/test.png',
		imageHeight: 100,
		showCancelButton: true,
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: 'No, keep it',
	}).then(Confirm => {
		if (Confirm.value) {
			axios
				.post(Constant.getAPI() + '/area/delete', data, config)
				.then(res => {
					Swal.fire({
						title: 'Area Deleted',
						text: 'You will not be able to recover this !',
						type: 'warning',
						imageUrl: './assets/images/test.png',
						imageHeight: 100,
					});
					dispatch(getArea());
					window.location.href = '#/area';
				})
				.catch(err => console.log(err));
		}
	});
};
//UPDATE AREA
export const updateArea = data => dispatch => {
	console.log(data);
	axios
		.post(Constant.getAPI() + '/area/edit', data, config)
		.then(res => {
			console.log(res.data);
			Swal.fire({
				title: 'Area Updated',
				type: 'success',
				imageUrl: './assets/images/test.png',
				imageHeight: 100,
				confirmButtonColor: '#3ab1f7',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
			dispatch(getArea());
			window.location.href = '#area';
		})
		.catch(err => console.log(err));
};

//ADD AREA
export const addArea = data => dispatch => {
	console.log(data);
	axios
		.post(Constant.getAPI() + '/area/add', data, config)
		.then(res => {
			console.log(res);
			Swal.fire({
				title: 'Area added',
				type: 'success',
				imageUrl: './assets/images/test.png',
				imageHeight: 100,
				confirmButtonColor: '#3ab1f7',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
			dispatch(getArea());
			window.location.href = '#/area';
		})
		.catch(err => console.log(err));
};

//ADD TERMS
export const addTerms = data => dispatch => {
	console.log(config);
	axios
		.post(Constant.getAPI() + `/terms/add`, data, config)
		.then(res => {
			console.log(res);
			Swal.fire({
				title: 'Terms added',
				icon: '',
				imageUrl: './assets/images/test.png',
				imageHeight: 100,
				text: '',
				type: 'success',
				confirmButtonColor: '#3ab1f7',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
			dispatch();
			window.location.href = '#/dateblock';
		})
		.catch(err => console.log(err));
};
// GET TERMS
export const getTerms = data => dispatch => {
	dispatch(setLoading(true));

	axios
		.post(Constant.getAPI() + '/terms/get', data)
		.then(res => {
			dispatch({
				type: GET_TERMS,
				payload: res.data.data,
			});
			console.log(res);
			dispatch(setLoading(false));
		})
		.catch(err => console.log(err));
};

export const GetServiceFilter = serviceType => dispatch => {
	console.log('>>>>', serviceType);
	axios

		.get(
			'http://dev.infoware.xyz:8080/api/taxiOwner/listing',
			serviceType,
			config
		)

		.then(res => {
			console.log('heeee<<<<', res);
			dispatch({
				type: GET_SERVICE_FILTER,
				payload: res.data,
			});
			console.log('this is resposne data ', res.data);

			console.log('resposne >>>>>>>>.', res);
		})
		.catch(err => {
			if (err.response) {
				// Request made and server responded
				console.log('this is response err .....', err.response.data);
				console.log(err.response.status);
				console.log(err.response.headers);
			} else if (err.request) {
				console.log('The request was made but no response was received');
				// The request was made but no response was received
				console.log(err.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log(
					'Something happened in setting up the request that triggered an Errord'
				);
				console.log('Error', err.message);
			}
			console.log(err);
		});
};
