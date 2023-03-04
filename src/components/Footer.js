import React from 'react';
import '../styles/Footer.css';



const Footer = () => {
	return (
		<div className='footer' id="footer">
			<div className='footer_inner '>
				<p className='footer_item'>
					<a href="/">© 2023 Frank Nguyen</a>
				</p>
				<p className='footer_item'>
					<a href="https://github.com/frankmng">Github</a>
				</p>
				<p className='footer_item'>
					<a href="https://www.linkedin.com/">LinkedIn</a>
				</p>
				<p className='footer_item'>
					<a href="https://twitter.com/">Twitter</a>
				</p>
			</div>
		</div>
	);
}

export default Footer;