import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {MdFavorite, MdFavoriteOutline} from 'react-icons/lib/md';



const Sign = (props) => {

	let icon = null;

	if (props.type === 'signIn') {
		icon = <MdFavorite className='icons'/>
	} else {
		icon = <MdFavoriteOutline className='icons'/>
	}

	return (
		<div onClick={props.onChange} className={props.type==='signIn' 
		? 'signIn' 
		: 'signUp'
		}>
			<div className='center'>
				{icon}
				<p>{props.type === 'signIn' 
				? 'SIGN IN' 
				: 'SIGN UP'}</p>
			</div>
		</div>
	);
}

Sign.propTypes = {
	type: PropTypes.string,
	onChange: PropTypes.func	
};

export default Sign;