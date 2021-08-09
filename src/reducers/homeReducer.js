/* eslint-disable import/no-anonymous-default-export */
import {
	ADMIN_REGISTER,
	GET_AREA,
	GET_CATEGORY,
	GET_COUNTRY,
	GET_GOVERNORATE,
	SET_USER,
	GET_LANGUAGE_LIST,
	GET_TERMS,
	GET_ALL_USER,
	GET_TAXI_DATA,
	GET_SPARE_PART_DATA,
	GET_CAR_DEALER_DATA,
	GET_CAR_SALE_DATA,
	GET_CAR_RENT_DATA,
	GET_SERVICE_FILTER,
	GET_GARAGE_DATA,
	GET_BUSINESS_DATA,
} from '../actions/types';

var initialState = {};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORY:
			return {
				...state,
				categoryList: action.payload,
			};

		case ADMIN_REGISTER:
			return {
				...state,
				registerList: action.payload,
			};
		case GET_SERVICE_FILTER:
			return {
				...state,
				getServiceFilterList: action.payload,
			};

		case GET_BUSINESS_DATA:
			return {
				...state,
				businessList: action.payload,
			};
		case GET_ALL_USER:
			return {
				...state,
				userList: action.payload,
			};
		case GET_GARAGE_DATA:
			return {
				...state,
				garageList: action.payload,
			};
		case GET_TAXI_DATA:
			return {
				...state,
				taxiList: action.payload,
			};
		case GET_SPARE_PART_DATA:
			return {
				...state,
				sparePartList: action.payload,
			};
		case GET_CAR_DEALER_DATA:
			return {
				...state,
				cardealerList: action.payload,
			};

		case GET_CAR_SALE_DATA:
			return {
				...state,
				carsaleList: action.payload,
			};

		case GET_CAR_RENT_DATA:
			return {
				...state,
				carRentList: action.payload,
			};
		case SET_USER:
			return {
				...state,
				userData: action.payload,
			};
		case GET_COUNTRY:
			return {
				...state,
				country: action.payload,
			};
		case GET_GOVERNORATE:
			return {
				...state,
				governorate: action.payload,
			};
		case GET_AREA:
			return {
				...state,
				area: action.payload,
			};

		case GET_LANGUAGE_LIST:
			return {
				...state,
				languageList: action.payload,
			};

		case GET_TERMS:
			return {
				...state,
				terms: action.payload,
			};

		default:
			return state;
	}
};

export default homeReducer;
