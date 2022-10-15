import React from 'react'
import mask from "./assets/mask.png";
import styles from './createCommittes.module.css';
import pic8 from './assets/pic8.png';
import pic9 from './assets/pic9.png';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import { TbAlertCircle } from 'react-icons/tb';


const Login1 = () => {

	return (
		<>
			<NavBar />
			<div className={`${styles.loginPosition}`}>
				<img src={mask} className={`img-fluid w-100 ${styles.ig}`} alt="banner1" />
				<div className={`${styles.bannerHeadAlign}`}>
					<h2 className={`${styles.bannerHead}`}>create committees</h2>
				</div>
				<div className={`${styles.memberHeight}`}>
					<div style={{ position: "relative" }}>
						<img src={pic9} alt="pic7" className={`w-100 ${styles.orangeBanner}`} />
						<img src={pic8} alt="pic8" className={`${styles.whiteBanner}`} />

						<div className={`card ${styles.loginCard}`}>
							<div className={`card-body`}>
								<div className={`${styles.loginHead}`}>
									<h5>committees</h5>
									<p className={`${styles.cardText}`}>
									You're already a member of these<br /> Rochamp Committee
 										</p><br />
										 <div className={`${styles.sectionCommitee}`}>
											<ul>
												<li>
													<a href='/newcommittees'>
														<span><TbAlertCircle /></span>
														IXIONO
													</a>
												</li>
												<li>
													<a href='/newcommittees'>
														<span><TbAlertCircle /></span>
														IXIONO
													</a>
												</li>
												<li>
													<a href='/newcommittees'>
														<span><TbAlertCircle /></span>
														IXIONO
													</a>
												</li>
												<li>
													<a href='/newcommittees'>
														<span><TbAlertCircle /></span>
														IXIONO
													</a>
												</li>
											</ul>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ position: "relative" }}>
				<div>
					<img src={pic9} alt="pic7" className={`w-100 ${styles.greenBanner}`} />
				</div>

				<div className={`${styles.greenBannerText}`}>
					<div>
						<h1>need help to decide?</h1>
						<h5>contact managemaent and develpement team</h5>
					</div>

					<div className={`${styles.greenBtnAlign}`}>

						<button className={`btn btn-primary ${styles.greenBtn}`}>contact us</button>
					</div>

				</div>
			</div>
			<Footer />
		</>

	)

}


export default Login1;