import styles from '../style';
import { logo } from './../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
	return (
		<footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
				<div className="flex-[1] flex flex-col justify-start mr-10">
					<img
						src={logo}
						alt="logo"
						className="w-[266px] h-[72.14px] object-contain"
					/>
					<p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
						consectetur!
					</p>
				</div>
				<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
					{footerLinks.map((item) => {
						return (
							<div
								key={item.title}
								className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
							>
								<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
									{item.title}
								</h4>
								<ul className="list-none mt-4">
									{item.links.map((footerlink, index) => {
										return (
											<li
												key={footerlink.name}
												className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
													index !== item.links.length - 1 ? 'mb-4' : 'mb-0'
												}`}
											>
												<a href={footerlink.link} className="text-white">
													{footerlink.name}
												</a>
											</li>
										);
									})}
								</ul>
								{/* <h4>{item.title}</h4>
                                <ul>
                                    <li>{index.links}</li>
                                </ul> */}
							</div>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
