import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	Signout = () => {
		localStorage.clear();
		window.location.href = '#/';
		window.location.reload();
	};

	render() {
		return (
			<nav className='navbar header-navbar pcoded-header noprint'>
				<div className='navbar-wrapper'>
					<div className='navbar-logo text-center'>
						<a
							className='mobile-menu'
							id='mobile-collapse'
							href='javascript:void(0)'>
							<i className='feather icon-menu'></i>
						</a>
						<Link to='/'>
							<h3 className='text-white ml-3'>CarAvenue</h3>
						</Link>
						<a className='mobile-options'>
							<i className='feather icon-more-horizontal'></i>
						</a>
					</div>
					<div className='navbar-container container-fluid'>
						<ul className='nav-right'>
							{/* {
                localStorage.getItem('loged_In_role') === "shop"
                  ?
                  <Link to={"/shops/add/" + localStorage.getItem('loged_In_uid')}>
                    <li className="user-profile header-notification">
                      <img src="./assets/images/user.png" className="img-radius" alt="User-Profile-Image" />
                      <span>{localStorage.getItem("ad_name")}</span>
                    </li>
                  </Link>
                  : */}
							<li className='user-profile header-notification'>
								<img
									src='./assets/images/user.png'
									className='img-radius'
									alt='User-Profile-Image'
								/>
								<span>{'Admin'}</span>
							</li>
							{/* } */}
							<li>
								<button
									className='btn bg-transparent'
									onClick={this.Signout}
									dataToggle='tooltip'
									title='Logout'>
									<i className='feather icon-log-out'></i>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
