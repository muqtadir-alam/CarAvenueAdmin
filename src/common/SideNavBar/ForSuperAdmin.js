import React from 'react';
import { Link } from 'react-router-dom';

class SideNavBar extends React.Component {
	render() {
		return (
			<nav className='pcoded-navbar noprint' id='admin_menu'>
				<div className='pcoded-inner-navbar main-menu'>
					<ul className='pcoded-item pcoded-left-item'>
						<li className=''>
							<Link to='/'>
								<span className='pcoded-micon'>
									<i className='feather icon-home'></i>
								</span>
								<span className='pcoded-mtext'>Dashboard</span>
							</Link>
						</li>
						<li className='pcoded-hasmenu'>
							<a href='javascript:void(0)'>
								<span className='pcoded-micon'>
									<i className='icofont icofont-users-alt-3'></i>
								</span>
								<span className='pcoded-mtext'>Customers</span>
							</a>
							<ul className='pcoded-submenu'>
								<li className=''>
									<Link to='/user'>
										<span className='pcoded-micon'>
											<i className='icofont icofont-users-alt-3'></i>
										</span>
										<span className='pcoded-mtext'>Users</span>
									</Link>
								</li>
								{/* <li className=''>
									<Link to='/seller'>
										<span className='pcoded-micon'>
											<i className='fa fa-user-secret'></i>
										</span>
										<span className='pcoded-mtext'>Sellers</span>
									</Link>
								</li> */}
								{/* <li className=''>
									<Link to='/driver'>
										<span className='pcoded-micon'>
											<i className='fa fa-user-secret'></i>
										</span>
										<span className='pcoded-mtext'>Driver</span>
									</Link>
								</li> */}
							</ul>
						</li>

						{/* <li className="">
              <Link to="/postmaster">
                <span className="pcoded-micon">
                  <i className="feather icon-clipboard"></i>
                </span>
                <span className="pcoded-mtext">Post Master</span>
              </Link>
            </li>
             */}
						{/* <li className=''>
							<Link to='/category'>
								<span className='pcoded-micon'>
									<i className='feather icon-grid'></i>
								</span>
								<span className='pcoded-mtext'>Category</span>
							</Link>
						</li> */}
						<li className=' pcoded-hasmenu'>
							<a href='javascript:void(0)'>
								<span className='pcoded-micon'>
									<i className='feather icon-box'></i>
								</span>
								{/* <span className='pcoded-mtext'>Product</span> */}
								<span className='pcoded-mtext'>Service Providers</span>
							</a>
							<ul className='pcoded-submenu'>
								<li className=' '>
									{/* <Link to='/product/fixed'> */}
									<Link to='/ServiceProviders/Garage'>
										<span className='pcoded-mtext'>Garage</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/SpareParts'>
										<span className='pcoded-mtext'>Spare Parts</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/CarDealers'>
										<span className='pcoded-mtext'>Car Dealers</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/CarForSale'>
										<span className='pcoded-mtext'>Cars For Sale</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/RentCar'>
										<span className='pcoded-mtext'>Rent a Car</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/Taxi'>
										<span className='pcoded-mtext'>Taxi</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/CarWash'>
										<span className='pcoded-mtext'>Car Wash</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/CarTowing'>
										<span className='pcoded-mtext'>Car Towing</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/CarInsurance'>
										<span className='pcoded-mtext'>Car Insurance</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/DrivingSchool'>
										<span className='pcoded-mtext'>DrivingSchool</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/CarProtection'>
										<span className='pcoded-mtext'>Car Protection</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/CarConditioning'>
										<span className='pcoded-mtext'>Car Conditioning</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/QuickService'>
										<span className='pcoded-mtext'>Quick Service</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/ServiceProviders/CarsAgent'>
										<span className='pcoded-mtext'>Cars Agent</span>
									</Link>
								</li>
							</ul>
						</li>
						{/* 
						<li className=' pcoded-hasmenu'>
							<a href='javascript:void(0)'>
								<span className='pcoded-micon'>
									<i className='feather icon-package'></i>
								</span>
								<span className='pcoded-mtext'>Orders</span>
							</a>
							<ul className='pcoded-submenu'>
								<li className=' '>
									<Link to='/orders/fixed'>
										<span className='pcoded-mtext'>Fixed</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/orders/auction'>
										<span className='pcoded-mtext'>Auction</span>
									</Link>
								</li>
							</ul>
						</li> */}
					</ul>
					<ul className='pcoded-item pcoded-left-item'>
						{/* <li className='pcoded-hasmenu'>
							<a href='javascript:void(0)'>
								<span className='pcoded-micon'>
									<i className='feather icon-command'></i>
								</span>
								<span className='pcoded-mtext'>Country Master</span>
							</a>
							<ul className='pcoded-submenu'>
								<li className=' '>
									<Link to='/CountryMaster/Country'>
										<span className='pcoded-mtext'>Country List </span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/CountryMaster/CountryCode'>
										<span className='pcoded-mtext'>country Code</span>
									</Link>
								</li>
							</ul>
						</li> */}
						<li className=''>
							<Link to='/BusinessCategoryMaster'>
								<span className='pcoded-micon'>
									<i className='feather icon-percent'></i>
								</span>
								<span className='pcoded-mtext'>Business Category Master</span>
							</Link>
						</li>
						<li className=''>
							<Link to='/ServiceTypeMaster'>
								<span className='pcoded-micon'>
									<i className='feather icon-percent'></i>
								</span>
								<span className='pcoded-mtext'>Service Type Master</span>
							</Link>
						</li>
						<li className=''>
							<Link to='/CarBrandMaster'>
								<span className='pcoded-micon'>
									<i className='feather icon-percent'></i>
								</span>
								<span className='pcoded-mtext'>Car Brand Master</span>
							</Link>
						</li>
						<li className=''>
							<Link to='/VehicleType'>
								<span className='pcoded-micon'>
									<i className='feather icon-percent'></i>
								</span>
								<span className='pcoded-mtext'>Vehicle Type</span>
							</Link>
						</li>
					</ul>

					<ul className='pcoded-item pcoded-left-item'>
						<li className=' pcoded-hasmenu'>
							<a href='javascript:void(0)'>
								<span className='pcoded-micon'>
									<i className='feather icon-command'></i>
								</span>
								<span className='pcoded-mtext'>Spare Part Master</span>
							</a>
							<ul className='pcoded-submenu'>
								<li className=' '>
									<Link to='/SparePartMaster/CarName'>
										<span className='pcoded-mtext'>Car Name</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/SparePartMaster/CarArea'>
										<span className='pcoded-mtext'>Car Area</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/SparePartMaster/SpareParts'>
										<span className='pcoded-mtext'>Spare Parts </span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/SparePartMaster/SparePartTypes'>
										<span className='pcoded-mtext'>Spare Part Types </span>
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<ul className='pcoded-item pcoded-left-item'>
						<li className=' pcoded-hasmenu'>
							<a href='javascript:void(0)'>
								<span className='pcoded-micon'>
									<i className='feather icon-map-pin'></i>
								</span>
								<span className='pcoded-mtext'>Location Master</span>
							</a>
							<ul className='pcoded-submenu'>
								<li className=' '>
									<Link to='/country'>
										<span className='pcoded-mtext'>Country</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/governorate'>
										<span className='pcoded-mtext'>Governorate</span>
									</Link>
								</li>
								<li className=' '>
									<Link to='/area'>
										<span className='pcoded-mtext'>Area</span>
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<div className='pcoded-navigatio-lavel'>Settings</div>
					<ul className='pcoded-item pcoded-left-item'>
						<li className=''>
							<Link to='/about'>
								<span className='pcoded-micon'>
									<i className='icofont icofont-law-document'></i>
								</span>
								<span className='pcoded-mtext'>About Us</span>
							</Link>
						</li>
						<li className=''>
							<Link to='/terms'>
								<span className='pcoded-micon'>
									<i className='icofont icofont-law-document'></i>
								</span>
								<span className='pcoded-mtext'>Terms & Conditions</span>
							</Link>
						</li>
						<li className=''>
							<Link to='/contact-us'>
								<span className='pcoded-micon'>
									<i className='feather icon-phone'></i>
								</span>
								<span className='pcoded-mtext'>Contact Us</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default SideNavBar;
