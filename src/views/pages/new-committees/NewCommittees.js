import React from 'react'
import mask from "./assets/mask.png";
import styles from './newCommittes.module.css';
import Ellipse11 from './assets/Ellipse 11.png';
import Ellipse12 from './assets/Ellipse 12.png';
import Ellipse13 from './assets/Ellipse 13.png';
import pic8 from './assets/pic8.png';
import pic9 from './assets/pic9.png';
import pic11 from './assets/pic11.png';
import pic12 from './assets/pic12.png';
import pic13 from './assets/pic13.png';
import pic14 from './assets/pic14.png';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import LatestNews from './latestnews/LatestNews';


const NewCommittees = () => {

	return (
		<>
			<NavBar />
			<div className={`${styles.loginPosition}`}>
				<img src={mask} className={`img-fluid w-100 ${styles.ig}`} alt="banner1" />
				<div className={`${styles.bannerHeadAlign}`}>
					<h2 className={`${styles.bannerHead}`}>COMMITEES</h2>
				</div>
				<div className={`${styles.memberHeight}`}>
					<div style={{ position: "relative" }}>
						<img src={pic9} alt="pic7" className={`w-100 ${styles.orangeBanner}`} />
						<img src={pic8} alt="pic8" className={`${styles.whiteBanner}`} />

						<div className={`card ${styles.loginCard}`}>
							<div className={`card-body`}>
								<div className={`${styles.loginHead}`}>
									<h5 className="card-title">IXIONO COMMITEE</h5>
									<div className='row mt-3'>
										<div className='col-sm-3'>
											<div className='d-flex'>
												<div>
													<img src={Ellipse11} alt="e11" />
												</div>
												<div className={`${styles.newCommMember}`}>
													<h6>praba</h6>
												</div>
											</div>
										</div>

										<div className='col-sm-3'>
											<div className='d-flex'>
												<div>
													<img src={Ellipse11} alt="e11" />
												</div>
												<div className={`${styles.newCommMember}`}>
													<h6>praba</h6>
												</div>
											</div>
										</div>
										<div className='col-sm-3'>
											<div className='d-flex'>
												<div>
													<img src={Ellipse12} alt="e12" />
												</div>
												<div className={`${styles.newCommMember}`}>
													<h6>Mohan</h6>
												</div>
											</div>
										</div>
										<div className='col-sm-3'>
											<div className='d-flex'>
												<div>
													<img src={Ellipse13} alt="e13" />
												</div>
												<div className={`${styles.newCommMember}`}>
													<h6>Sathish</h6>
												</div>
											</div>
										</div>
									</div>

									{/* brief commitee */}
									<div className='briefCommitee mt-3'>
										<h6>brief about COMMITEE :</h6>
										<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
											and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
										</p>
									</div>
									{/* Events */}

									<div>
										<LatestNews />
									</div>

									{/* partners */}
									<div className='mt-3'>
										<h6>Partners :</h6>
										<div className='row mt-3'>
											<div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end'>
												<img src={pic11} className='img-fluid w-75' alt="pic11" />
											</div>
											<div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end'>
												<img src={pic12} className='img-fluid w-75' alt="pic12" />
											</div>
											<div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end'>
												<img src={pic13} className='img-fluid w-75' alt="pic13" />
											</div>
											<div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end'>
												<img src={pic14} className='img-fluid w-75' alt="pic14" />

											</div>
										</div>
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


export default NewCommittees;