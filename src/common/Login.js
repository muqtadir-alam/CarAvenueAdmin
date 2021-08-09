import React from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
import { loginUser } from '../actions/homeAction';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			role: '',
			loading: false,
			isVerifed: false,
			openReset: false,
		};
		// this.onInputChange = this.onInputChange.bind(this);
		// this.onLogin = this.onLogin.bind(this);
		// this.verifyCallback = this.verifyCallback.bind(this);
		// this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
		// this.onResolved = this.onResolved.bind(this);
	}

	onInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onResolved = () => {
		this.setState({
			isVerifed: true,
		});
	};

	verifyCallback = response => {
		// Here you will get the final recaptchaToken!!!
		console.log(response, '<= your recaptcha token');
	};

	recaptchaLoaded = () => {
		// you will get a new token in verifyCallback
		// this.recaptcha.execute();
		// console.log('your recaptcha token');
	};

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	onLogin = event => {
		// console.log('here>>>>>>');
		event.preventDefault();
		// var that = this;
		// var data = new URLSearchParams();
		var userData = {
			username: this.state.username,
			password: this.state.password,
		};
		console.log(userData);
		this.setState({ isSaving: true });
		this.setState({ role: 'Admin' });

		console.log('here email password>>>>>>', userData);
		if (userData.username === undefined || userData.password === undefined) {
			Swal.fire({
				title: 'Empty username or password',
				// position: 'top-end',
				icon: 'error',
				text: '',
				type: 'success',
				imageUrl: './assets/images/favicon/android-chrome-192x192.png',
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Ok',
			});
		} else {
			// localStorage.setItem('loged_In', true);
			if (this.state.role === 'Admin') {
				this.props.loginUser(userData);
				console.log('here>>>>>> under admin ');
			}
		}
		return false;
	};

	render() {
		return (
			<section className='login-block'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<form className='md-float-material form-material'>
								<div className='text-center'>
									<h1 className='display-4 text-white'> CAR AVENUE ADMIN</h1>
								</div>

								<div className='auth-box card'>
									<div className='card-block'>
										<div className='row m-b-20'>
											<div className='col-md-12'>
												<div className='d-flex justify-content-center'>
													<img
														style={{ height: '100px', width: '100px' }}
														src='./logotest.png'
														alt='logo'
													/>
												</div>
												<h3 className='text-center'>Sign In</h3>
											</div>
										</div>
										<div className='form-group form-primary'>
											<select
												name='role'
												className='form-control'
												onChange={this.onInputChange}
												value={this.state.role}>
												<option value='admin'>Admin</option>
												{/* <option value='seller'>Seller</option> */}
											</select>
										</div>
										<div className='form-group form-primary'>
											<input
												type='text'
												name='username'
												className='form-control'
												required=''
												placeholder='Username'
												onChange={this.onInputChange}
											/>
											<span className='form-bar'></span>
										</div>
										<div className='form-group form-primary'>
											<input
												type='password'
												name='password'
												className='form-control'
												required=''
												placeholder='Password'
												onChange={this.onInputChange}
											/>
											<span className='form-bar'></span>
										</div>
										<div className='row m-t-30'>
											<div className='col-md-12'>
												<button
													type='button'
													onClick={this.onLogin}
													className='btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20'>
													{this.state.loading ? 'Loading ..' : 'Sign in'}
												</button>
												<div className='d-flex justify-content-center'>
													<Recaptcha
														ref={ref => (this.recaptcha = ref)}
														sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
														// onloadCallback={this.recaptchaLoaded.bind(this)}
														onResolved={this.onResolved.bind(this)}
														onLoaded={this.recaptchaLoaded.bind(this)}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

Login.propsTypes = {
	loginUser: PropTypes.func.isRequired,
	home: PropTypes.object.isRequired,
};

var mapStateToProps = state => ({
	home: state.home,
});

export default connect(mapStateToProps, { loginUser })(Login);
