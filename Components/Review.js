import React from 'react'

const Review = () => {
  return (
    <>
    <div className="section padding-top-bottom-big over-hide">
		<div className="parallax" style={{backgroundImage: "url('img/5.jpg')"}}></div>
		<div className="section z-bigger">		
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div id="owl-sep-1" className="owl-carousel owl-theme">								 
							<div className="item">						
								<div className="quote-sep">	
									<h4>"Chilling out on the bed in your hotel room watching television, while wearing your own pajamas, is sometimes the best part of a vacation."</h4>
									<h6>Jason Salvatore</h6>	
								</div>											
							</div>											
							<div className="item">					
								<div className="quote-sep">
									<h4>"Every good day starts off with a cappuccino, and there's no place better to enjoy some frothy caffeine than at the Thalia Hotel."</h4>
									<h6>Terry Mitchell</h6>	
								</div>									
							</div>											
							<div className="item">					
								<div className="quote-sep">
									<h4>"I still enjoy traveling a lot. I mean, it amazes me that I still get excited in hotel rooms just to see what kind of shampoo they've left me."</h4>
									<h6>Michael Brighton</h6>
								</div>										
							</div>								 
						</div>	
					</div>
				</div>
			</div>					
		</div>
	</div>
	
	<div className="section padding-top-bottom-small background-dark-2 over-hide">		
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">	
					<h5 className="color-grey">A new dimension of luxury.</h5>
					<p className="color-white mt-3 mb-3"><em>our presentation, 0:48 min</em></p>
					<a href="https://vimeo.com/54851233" className="video-button" data-fancybox><i className="fa fa-play"></i></a>
				</div>
			</div>
		</div>	
	</div>
    
    
    </>
  )
}

export default Review