import React from 'react';

const Button = ({ styles, text }) => {
	return (
		<button
			type="button"
			className={`py-4 px-6 font-poppins bg-blue-gradient font-medium text-[18px] text-primary outline-none ${styles}`}
		>
			{text}
		</button>
	);
};

export default Button;
