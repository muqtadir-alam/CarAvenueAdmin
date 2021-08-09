import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './common/Login.js';
import Home from './common/Home.js';
import Dashboard from './common/Dashboard.js';
import CountryList from './components/LocationMaster/CountryMaster/CountryList.js';
import GovernorateList from './components/LocationMaster/GovernorateMaster/GovernorateList.js';
import GovernorateAddTab from './components/LocationMaster/GovernorateMaster/GovernorateAddTab.js';
import AreaList from './components/LocationMaster/AreaMaster/AreaList.js';
import AreaAddTab from './components/LocationMaster/AreaMaster/AreaAddTab.js';
import TermsAddTab from './components/Terms/TermsAddTab.js';
import AboutUsAddTab from './components/AboutUs/AboutUsAddTab.js';
import ContactUsList from './components/ContactUs/ContactUsList.js';
import CountryAddTab from './components/LocationMaster/CountryMaster/CountryAddTab.js';
import SellerList from './components/UserMaster/Sellers/SellersList.js';
import SellerAddTab from './components/UserMaster/Sellers/SellersAddTab.js';
import DriverList from './components/UserMaster/Driver/DriverList.js';
import DriverAddTab from './components/UserMaster/Driver/DriverAddTab.js';
import UserList from './components/UserMaster/User/UsersList.js';
import UserAddTab from './components/UserMaster/User/UsersAddTab.js';
import PaymentList from './components/PaymentMaster/PaymentList.js';
import PaymentAddTab from './components/PaymentMaster/PaymentAddTab';
import BusinessList from './components/BusinessTypeMaster/BusinessList.js';
import BusinessAddTab from './components/BusinessTypeMaster/BusinessAddTab.js';
import CouponList from './components/CouponMaster/CouponList.js';
import CouponAddTab from './components/CouponMaster/CouponAddTab.js';
import RoleList from './components/RoleMaster/RoleList.js';
import RoleAddTab from './components/RoleMaster/RoleAddTab.js';
import CategoryList from './components/CategoryMaster/CategoryList.js';
import CategoryAddTab from './components/CategoryMaster/CategoryAddTab.js';
import SellTypeList from './components/SellTypeMaster/SellTypeList.js';
import SellTypeAddTab from './components/SellTypeMaster/SelltypeAddTab.js';
import LanguageList from './components/LanguageMaster/LanguageList.js';
import LanguageAdd from './components/LanguageMaster/LanguageAdd.js';
import DeliveryChargesAddTab from './components/DeliveryCharge/DeliveryChargesAddTab.js';
import DeliveryList from './components/DeliveryCharge/DeliveryList.js';
import DeliveryTimeList from './components/DeliveryTime/DeliveryTimeList.js';
import DeliveryTimeAddTab from './components/DeliveryTime/DeliveryTimeAddTab.js';
import OrderStatusList from './components/OrderStatusMaster/OrderStatusList.js';
import OrderStatusAddTab from './components/OrderStatusMaster/OrderStatusAddTab.js';
import VarientsList from './components/VarientsMaster/VarientsList.js';
import VarientsAddTab from './components/VarientsMaster/VarientsAddTab.js';
import OrderList from './components/OrderMaster/OrderList.js';
import ProductList from './components/ProductMaster/ProductList.js';
import ProductAddTab from './components/ProductMaster/ProductAddTab.js';
import GarageList from './ServiceProviders/Garage/GarageList';
import CountryMaster from './components/CountryMaster/CountryMaster.js';
import BusinessCategoryMaster from './components/CountryMaster/BusinessCategoryMaster.js';
import ServiceTypeMaster from './components/CountryMaster/ServiceTypeMaster.js';
import CarBrandMaster from './components/CountryMaster/CarBrandMaster.js';
import VehicleType from './components/CountryMaster/VehicleType.js';
import SparePartMaster from './components/CountryMaster/SparePartMaster.js';
import ManageCatagory from './ServiceProviders/CarsAgent/ManageCatagory.js';
import ManageCars from './ServiceProviders/CarsAgent/ManageCars.js';
import ManageShowRoom from './ServiceProviders/CarsAgent/ManageShowRoom.js';
import ManageWorkShop from './ServiceProviders/CarsAgent/ManageWorkShop.js';
import AddNewCategory from './ServiceProviders/CarsAgent/AddNewCategory.js';
import AddNewManageCars from './ServiceProviders/CarsAgent/AddNewManageCars.js';
import AddNewManageShowRoom from './ServiceProviders/CarsAgent/AddNewManageShowRoom.js';
import AddNewManageWorkShop from './ServiceProviders/CarsAgent/AddNewManageWorkShop.js';
import AddBusinessCategoryMaste from './components/CountryMaster/AddBusinessCategoryMaster.js';
import AddBusinessCategoryMaster from './components/CountryMaster/AddBusinessCategoryMaster.js';
import AddServiceTypeMaster from './components/CountryMaster/AddServiceTypeMaster.js';
import AddCarBrandMaster from './components/CountryMaster/AddCarBrandMaster.js';
import AddVehicleType from './components/CountryMaster/AddVehicleType.js';
import AddCarArea from './components/CountryMaster/AddCarArea.js';
import AddCarName from './components/CountryMaster/AddCarName.js';
import AddSparePart from './components/CountryMaster/AddSparePart.js';
import AddSparePartType from './components/CountryMaster/AddSparePartType.js';
import AddCountyCode from './components/CountryMaster/AddCountryCode.js';
import AddCountryCode from './components/CountryMaster/AddCountryCode.js';
import AddCountry from './components/CountryMaster/AddCountry.js';
import Registeration from './common/Registeration.js';
// import { ContryMasterAddCountry } from './components/CountryMaster/ContryMasterAddContry';
class Routes extends Component {
	render() {
		return (
			<Router baseName={'/'}>
				{localStorage.getItem('loged_In') !== 'true' ? (
					<Route exact path={'/'} component={Login} />
				) : (
					<Home>
						<Route exact path={'/Registeration'} component={Registeration} />
						<Route exact path={'/'} component={Dashboard} />
						<Route exact path={'/user'} component={UserList} />
						<Route exact path={'/user/add/:user_id?'} component={UserAddTab} />
						<Route exact path={'/category'} component={CategoryList} />
						<Route
							exact
							path={'/category/add/:category_id?'}
							component={CategoryAddTab}
						/>
						<Route
							exact
							path={'/delivery-charge/add/:charges_id?'}
							component={DeliveryChargesAddTab}
						/>
						<Route exact path={'/delivery-charge'} component={DeliveryList} />
						<Route exact path={'/orders/:type?'} component={OrderList} />
						{/* <Route
							exact
							path={'/ServiceProviders/:type?'}
							component={ProductList}
						/> */}
						<Route
							exact
							path={'/ServiceProviders/:type?'}
							component={ProductList}
						/>
						{/* <Route
							exact
							path={'/ServiceProviders/:type?'}
							component={GarageList}
						/> */}
						{/* <Route
							exact
							path={'/ServiceProviders/:type/:add?'}
							component={ProductAddTab}
						/> */}
						{/* <Route exact path={"/orders/auction"} component={OrderList} /> */}
						<Route exact path={'/seller'} component={SellerList} />
						<Route
							exact
							path={'/seller/add/:seller_id?'}
							component={SellerAddTab}
						/>
						<Route exact path={'/varients'} component={VarientsList} />
						<Route
							exact
							path={'/varients/add/:varients_id?'}
							component={VarientsAddTab}
						/>
						<Route exact path={'/delivery-time'} component={DeliveryTimeList} />
						<Route
							exact
							path={'/delivery-time/add/:deliveryTime_id?'}
							component={DeliveryTimeAddTab}
						/>
						<Route exact path={'/order-status'} component={OrderStatusList} />
						<Route
							exact
							path={'/order-status/add/:orderstatus_id?'}
							component={OrderStatusAddTab}
						/>
						<Route exact path={'/language'} component={LanguageList} />
						<Route
							exact
							path={'/language/add/:language_id?'}
							component={LanguageAdd}
						/>
						<Route exact path={'/sell-type'} component={SellTypeList} />
						<Route
							exact
							path={'/sell-type/add/:seller_id?'}
							component={SellTypeAddTab}
						/>
						<Route exact path={'/business-type'} component={BusinessList} />
						<Route
							exact
							path={'/business-type/add/:seller_id?'}
							component={BusinessAddTab}
						/>
						<Route exact path={'/payment'} component={PaymentList} />
						<Route
							exact
							path={'/payment/add/:payment_id?'}
							component={PaymentAddTab}
						/>
						<Route exact path={'/coupon'} component={CouponList} />
						<Route
							exact
							path={'/coupon/add/:coupon_id?'}
							component={CouponAddTab}
						/>
						<Route
							exact
							path={'/CountryMaster/:type?'}
							component={CountryMaster}
						/>
						<Route
							exact
							path={'/CountryMaster/:type?/add/Country'}
							component={AddCountry}
						/>
						<Route
							exact
							path={'/CountryMaster/:type?/add/CountryCode'}
							component={AddCountryCode}
						/>
						<Route exact path={'/role'} component={RoleList} />
						<Route exact path={'/role/add/:role_id?'} component={RoleAddTab} />
						<Route exact path={'/driver'} component={DriverList} />{' '}
						<Route
							exact
							path={'/driver/add/:driver_id?'}
							component={DriverAddTab}
						/>
						<Route exact path={'/country'} component={CountryList} />
						<Route
							exact
							path={'/country/add/:country_id?'}
							component={CountryAddTab}
						/>
						<Route exact path={'/governorate'} component={GovernorateList} />
						<Route
							exact
							path={'/governorate/add/:governorate_id?'}
							component={GovernorateAddTab}
						/>
						<Route exact path={'/area'} component={AreaList} />
						<Route exact path={'/area/add/:area_id?'} component={AreaAddTab} />
						<Route exact path={'/terms'} component={TermsAddTab} />
						<Route exact path={'/about'} component={AboutUsAddTab} />
						<Route
							exact
							path={'/BusinessCategoryMaster'}
							component={BusinessCategoryMaster}
						/>
						<Route
							exact
							path={'/BusinessCategoryMaster/AddBusinessCategoryMaste'}
							component={AddBusinessCategoryMaster}
						/>
						<Route
							exact
							path={'/ServiceTypeMaster'}
							component={ServiceTypeMaster}
						/>
						<Route
							exact
							path={'/ServiceTypeMaster/AddServiceTypeMaster'}
							component={AddServiceTypeMaster}
						/>
						<Route exact path={'/CarBrandMaster'} component={CarBrandMaster} />
						<Route
							exact
							path={'/CarBrandMaster/AddCarBrandMaster'}
							component={AddCarBrandMaster}
						/>
						<Route exact path={'/VehicleType'} component={VehicleType} />
						<Route
							exact
							path={'/VehicleType/ddVehicleType'}
							component={AddVehicleType}
						/>
						<Route
							exact
							path={'/SparePartMaster/:type?'}
							component={SparePartMaster}
						/>
						<Route
							exact
							path={'/SparePartMaster/:type?/add/CarArea'}
							component={AddCarArea}
						/>
						<Route
							exact
							path={'/SparePartMaster/:type?/add/CarName'}
							component={AddCarName}
						/>
						<Route
							exact
							path={'/SparePartMaster/:type?/add/SpareParts'}
							component={AddSparePart}
						/>
						<Route
							exact
							path={'/SparePartMaster/:type?/add/SparePartTypes'}
							component={AddSparePartType}
						/>
						<Route
							exact
							path={'/ServiceProviders/Agent/ManageCars'}
							component={ManageCars}
						/>
						<Route
							exact
							path={'/ServiceProviders/Agent/ManageShowRoom'}
							component={ManageShowRoom}
						/>
						<Route
							exact
							path={'/ServiceProviders/Agent/ManageWorkShop'}
							component={ManageWorkShop}
						/>
						<Route
							exact
							path={'/ServiceProviders/Agent/ManageCatagory'}
							component={ManageCatagory}
						/>
						<Route
							exact
							path={'/ServiceProviders/Agent/AddNewCategory'}
							component={AddNewCategory}
						/>
						<Route
							exact
							path={'/ServiceProviders/Agent/AddManageCAr'}
							component={AddNewManageCars}
						/>
						<Route
							exact
							path={'/ServiceProviders/Agent/AddNewManageShowRoom'}
							component={AddNewManageShowRoom}
						/>
						<Route
							exact
							path={'/ServiceProviders/Agent/AddNewManageWorkShop'}
							component={AddNewManageWorkShop}
						/>
					</Home>
				)}
			</Router>
		);
	}
}

export default Routes;
