import React from 'react';
import { Link } from 'react-router-dom';
import $, { data } from 'jquery';
import Swal from 'sweetalert2';
import MUIDataTable from 'mui-datatables';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { connect } from 'react-redux';
import {GetServiceFilter } from '../../actions/homeAction';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import { getTaxiData,SparePartsGetList,getcardealerListing,getcarsaleListing , getCarRentListing ,getGarageData } from '../../actions/homeAction';
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
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
import {GET_SERVICE_FILTER,
} from '../../actions/types';

class ProductList extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {};
	// }
	state = {
		List: {},
// value:'',
		// search: '',
		// service_type: '',
		serviceFilter: {},
	
	};
	componentWillReceiveProps(nextProps) {
		// console.log('i am next props', nextProps);
		// nextProps.SparePartsGetList()
		// nextProps.getCarRentListin()
		// 	nextProps.getTaxiData()
		// 	nextProps.getcardealerListing()
		// 	nextProps.getcarsaleListing()
		
	this.setState({
            home: nextProps.home,            
        });
	}
      
	componentDidMount() {
		// console.log('fksdhfaklsdj>>>>>',this.props.home.taxiList)
		this.props.getGarageData()
		this.props.getTaxiData()
	
		// if (this.Props.SparePartsGetList() === undefined)
		// {
			// this.Props.SparePartsGetList()
		// }
		
		// this.Props.getCarRentListin()
		
			// this.Props.getcardealerListing()
			// this.Props.getcarsaleListing()
		
		}

	handleServiceChange = data => {
		this.setState({ serviceFilter: data });
		console.log('hendler >>>>>>', data)
		console.log(this.state.serviceFilter)
		
		console.log(  this.state.serviceFilter)
  };



	
	
	onGo = () => {
		
		// var service_type = this.state.service_type;
		var serviceType = this.state.serviceFilter !== 'All' ? this.state.serviceFilter : '';
		// this.getOrderList(data,)
		console.log(serviceType)
		if (this.props.match.params.type === 'Garage')
		{
			this.props.GetServiceFilter(serviceType)
		} else if (this.props.match.params.type === 'SpareParts')
		{
			this.props.GetServiceFilter(serviceType)
		} else if (this.props.match.params.type === 'CarDealers')
		{
			this.props.GetServiceFilter(serviceType)
		} else if (this.props.match.params.type === 'CarForSale')
		{
			this.props.GetServiceFilter(serviceType)
		} else if (this.props.match.params.type === 'RentCar')
		{
			this.props.GetServiceFilter(serviceType)
		} else if (this.props.match.params.type === 'Taxi')
		{
			this.props.GetServiceFilter(serviceType)
		} else if (this.props.match.params.type === 'CarWash')
		{
			this.props.GetServiceFilter(serviceType)
		} else if (this.props.match.params.type === 'CarTowing')
		{
			this.props.GetServiceFilter(serviceType)
		} else if (this.props.match.params.type === 'CarInsurance')
		{
			this.props.GetServiceFilter(serviceType)
		}
		else if (this.props.match.params.type === 'DrivingSchool')
		{
			this.props.GetServiceFilter(serviceType)
		}

		
		else if (this.props.match.params.type === 'CarProtection')
		{
			this.props.GetServiceFilter(serviceType)
		}
	 
		else if (this.props.match.params.type === 'CarConditioning')
		{
			this.props.GetServiceFilter(serviceType)
		}
		else if (this.props.match.params.type === 'QuickService')
		{
			this.props.GetServiceFilter(serviceType)
		}



		else if (this.props.match.params.type === 'CarsAgent')
		{
			this.props.GetServiceFilter(serviceType)
		}
 }
	
