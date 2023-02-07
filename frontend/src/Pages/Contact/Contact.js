import React, { useState, useRef } from 'react';
import classes from './Contact.module.css';
import Header from '../../containers/Headers/HeaderStandard/Header';
import thistles from '../../Assests/optimized/banner-contact.jpg';
import { checkValidity } from '../../shared/utilities';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import { Link } from 'react-router-dom';
// import ReCAPTCHA from "react-google-recaptcha";
// import { siteKey } from "../../data";
import { urlBackendContact } from '../../data';

const Contact = (props) => {
	const [sending, setSending] = useState(false);
	const [respMessage, setRespMessage] = useState(null);
	//const [captchaOK, setCaptchaOk] = useState(false);
	const [data, setData] = useState({
		form: {
			name: {
				value: '',
				valid: false,
				validation: {
					required: true,
				},
			},
			email: {
				value: '',
				valid: false,
				validation: {
					required: true,
					isEmail: true,
				},
			},
			tel: {
				value: '',
				valid: true,
				validation: {
					required: false,
				},
			},
			message: {
				value: '',
				valid: false,
				validation: {
					required: true,
				},
			},
		},
		formIsValid: false,
	});

	const inputChangeHandler = (event, id) => {
		// manage the values
		let formModified = { ...data };
		let elementModified = { ...formModified.form[id] };
		elementModified.value = event.target.value;

		//check validity of the imput that is changing
		elementModified.valid = checkValidity(
			formModified.form[id].value,
			formModified.form[id].validation,
		);
		formModified.form[id] = elementModified;

		//set the validity of the entire form
		let formIsValid = true;
		for (let identifier in formModified.form) {
			formIsValid = formModified.form[identifier].valid && formIsValid;
		}
		formModified.formIsValid = formIsValid;

		// update the state
		setData(formModified);
	};

	//const captcha = useRef(null);

	// const onChange = (e) => {
	//     if (captcha.current.getValue()) {
	//         setCaptchaOk(true);
	//     }
	// };

	const submitHandler = (event) => {
		event.preventDefault();
		if (
			data.formIsValid
			//&& captchaOK
		) {
			setSending(true);

			let form = { ...data };
			axios
				.post(`${process.env.REACT_APP_API_URL}/api/contact`, form)
				.then((resp) => {
					setSending(false);
					setRespMessage(
						'Thank you for contacting us!!! Your information was sent successfully. We will reply as soon as possible.',
					);
				})
				.catch((error) => {
					console.log(error);
					setSending(false);
					setRespMessage('there was an unespected error, please retry in a few minutes.');
				});
		} else {
			alert('some fields are required, including recaptcha');
		}
	};

	let classesArrayForButton = [
		classes.button,
		data.formIsValid
			? //&& captchaOK
			  null
			: classes.alertButton,
	].join(' ');

	let screenMessage = respMessage ? (
		<Link to='./'>
			<Backdrop show>
				<div className={classes.screenMessage}>{respMessage}</div>
			</Backdrop>
		</Link>
	) : null;

	let content = (
		<div className={classes.container}>
			{screenMessage}
			<Header
				background={thistles}
				alt='thistles in the field'
				flag='CONTACT'
				title='We are here to help you on your journey'></Header>

			<div className={classes.dataSection}>
				<div className={classes.ourInfo}>
					<h4>CONTACT US</h4>
					<h2>We are in the Denver area</h2>
					<p>
						Please contact us with any questions about building your custom van conversion. Let’s
						get you started on living the van life!
					</p>

					<div className={classes.ourData}>
						<p>
							E-mail: <br></br>Facebook: <br></br>Instagram:
						</p>

						<p className={classes.strongs}>
							<strong>patavansboulder@gmail.com</strong>
							<br></br>
							<strong>@patavansboulder</strong>
							<br></br>
							<strong>@patavans</strong>
						</p>
					</div>
				</div>
				<div className={classes.yourInfo}>
					<h4>Send Us a Message</h4>
					<form onSubmit={submitHandler}>
						<input
							placeholder='First and Last Name * (please, do not use the autofill)'
							onChange={(event) => {
								inputChangeHandler(event, 'name');
							}}
							value={data.form.name.value}></input>
						<input
							className={data.form.email.valid ? null : classes.mailInvalid}
							placeholder='E-mail * (please, do not use the autofill)'
							onChange={(event) => {
								inputChangeHandler(event, 'email');
							}}
							value={data.form.email.value}></input>
						<input
							placeholder='Phone'
							onChange={(event) => {
								inputChangeHandler(event, 'tel');
							}}
							value={data.form.tel.value}></input>
						<textarea
							className={classes.textArea}
							placeholder='Message *'
							onChange={(event) => {
								inputChangeHandler(event, 'message');
							}}
							value={data.form.message.value}></textarea>
						{/* <div className={classes.recaptcha}>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey={siteKey}
                                onChange={onChange}
                            />
                        </div> */}
						<button className={classesArrayForButton}>Send</button>
					</form>
				</div>
			</div>
			<iframe
				className={classes.map}
				src='https://maps.google.com/maps?q=15055%20York%20St.%20Building%20A,%20%20Thornton,%20CO%2080602&t=&z=13&ie=UTF8&iwloc=&output=embed'
				width='600'
				height='450'
				style={{ border: 0 }}
				allowFullScreen=''
				loading='lazy'
				title={'map'}></iframe>
		</div>
	);

	return sending ? <Spinner></Spinner> : content;
};

export default Contact;
