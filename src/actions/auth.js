import axios from 'axios';
import Constant from '../Constant';
import Swal from 'sweetalert2';

import { GET_CATEGORY, SET_LOADING } from './types';

var config = {
	headers: {
		Authorization: `${localStorage.getItem('loged_In_auth')}`,
	},
};
export const setLoading = data => dispatch => {
	dispatch({
		type: SET_LOADING,
		payload: data,
	});
};

// CATEGORY LIST
export const getCategory = data => dispatch => {
	dispatch(setLoading(true));
	console.log(config);
	axios
		.get(Constant.getAPI() + '/category/get')
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
	console.log(data);
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