//   filterFunction = (people) => {
//   return people.name.toUpperCase().indexOf(this.state.search.toUpperCase()) > -1
// }


	
	
	// handleStatusChange = sid => {
	// 	var isChecked = $('#cattogBtn_' + sid);
	// 	isChecked.prop('checked', !isChecked.prop('checked'));
	// 	console.log(isChecked.prop('checked'), !isChecked.prop('checked'));
	// 	if (!isChecked.prop('checked') === true) {
	// 		var status = 'active';
	// 	} else {
	// 		var status = 'inactive';
	// 	}
	// 	let newArray = this.state.user_list;
	// 	var a = newArray.find(element => {
	// 		return element.id === sid;
	// 	});
	// 	a.status = status;
	// 	console.log(newArray);
	// 	this.setState({ user_list: newArray });
	// 	Swal.fire('Update Status!', 'Status has been updated.', 'success');
	// };


	//  function onGo(data) {
	// 	 const columns = data[0] && object.keys(data[0]);
	// 	 return data.filter((raw) =>
	// 		 columns.some((colunm) =>raw[column].toString().toLoWerCase().indexOf(q)>-1
				 
	// 		 )
	// 	 )
	//  }
	getMuiTheme = () =>
	  createMuiTheme({
	    overrides: {
	      MUIDataTable: {
	        responsiveStacked: {
	          maxHeight: '35vh',
	          overflowX:'none'
	        },
	      },
	      MUIDataTableHeadCell: {
	        root: {
	          width: "80px", 
	          fontWeight: "bold",
	          padding: "5px",
	          lineHeight:'10px',
	          whiteSpace: "normal",
	          overflow: "hidden",
	//           wordWrap: "break-word",
	          fontSize: "10px",
	      },
	      },
	      MUIDataTableBodyCell: {
	        root: {
	          width: "80px",
	          fontSize:'9px',
	          // border:'1px solid black',
	          padding:'5px',
	          whiteSpace: "normal",
	          wordWrap: "break-word",
	        },
	      },
	    },
	  });

	componentDidUpdate(prevProps) {


		if (prevProps.location.pathname !== this.props.location.pathname) {
			if (this.props.match.params.type === 'Garage') {
				console.log('under garage');
				 this.props.getGarageData();
				if (this.props.home.garageList=== undefined)
				{
					console.log('under  Garage', this.props.home.garageList);
					this.props.getGarageData();
					let list = this.props.home.garageList.data.response.data;
					this.setState({
						list,
					});
				}
				else
				{
					console.log('under  Garage4', this.props.home.garageList);
				
					var list = this.props.home.garageList.data.response.data;
					// let servicefilter = this.props.home.getServiceFilterList.data.response.data;
					// console.log('filter seectin ', this.props.home.getServiceFilterList);
					// if (this.props.home.getServiceFilterList === undefined)
					// {
						this.setState({
					
							list,
					   });
					// }
					
					// else
					// {
					// 	console.log('in the service filter section ',servicefilter)
					// 	this.setState({servicefilter})
					// }
					
				}
				
				
			} else if (this.props.match.params.type === 'SpareParts')

			{
				this.props.SparePartsGetList()
				
				// console.log('this is getall data section ', this.props.SparePartsGetList());

				if (this.props.home.sparePartList === undefined)
				
				{
					// console.log(this.props.home)
					console.log('SpareParts', this.props.home.sparePartList);
					this.setState({
					
					});
				}
				else{
				
			let list = this.props.home.sparePartList.data.response.data;
				console.log('under 22 spar',this.props.home.sparePartList.data.response.data);
				this.setState({
					list,
				});
					
				}
				
			
			} else if (this.props.match.params.type === 'CarDealers')
			{
				
				this.props.getcardealerListing()
				
				

				if (this.props.home.cardealerList === undefined)
{
					// console.log(this.props.home)
					console.log('cardealer', this.props.home.cardealerList);
					this.setState({
					
					});
				}
				else
				{

						let list = this.props.home.cardealerList.data.response.data;
						this.setState({
						list
					}) 
				
					// let list = this.props.home.cardealerList.data.response.data;
					console.log('under 22 cardeaker', this.props.home.cardealerList.data.response.data);
					// this.setState({
					// 	list:list,
					// });
				}

			
			} else if (this.props.match.params.type === 'CarForSale') {

				this.props.getcarsaleListing()
				
				if (this.props.home.carsaleList === undefined)
				
				{
					// console.log(this.props.home)
					console.log('SpareParts', this.props.home.carsaleList);
					this.setState({
					
					});
				}
				else{
				
			let list = this.props.home.carsaleList.data.response.data;
				console.log('under 22 spar',this.props.home.carsaleList.data.response.data);
				this.setState({
					list,
				});
					
				}



			} else if (this.props.match.params.type === 'RentCar')
			{
				this.props.getCarRentListing()
					
				// console.log(this.props.home.carRentList)
				
				

				if (this.props.home.carRentList === undefined)
{
					// console.log(this.props.home)
					console.log('taxi list empty', this.props.home.carRentList);
					this.setState({
					
					});
				}
				else
				{
				
					let list = this.props.home.carRentList.data.response.data;
					console.log('car rent  list ', this.props.home.carRentList.data.response.data);
					this.setState({
						list,
					});
				}
			
			
			}
			else if (this.props.match.params.type === 'CarWash')
			{
				this.setState({
					user_list: [
						{
							BusinessName: 'Car',
							ServiceType: 'CarWash',
							BusinessLogo: 'logo imag',
							PhoneNumber: '8475834',
							WhatsappNumber: '8349752983',
							BusinessCategory: 'CarWash',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
						{
							BusinessName: 'Car',
							ServiceType: 'CarWash',
							BusinessLogo: 'logo imag',
							PhoneNumber: '73489529',
							WhatsappNumber: '85729848592',
							BusinessCategory: 'CarWash',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
					],
				});
			} else if (this.props.match.params.type === 'Taxi')
		

			{
				
				this.props.getTaxiData()
				
				

				if (this.props.home.taxiList === undefined)
{
					// console.log(this.props.home)
					console.log('taxi list empty', this.props.home.taxiList);
					this.setState({
					
					});
				}
				else
				{
				
					let list = this.props.home.taxiList.data.response.data;
					console.log('taxi list ', this.props.home.taxiList.data.response.data);
					this.setState({
						list,
					});
				}
				
			} else if (this.props.match.params.type === 'CarTowing') {
				this.setState({
					user_list: [
						{
							BusinessName: 'Car',
							ServiceType: 'SpareParts',
							BusinessLogo: 'logo imag',
							PhoneNumber: '8475834',
							WhatsappNumber: '8349752983',
							BusinessCategory: 'Garages',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
							Name: 'Car',
							CarBrand: 'Audi',
							CarModel: 'Model ',
							PlateNumber: 'GL4398JDSK',
						},
						{
							BusinessName: 'Car',
							ServiceType: 'Spare Part',
							BusinessLogo: 'logo imag',
							PhoneNumber: '73489529',
							WhatsappNumber: '85729848592',
							BusinessCategory: 'Spare Part',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
							Name: 'Car',
							CarBrand: 'Ford',
							CarModel: 'Model ',
							PlateNumber: 'GK9494SL',
						},
					],
				});
			} else if (this.props.match.params.type === 'CarInsurance') {
				this.setState({
					user_list: [
						{
							BusinessName: 'Car',
							ServiceType: 'CarInsurance',
							BusinessLogo: 'logo imag',
							PhoneNumber: '8475834',
							WhatsappNumber: '8349752983',
							BusinessCategory: 'Insurance',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
						{
							BusinessName: 'Car',
							ServiceType: 'CarInsurance',
							BusinessLogo: 'logo imag',
							PhoneNumber: '73489529',
							WhatsappNumber: '85729848592',
							BusinessCategory: 'Insurance',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
					],
				});
			} else if (this.props.match.params.type === 'DrivingSchool') {
				this.setState({
					user_list: [
						{
							BusinessName: 'Car',
							ServiceType: 'DrivingSchool',
							BusinessLogo: 'logo imag',
							PhoneNumber: '8475834',
							WhatsappNumber: '8349752983',
							BusinessCategory: 'DrivingSchool',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
						{
							BusinessName: 'Car',
							ServiceType: 'DrivingSchool',
							BusinessLogo: 'logo imag',
							PhoneNumber: '73489529',
							WhatsappNumber: '85729848592',
							BusinessCategory: 'DrivingSchool',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
					],
				});
			} else if (this.props.match.params.type === 'CarProtection') {
				this.setState({
					user_list: [
						{
							BusinessName: 'Car',
							ServiceType: 'CarProtection',
							BusinessLogo: 'logo imag',
							PhoneNumber: '8475834',
							WhatsappNumber: '8349752983',
							BusinessCategory: 'Protection',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
						{
							BusinessName: 'Car',
							ServiceType: 'CarProtection',
							BusinessLogo: 'logo imag',
							PhoneNumber: '73489529',
							WhatsappNumber: '85729848592',
							BusinessCategory: 'Protection',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
					],
				});
			} else if (this.props.match.params.type === 'CarConditioning') {
				this.setState({
					user_list: [
						{
							BusinessName: 'Car',
							ServiceType: 'CarConditioning',
							BusinessLogo: 'logo imag',
							PhoneNumber: '8475834',
							WhatsappNumber: '8349752983',
							BusinessCategory: 'Conditioning',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
						{
							BusinessName: 'Car',
							ServiceType: 'CarConditioning',
							BusinessLogo: 'logo imag',
							PhoneNumber: '73489529',
							WhatsappNumber: '85729848592',
							BusinessCategory: 'Conditioning',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
					],
				});
			} else if (this.props.match.params.type === 'QuickService') {
				this.setState({
					user_list: [
						{
							BusinessName: 'Car',
							ServiceType: 'QuickService',
							BusinessLogo: 'logo imag',
							PhoneNumber: '8475834',
							WhatsappNumber: '8349752983',
							BusinessCategory: 'Service',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
						{
							BusinessName: 'Car',
							ServiceType: 'QuickService',
							BusinessLogo: 'logo imag',
							PhoneNumber: '73489529',
							WhatsappNumber: '85729848592',
							BusinessCategory: 'Service',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
					],
				});
			} else if (this.props.match.params.type === 'CarsAgent') {
				this.setState({
					user_list: [
						{
							BusinessName: 'Car',
							ServiceType: 'CarsAgent',
							BusinessLogo: 'logo imag',
							PhoneNumber: '8475834',
							WhatsappNumber: '8349752983',
							BusinessCategory: 'CarsAgent',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
						{
							BusinessName: 'Car',
							ServiceType: 'CarsAgent',
							BusinessLogo: 'logo imag',
							PhoneNumber: '73489529',
							WhatsappNumber: '85729848592',
							BusinessCategory: 'Service',
							AboutCompany: '',
							SelectLocationMap: 'on location',
							Website: 'www.CarAenue.com',
							Facebook: 'facebook@',
							Instagram: 'instagram@',
							Twitter: 'twitter@',
							Youtube: 'youtube@',
							SundayFromto: '10AM-6PM',
							MondayFromto: '10AM-6PM',
						},
					],
				});
			} else if (this.props.match.params.type) {
				this.setState({
					user_list: [{}],
				});
			}
		}
	}
	
	
		

// this.props.getTaxiData();

			// user_list: [
			// 	{
			// 		BusinessName: 'Car',
			// 		ServiceType: 'Garages',
			// 		BusinessLogo: 'logo imag',
			// 		PhoneNumber: '8475834',
			// 		WhatsappNumber: '8349752983',
			// 		BusinessCategory: 'Garages',
			// 		AboutCompany: '',
			// 		SelectLocationMap: 'on location',
			// 		Website: 'www.CarAenue.com',
			// 		Facebook: 'facebook@',
			// 		Instagram: 'instagram@',
			// 		Twitter: 'twitter@',
			// 		Youtube: 'youtube@',
			// 		SundayFromto: '10AM-6PM',
			// 		MondayFromto: '10AM-6PM',
			// 	},
			// 	{
			// 		BusinessName: 'Car',
			// 		ServiceType: 'Spare Part',
			// 		BusinessLogo: 'logo imag',
			// 		PhoneNumber: '73489529',
			// 		WhatsappNumber: '85729848592',
			// 		BusinessCategory: 'Spare Part',
			// 		AboutCompany: '',
			// 		SelectLocationMap: 'on location',
			// 		Website: 'www.CarAenue.com',
			// 		Facebook: 'facebook@',
			// 		Instagram: 'instagram@',
			// 		Twitter: 'twitter@',
			// 		Youtube: 'youtube@',
			// 		SundayFromto: '10AM-6PM',
			// 		MondayFromto: '10AM-6PM',
			// 	},
	// 		// ],
	// 	});

	// 	// this.props.getallData();
	// }

	render() {
		var paths = this.props.match.params.type;
		let columns = [];
		// Service Providers-> Garages/Spare Parts/Car Dealers/Car Rentals/Car Wash/Car Insurance/Car Protection/Air Conditioning/ Quick Service
		if (
			paths === 'Garage' ||
			this.props.match.params.type === 'SpareParts' ||
			this.props.match.params.type === 'CarDealers' ||
			this.props.match.params.type === 'RentCar' ||
			this.props.match.params.type === 'CarWash' ||
			this.props.match.params.type === 'CarInsurance' ||
			this.props.match.params.type === 'CarProtection' ||
			this.props.match.params.type === 'CarConditioning' ||
			this.props.match.params.type === 'QuickService'
		)
		{
			columns = [
				// {
				// 	name: 'Medium',
				// 	label: 'dssd',
				// 	options: {
				// 		filter: false,
				// 		sort: false,
				// 		customBodyRender: (Medium, tableMeta) => {
				// 			return (
				// 				<img
				// 					src={
				// 						Medium !== undefined && Medium !== null && Medium !== {}
				// 							? Medium.url !== undefined &&
				// 							  Medium.url !== null &&
				// 							  Medium.url !== ''
				// 								? Medium.url
				// 								: './assets/images/icon.png'
				// 							: './assets/images/icon.png'
				// 					}
				// 					className='img-fluid img-20'
				// 					alt=''
				// 					onError={this.imgLoadError}
				// 				/>
				// 			);
				// 		},
				// 	},
				// },
				
				{
					name: 'garageName',
					label: 'Business Name',

					options: {
						filter: false,
						sort: true,
						display: (this.props.match.params.type === 'Garage') ? 'true' : 'excluded',
						
					},
				},


				{
					name: 'carRentName',
					label: 'Business Name',

					options: {
						filter: false,
						sort: true,
						display: (this.props.match.params.type === 'RentCar') ? 'true' : 'excluded',
						
					},
				},
				{
					name: 'sparePartOwnerName',
					label: 'Business Name',

					options: {
						filter: false,
						sort: true,
						display: (this.props.match.params.type === 'SpareParts') ? 'true' : 'excluded',
						
					},
				},
				
				{
					name: 'carDealerName',
					label: 'Business Name',

					options: {
						filter: false,
						sort: true,
						display: (this.props.match.params.type === 'CarDealers') ? 'true' : 'excluded',
						
					},
				},
				{
					name: 'ServiceType',
					label: 'Service Type',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessLogo',
					label: 'Business Logo',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'mobileNumber',
					label: 'Phone Number',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'whatsAppNumber',
					label: 'Whatsapp Number',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'category',
					label: 'Business Category',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'about',
					label: 'About the Company',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'location',
					label: 'Select Location on Map',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'website',
					label: 'Website',
					options: {
						filter: false,
						sort: true,
					},
				},
				// {
				// 	name: 'FACEBOOK',

				// 	label: 'Facebook',
				// 	options: {
				// 		filter: false,
				// 		sort: true,
				// 	},
				// },

				{
					name: "socialMedia",
					label: "facebook",
					options: {
						filter: true,
						sort: true,
						customBodyRender: (socialMedia, tableMeta) => {
			   
							return <div>
								{
									(socialMedia=== undefined || socialMedia.FACEBOOK == null) ?
								
									
										"":	socialMedia.FACEBOOK 
								
								}
							</div>
							
						}
					}
				},
				{
					name: 'socialMedia',
					label: 'Instagram',
					options: {
						filter: false,
						sort: true,
						customBodyRender: (socialMedia, tableMeta) => {
			   
							return (<div>
								{

									(socialMedia=== undefined || socialMedia.INSTAGRAM == null) ?
								
									
										"":	socialMedia.INSTAGRAM 



								
								}
		 
							</div>
							)
						}
					}
				},
				{
					name: 'socialMedia',
					label: 'Twitter',
					options: {
						filter: false,
						sort: true,
						customBodyRender: (socialMedia, tableMeta) => {
			   
							return (<div>
								{
									(socialMedia=== undefined || socialMedia.TWITTER == null) ?
								
									
										"":	socialMedia.TWITTER
									
									
								
								
								}
		 
							</div>
							)
						}
					}
				}, {
					name: 'socialMedia',
					label: 'Youtube',
					options: {
						filter: false,
						sort: true,
						customBodyRender: (socialMedia, tableMeta) => {
			   
							return (<div>
								{

									(socialMedia=== undefined || 	socialMedia.YOUTUBE == null) ?
								
									
								"":		socialMedia.YOUTUBE
							
								
								
								
								}
		 
							</div>
							)
						}
					}
				}, {
					name: 'socialMedia',
					label: 'Linkedin',
					options: {
						filter: false,
						sort: true,
						customBodyRender: (socialMedia, tableMeta) => {
			   
							return (<div>
								{
									
									(socialMedia=== undefined || 		socialMedia.LINKEDIN == null) ?
								
									
								"":			socialMedia.LINKEDIN
									
								
								
								}
		 
							</div>
							)
						}
					}
				}, {
					name: 'Snapchat',
					label: 'Snapchat',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Go',
					label: 'G+',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessPackage',
					label: 'Business Package',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'Brand',
					label: 'Brand',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'SundayFromto',
					label: 'Sunday From to',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'MondayFromto',
					label: 'MondayFromto',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'TuesdayFromTo',
					label: 'Tuesday From To',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'WednesdayFromTo',
					label: 'Wednesday From To',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'ThursdayFromTO',
					label: 'Thursday From TO',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'FridayFromTo',
					label: 'Friday From To',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'SaturdayfromTo',
					label: 'Saturday from To',
					options: {
						filter: false,
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
			];



		}	else if (	paths === 'SpareParts')
			{
				columns = [
					// {
					// 	name: 'Medium',
					// 	label: 'dssd',
					// 	options: {
					// 		filter: false,
					// 		sort: false,
					// 		customBodyRender: (Medium, tableMeta) => {
					// 			return (
					// 				<img
					// 					src={
					// 						Medium !== undefined && Medium !== null && Medium !== {}
					// 							? Medium.url !== undefined &&
					// 							  Medium.url !== null &&
					// 							  Medium.url !== ''
					// 								? Medium.url
					// 								: './assets/images/icon.png'
					// 							: './assets/images/icon.png'
					// 					}
					// 					className='img-fluid img-20'
					// 					alt=''
					// 					onError={this.imgLoadError}
					// 				/>
					// 			);
					// 		},
					// 	},
					// },
					{
						name: 'garageName',
						label: 'Business Name',
	
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'ServiceType',
						label: 'Service Type',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'BusinessLogo',
						label: 'Business Logo',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'mobileNumber',
						label: 'Phone Number',
						options: {
							filter: false,
							sort: true,
						},
					},
	
					{
						name: 'whatsAppNumber',
						label: 'Whatsapp Number',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'category',
						label: 'Business Category',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'about',
						label: 'About the Company',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'location',
						label: 'Select Location on Map',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'website',
						label: 'Website',
						options: {
							filter: false,
							sort: true,
						},
					},
					// {
					// 	name: 'FACEBOOK',
	
					// 	label: 'Facebook',
					// 	options: {
					// 		filter: false,
					// 		sort: true,
					// 	},
					// },
	
					{
						name: "socialMedia",
						label: "facebook",
						options: {
							filter: true,
							sort: true,
							customBodyRender: (socialMedia, tableMeta) => {
				   
								return (<div>
									{socialMedia.FACEBOOK}
			
								</div>
								)
							}
						}
					},
					{
						name: 'socialMedia',
						label: 'Instagram',
						options: {
							filter: false,
							sort: true,
							customBodyRender: (socialMedia, tableMeta) => {
				   
								return (<div>
									{socialMedia.INSTAGRAM}
			 
								</div>
								)
							}
						}
					},
					{
						name: 'socialMedia',
						label: 'Twitter',
						options: {
							filter: false,
							sort: true,
							customBodyRender: (socialMedia, tableMeta) => {
				   
								return (<div>
									{socialMedia.TWITTER}
			 
								</div>
								)
							}
						}
					}, {
						name: 'socialMedia',
						label: 'Youtube',
						options: {
							filter: false,
							sort: true,
							customBodyRender: (socialMedia, tableMeta) => {
				   
								return (<div>
									{socialMedia.YOUTUBE}
			 
								</div>
								)
							}
						}
					}, {
						name: 'socialMedia',
						label: 'Linkedin',
						options: {
							filter: false,
							sort: true,
							customBodyRender: (socialMedia, tableMeta) => {
				   
								return (<div>
									{socialMedia.LINKEDIN}
			 
								</div>
								)
							}
						}
					}, {
						name: 'Snapchat',
						label: 'Snapchat',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'Go',
						label: 'G+',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'BusinessPackage',
						label: 'Business Package',
						options: {
							filter: false,
							sort: true,
						},
					},
	
					{
						name: 'Brand',
						label: 'Brand',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'SundayFromto',
						label: 'Sunday From to',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'MondayFromto',
						label: 'MondayFromto',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'TuesdayFromTo',
						label: 'Tuesday From To',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'WednesdayFromTo',
						label: 'Wednesday From To',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'ThursdayFromTO',
						label: 'Thursday From TO',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'FridayFromTo',
						label: 'Friday From To',
						options: {
							filter: false,
							sort: true,
						},
					},
					{
						name: 'SaturdayfromTo',
						label: 'Saturday from To',
						options: {
							filter: false,
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
				];
	
	
			}

			// Service Providers-> Cars For Sale
	 else if (this.props.match.params.type === 'CarForSale') {
			columns = [
				{
					name: 'carBrand',
					label: 'Car Brand',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'carModel',
					label: 'Car Model and Series',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessLogo',
					label: 'Car Images',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'description',
					label: 'Car Description',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'mobileNumber',
					label: 'Phone Number',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'whatsAppNumber',
					label: 'Whatsapp Number',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'cyclinder',
					label: 'Cylinder',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'kilometerDriven',
					label: 'Kilometer Driven',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'modelYear',
					label: 'Model Year',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'fuelType',
					label: 'Fuel Type',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'doors',
					label: 'Doors',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'seats',
					label: 'Seats',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'interiorColor',
					label: 'Interior Color',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'safety',
					label: 'Safety and Security',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'comfort',
					label: 'Comfort and Convenience',
					options: {
						filter: false,
						sort: true,
					},
				},
			];
		}

		// Service Providers-> Taxi/Car Towing
		else if (
			this.props.match.params.type === 'CarTowing' ||
			this.props.match.params.type === 'Taxi'
		) {
			columns = [
				{
					name: 'carName',
					label: 'Name',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'CarBrand',
					label: 'Car Brand',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'CarModel',
					label: 'Car Model',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'plateNumber',
					label: 'Plate Number',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'mobileNumber',
					label: 'Phone Number',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'WhatsappNumber',
					label: 'Whatsapp Number',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'ProfilePhoto',
					label: 'Profile Photo',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'LicensePhoto',
					label: 'License Photo',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'CarImage',
					label: 'Car Image',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessPackage',
					label: 'Business Package',
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

			// Service Providers-> Driving School
		} else if (this.props.match.params.type === 'DrivingSchool') {
			columns = [
				{
					name: 'BusinessName',
					label: 'Business Name',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'ServiceType',
					label: 'Service Type',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessLogo',
					label: 'Business Logo',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'PhoneNumber',
					label: 'Phone Number',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'WhatsappNumber',
					label: 'Whatsapp Number',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessCategory',
					label: 'Business Category',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'AboutCompany',
					label: 'About the Company',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'SelectLocationMap',
					label: 'Select Location on Map',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Gender',
					label: 'Male/Female/Both',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Website',
					label: 'Website',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'Facebook',
					label: 'Facebook',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Instagram',
					label: 'Instagram',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Twitter',
					label: 'Twitter',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Youtube',
					label: 'Youtube',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Linkedin',
					label: 'Linkedin',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Snapchat',
					label: 'Snapchat',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Go',
					label: 'G+',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessPackage',
					label: 'Business Package',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'ServiceType',
					label: 'Service Type',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'Brand',
					label: 'Brand',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'SundayFromto',
					label: 'Sunday From to',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'MondayFromto',
					label: 'MondayFromto',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'TuesdayFromTo',
					label: 'Tuesday From To',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'WednesdayFromTo',
					label: 'Wednesday From To',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'ThursdayFromTO',
					label: 'Thursday From TO',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'FridayFromTo',
					label: 'Friday From To',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'SaturdayfromTo',
					label: 'Saturday from To',
					options: {
						filter: false,
						sort: true,
					},
				},
			];
		}

		// Service Providers-> Car Agents
		else if (this.props.match.params.type === 'CarsAgent') {
			columns = [
				{
					name: 'BusinessName',
					label: 'Business Name',
					options: {
						filter: true,
						sort: true,
					},
				},
				{
					name: 'ServiceType',
					label: 'Service Type',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessLogo',
					label: 'Business Logo',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'PhoneNumber',
					label: 'Phone Number',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'WhatsappNumber',
					label: 'Whatsapp Number',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessCategory',
					label: 'Business Category',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'AboutCompany',
					label: 'About the Company',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'SelectLocationMap',
					label: 'Select Location on Map',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'Website',
					label: 'Website',
					options: {
						filter: false,
						sort: true,
					},
				},

				{
					name: 'Website',
					label: 'Facebook',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Instagram',
					label: 'Instagram',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Twitter',
					label: 'Twitter',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Youtube',
					label: 'Youtube',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Linkedin',
					label: 'Linkedin',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Snapchat',
					label: 'Snapchat',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'Go',
					label: 'G+',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'BusinessPackage',
					label: 'Business Package',
					options: {
						filter: false,
						sort: true,
					},
				},
				{
					name: 'id',
					label: 'Manage Categories',
					options: {
						filter: true,
						sort: true,
						customBodyRender: (id, tableMeta) => {
							return (
								<div>
									<Link
										to={'/ServiceProviders/Agent/ManageCatagory'}
										className='m-r-15 text-muted'
										data-toggle='tooltip'
										data-placement='top'
										title=''
										data-original-title='Edit'>
										<i className='f-20 icofont icofont-ui-edit text-custom'></i>
									</Link>
									{/* <span
										// onClick={this.deleteUser.bind(this, id)}
										className='m-r-15 text-muted'
										data-toggle='tooltip'
										data-placement='top'
										title=''
										data-original-title='Delete'>
										<i className='f-20 icofont icofont-delete-alt text-danger'></i>{' '}
									</span> */}
								</div>
							);
						},
					},
				},

				{
					name: 'id',
					label: 'Manage Cars',
					options: {
						filter: true,
						sort: true,
						customBodyRender: (id, tableMeta) => {
							return (
								<div>
									<Link
										to={'/ServiceProviders/Agent/ManageCars'}
										className='m-r-15 text-muted'
										data-toggle='tooltip'
										data-placement='top'
										title=''
										data-original-title='Edit'>
										<i className='f-20 icofont icofont-ui-edit text-custom'></i>
									</Link>
									{/* <span
										// onClick={this.deleteUser.bind(this, id)}
										className='m-r-15 text-muted'
										data-toggle='tooltip'
										data-placement='top'
										title=''
										data-original-title='Delete'>
										<i className='f-20 icofont icofont-delete-alt text-danger'></i>{' '}
									</span> */}
								</div>
							);
						},
					},
				},
				{
					name: 'id',
					label: 'Manage Showroom',
					options: {
						filter: true,
						sort: true,
						customBodyRender: (id, tableMeta) => {
							return (
								<div>
									<Link
										to={'/ServiceProviders/Agent/ManageShowRoom'}
										className='m-r-15 text-muted'
										data-toggle='tooltip'
										data-placement='top'
										title=''
										data-original-title='Edit'>
										<i className='f-20 icofont icofont-ui-edit text-custom'></i>
									</Link>
									{/* <span
										// onClick={this.deleteUser.bind(this, id)}
										className='m-r-15 text-muted'
										data-toggle='tooltip'
										data-placement='top'
										title=''
										data-original-title='Delete'>
										<i className='f-20 icofont icofont-delete-alt text-danger'></i>{' '}
									</span> */}
								</div>
							);
						},
					},
				},
				{
					name: 'id',
					label: 'Manage Workshop',
					options: {
						filter: true,
						sort: true,
						customBodyRender: (id, tableMeta) => {
							return (
								<div>
									<Link
										to={'/ServiceProviders/Agent/ManageWorkShop'}
										className='m-r-15 text-muted'
										data-toggle='tooltip'
										data-placement='top'
										title=''
										data-original-title='Edit'>
										<i className='f-20 icofont icofont-ui-edit text-custom'></i>
									</Link>
									{/* <span
										// onClick={this.deleteUser.bind(this, id)}
										className='m-r-15 text-muted'
										data-toggle='tooltip'
										data-placement='top'
										title=''
										data-original-title='Delete'>
										<i className='f-20 icofont icofont-delete-alt text-danger'></i>{' '}
									</span> */}
								</div>
							);
						},
					},
				},
			];
		}

		// // Service Providers-> Car Agents-> Manage Categories
		// else if (this.props.match.params.type === 'CarsAgent') {
		// 	columns = [
		// 		{
		// 			name: 'CarBrand',
		// 			label: 'Business Name',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'CarModelSeriese',
		// 			label: 'Service Type',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'BusinessLogo',
		// 			label: 'Business Logo',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},

		// 		{
		// 			name: 'PhoneNumber',
		// 			label: 'Phone Number',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},

		// 		{
		// 			name: 'whatsappnumber',
		// 			label: 'whatsapp number',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'BuninessCotegory',
		// 			label: 'Business Category',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'AboutTheCompany',
		// 			label: 'About the Company',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'SelectLocationMap',
		// 			label: 'Select Location on Map',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},

		// 		{
		// 			name: 'Website',
		// 			label: 'Website',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},

		// 		{
		// 			name: 'Website',
		// 			label: 'Facebook',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'Instagram',
		// 			label: 'Instagram',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'Twitter',
		// 			label: 'Twitter',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'Youtube',
		// 			label: 'Youtube',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'Linkedin',
		// 			label: 'Linkedin',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'Snapchat',
		// 			label: 'Snapchat',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'Go',
		// 			label: 'G+',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'BusinessPackage',
		// 			label: 'Business Package',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'ServiceType',
		// 			label: 'Manage Categories',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},

		// 		{
		// 			name: 'Brand',
		// 			label: 'Manage Cars',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'SundayFromto',
		// 			label: 'Manage Showroom',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 		{
		// 			name: 'MondayFromto',
		// 			label: 'Manage Workshop',
		// 			options: {
		// 				filter: false,
		// 				sort: true,
		// 			},
		// 		},
		// 	];
		// }
		const options = {
			filter: false,
			search: false,
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
					columnHeaderTooltip: column => `Sort for ${columns.label}`,
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

										<div className='row'>
											<div className='col-sm-9'>
												<FormControl
													variant='outlined'
													className='col-sm-2 mx-1'>
													<InputLabel
														htmlFor='outlined-age-native-simple'
														style={{ fontSize: '12px' }}>
														Service Type
													</InputLabel>
													<Select
														search
														native
														name=''
														value={this.state.serviceFilter} onChange={(val)=>this.handleServiceChange(val.target.value)}
														label='Time Peroid'
														className='my-2'
														style={{ height: '30px' }}
														inputProps={{
															name: 'Time Peroid',
															id: 'outlined-age-native-simple',
														}}
													>
														<option  value='false'> </option>
														<option value='garage'>garages</option>
														<option value='Spare Parts'> Spare Parts</option>
														<option value='CarDealers'> CarDealers</option>
														{/* <option value={6}> </option>
														<option value={29}> </option>
														<option value={59}> </option>
														<option value={89}> </option>
														<option value={179}> </option> */}
													</Select>
												</FormControl>

												<FormControl>
													<div
														className='btn btn-dark py-1 mx-3 mt-2'
														onClick={this.onGo}>
														Go
													</div>
												</FormControl>
											</div>
										</div>
										{/* <Link
											to={`/products/${this.props.match.params.type}/add`}
											className='btn btn-sm btn-inverse waves-effect waves-light f-right d-inline-block md-trigger'
											data-modal='modal-13'>
											{' '}
											<i className='icofont icofont-plus m-r-5'></i>
											{`Add ${this.props.match.params.type} `}
										</Link> */}
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
											<MuiThemeProvider theme={this.getMuiTheme()}>
											<MUIDataTable
												title={`${this.props.match.params.type} List`}
													className='table-responsive'
													// data={(this.state.serviceFilter === undefined) ? this.state.list : this.state.serviceFilter}
												data={this.state.list}
												columns={columns}
												options={options}
												/>
												</MuiThemeProvider>
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


ProductList.propsTypes = {
	
	getGarageData: PropTypes.func.isRequired,
	getTaxiData: PropTypes.func.isRequired,
	SparePartsGetList: PropTypes.func.isRequired,
	getcardealerListing: PropTypes.func.isRequired,
	getcarsaleListing: PropTypes.func.isRequired,
	getCarRentListing: PropTypes.func.isRequired,
	GetServiceFilter : PropTypes.func.isRequired,
};

var mapStateToProps = state => {
	return {
		home: state.home,
	};
};

export default connect(mapStateToProps, {
	getGarageData,
	getTaxiData,
	SparePartsGetList,
	getcardealerListing,
	getcarsaleListing,
	getCarRentListing,
	GetServiceFilter
})(ProductList);
