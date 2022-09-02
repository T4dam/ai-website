import React from 'react';

const Button = ({ styles, text }) => {
	return (
		<button
			type="button"
			className={`py-4 px-6 font-poppins bg-blue-gradient font-medium text-[18px] text-primary rounded-lg outline-none   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-cyan-500/50 ${styles} `}
		>
			{text}
		</button>
	);
};

export default Button;
