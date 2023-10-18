"use client"
import React from 'react'
import IMAGES from '@/../public/index'
import { motion } from "framer-motion"

const ImageGallary = () => {
	return (
		<>
			<motion.div className="section padding-bottom over-hide"
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6 }}
			>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="img-wrap">
									<img src={IMAGES.GopalpurMandirPraveshDwar} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Gopalpur Mandir Pravesh Dwar</em></strong></p>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="img-wrap">
									<img src={IMAGES.ShriVitthalRukminiMandir1} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Shri Vitthal Rukmini Mandir</em></strong></p>
							</div>
						</div>
					</div>
				</div>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="img-wrap">
									<img src={IMAGES.SantKaikadiMaharajMath} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Sant Kaikadi Maharaj Math</em></strong></p>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="img-wrap">
									<img src={IMAGES.SantKaikadiMaharajMath1} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Sant Kaikadi Maharaj Math</em></strong></p>
							</div>
						</div>
					</div>
				</div>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="img-wrap">
									<img src={IMAGES.PundalikTemple} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Pundalik Temple</em></strong></p>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="img-wrap">
									<img src={IMAGES.ShriVitthalRukminiMandir3} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Shri Vitthal Rukmini Mandir</em></strong></p>
							</div>
						</div>
					</div>
				</div>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="img-wrap">
									<img src={IMAGES.ShriVitthalRukminiMandir2} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>ShriVitthalRukminiMandir</em></strong></p>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="img-wrap">
									<img src={IMAGES.VishnupadTemple1} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Vishnupad Temple</em></strong></p>
							</div>
						</div>
					</div>
				</div>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="img-wrap">
									<img src={IMAGES.VishnupadTemple2} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Vishnupad Temple</em></strong></p>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="img-wrap">
									<img src={IMAGES.VishnupadTemple3} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Vishnupad Temple</em></strong></p>
							</div>
						</div>
					</div>
				</div>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="img-wrap">
									<img src={IMAGES.VishnupadTemple4} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Vishnupad Temple</em></strong></p>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="img-wrap">
									<img src={IMAGES.VishnupadTemple5} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>Vishnupad Temple</em></strong></p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default ImageGallary