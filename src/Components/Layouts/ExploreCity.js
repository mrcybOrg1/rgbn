"use client"
import React from 'react'
import IMAGES from '@/../public/index'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const ExploreCity = () => {

	const [ref, inView] = useInView({
		triggerOnce: false,
	});

	const variants = {
		hidden: { opacity: 0, x: 1000 },
		visible: { opacity: 1, x: 0 },
	};


	return (
		<>

			<div className="section big-55-height over-hide">

				<div id="poster_background-explore"></div>
				<div id="video-wrap" className="parallax-top">
					<div className="parallax parallax-top" style={{ backgroundImage: "url('src/img/mauli.jpg')" }}></div>
				</div>
				<div className="dark-over-pages"></div>

				<div className="hero-center-section pages">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12 parallax-fade-top">
								<motion.div className="hero-text"
									initial={{ x: -1500 }}
									animate={{ x: 0 }}
									transition={{ delay: .8, duration: 1 }}
								>Explore Pandharpur</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<motion.div className="section padding-top-bottom over-hide"
				initial={{ x: -1500 }}
				animate={{ x: 0 }}
				transition={{ delay: 1.2, duration: 1 }}
			>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<p className="m-0">&emsp;This is a holy place of <b>Shri.Vitthal & Shri.Rukmini.</b> It is also known as the <b>Southern Kashi of India & Kuldaivat of Maharashtra State.</b> It is located at a distance of 72 kms by road. from Solapur District headquarters. The Pandharpur Railway Station falls on the Miraj-Kurduwadi-Latur railway track.
									The ancient temple of <b>Shri.Vitthal</b> was renovated in 1195 A.D. There are many other temples of Indian Dieties and Mathas <b>(Dharmshalas)</b> of many Saints. The Chandrabhaga <b>(Bhima)</b> river flows through the City. Large number of devotees from all over Maharashtra and surrounding States gather at Pandharpur
									mainly to celebrate the Aashadhi and Kartiki Ekadashis every year in addition to the regular rush of devotees everyday.
									The Palaquins <b>(Palakhi)</b> of various Saints originating from various locations gather at Wakhari, five kms. from Pandharpur for the Waari festival. The various daily rituals like Kakda Aarati, Mahapooja, Mahanaivedhya, Poshakh, Dhooparati, Padyapooja, Shejarti etc are performed in the main temple of <b>Lord.Vitthal.</b> The following are the temples inside the main temple as one enters from Namdev Payari and come out of Pachhim Dwar of the temple.
									<br></br><br></br>
									&emsp;pandharpur is the hidden gem of maharashtra. preserved safely in the hearts of millions of maharashtrain people. for many maharashrian people, it is must to visit this place once in a life time.i have heard that you get the benefit of all the tirth yatras you had done in your life, when you visit this place.
									<br></br><br></br>
									personally, i had never heard about pandharpur till few months ago when i saw the saint dnyaneshwar and saint tukaram movie. both these movies left such a deep impact in my heart that i went further to see many spiritual movies and also visited many temples of maharashtra. in fact, the idea of this blog came during these spiritual trips only. needless, to say that all this had an very deep impact on my consciousness and it brought a lot of transformation in my life. financially it was very draining but spiritually very rewarding.after watching many movies of maharashtrian saints who are devotee of lord vitthal or panduranga, i always wanted to visit this mystical town of pandharpur which is blessed with the feet of so many saints and devotees. when i visited the temple, i thought that once upon a time saint dnyaneshwar or tukaram or namdev must have also visited this temple and seen what i am seeing today.
									<br></br><br></br>
									this is a special post for me as i will always be cherishing my visit to rukmani vitthal temple in pandharpur and the peace which i experienced inside the temple. now also when i recollect, i feel i am sitting inside the temple courtyard.
									<br></br><br></br>
									pandharpur is the most important and one of the oldest pilgrimage center of maharashra. the whole bhakti movement of maharashtra is centered around lord vitthal. vitthal is a mischievous form of krishna (vishnu) in child form. he blesses his devotees in his own mischievous ways. he is mischievous but compassionate and always protects his devotees. there are stories of so many saints who have been blessed with his presence. who have played with him, seen him, worshipped him and are blessed by him.
									<br></br><br></br>
									vitthal has inspired devotion in the heart of many pious souls and saints. many songs have been written and sung in his glory. the foremost saints connected with lord vitthal are saint dnyaneshwar, tukaram, namdev, gora kumbhar, chokhamela, narahari, kanhopatra, muktai and so on. when you talk about lord vitthal then it is must to write about varkari sect and dindi yatra which takes place during ashadh (june–july) month.
									<br></br><br></br>
									saint  gyaneshwar is one of the foremest saint of maharashtra who translated geeta in to marathi language at the age of 16 and took samadhi at the early age of 21. he started the varkari sect. varkari sect people are pure vegetarian (they don’t even eat onions and garlic) and are devotee of lord vitthal. simple, honest and god loving people, thats how i will describe the people of varkari sect. if you have heard about mumbai dabbawalas, they are mostly from varkari sect.
									<br></br><br></br>
									the varkari sect takes a dindi yatra to pandharpur during ashadh (june–july) month. thats the best time to visit pandharpur. because it is said that lord vitthal had promised tukaram that whoever will come to pandharpur during ashadh month will be blessed by lord vitthal and rukmani ma. so lakhs of devotees make it a point to visit the temple during that time. there is a big queue for darshan during ekadashi days.
									<br></br><br></br><br></br>
									<h4>how to visit pandharpur:</h4>
									<br></br>
									1. distance from pune – 208 km (via pune solapur highway. very good highway condition as of oct 2014). pune is the nearest airport.<br></br>
									2. distance from solapur – 69 km (in car, it actually it takes one hour as the roads are very good). nearest city with good hotels.<br></br>
									3. distance from kolhapur – 181 km via NH 204. (route via sangli was not good during oct 2014. take the sangli route only if you want to visit narsobadi wadi and ganesha temple on the way).<br></br>
									4. distance from mumbai – 354 km.<br></br>
									5. distance from ratnagiri – 310 km<br></br>
									6. distance from nashik – 344 km<br></br>
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<div className="section padding-bottom over-hide">
				<div className="section z-bigger">
					<div className="container">
						<div className="row">

							<div className="col-12 mt-4">
								<motion.div className="img-wrap"
									initial={{ opacity: 0, scale: 0 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 1 }}
								>
									<img src={IMAGES.about} alt="" />
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<motion.div className="section padding-top-bottom over-hide"
				ref={ref}
				initial={{ x: -1500 }}
				animate={inView ? "visible" : "hidden"}
				variants={variants}
				transition={{ delay: .5, duration: 1 }}
			>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<p className="m-0">Pandharpur is a Popular pilgrimage town, on the banks of Candrabhagā River, near Solapur city in Solapur District, Maharashtra, India. Its administrative area is one of eleven tehsils in the District, and it is an electoral constituency of the state legislative assembly (vidhan sabha). The Vithoba temple attracts about a million Hindu pilgrims during the major yātrā (pilgrimage) in Ashadha (June–July).</p>
								<p className="m-0">A small temple of Śri Vitthala-Rukmini is also located, which is as old as the main Vitthala-Rukmini Mandir, in Isbavi area of Pandharpur known as Wakhari Va Korti Devalayas and also known as Visava Mandir. The Bhakti Saint, Chaitanya Mahaprabhu, is said to have spent a period of 7 days in city at the Vithobha Temple. It is said that the deity Vithoba has been worshipped by many saints of Maharashtra. Sant Dnyaneshwar, Sant Tukārām, Sant Nāmdev, Sant Eknāth, Sant Nivruttināth, Sant Muktābai, Sant Chokhāmel̥ā, Sant Savatā Māli, Sant Narhari Sonār, Sant Gorā Kumbhār, Sant Meerā Bai and Sant Gajānan Mahāraj are a few of those prominent saints.</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
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
									<img src={IMAGES.explore2} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>night life</em></strong></p>
							</div>
							<div className="col-md-6 mt-4 mt-md-0">
								<div className="img-wrap">
									<img src={IMAGES.explore3} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>night life</em></strong></p>
							</div>
							<div className="col-12 mt-4">
								<div className="img-wrap">
									<img src={IMAGES.explore4} alt="" />
								</div>
								<p className="mb-0 mt-3 color-black text-center"><strong><em>mauli wari</em></strong></p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div className="section padding-bottom over-hide"
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6 }}
			>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<p className="m-0">Pandharpur Wari or Wari is a yatra to Pandharpur, Maharashtra, to honor Vithoba. It involves carrying the paduka of a saint in a palkhi, most notably of Dnyaneshwar and Tukaram, from their respective shrines to Pandharpur. Many pilgrims join this procession on foot. Warkari is a Marathi term which means "one who performs the wari". The tradition is more than 700 to 800 years old.</p><br />
								<p className="m-0">Marches happen on foot from various locations in Maharashtra to Vithoba Temple. The journey takes 21 days. Many palkis join the main Tukaram and Dnyaneshwar palkhis along the way. Two specific pilgrimages honor the two most revered palkhis, starting from their towns located in Pune district of Maharashtra: Sant Dnyaneshwar's palkhi leaves from Alandi, while Tukaram's begins at Dehu. The wari culminates at the Vithoba Temple on the holy occasion of Shayani Ekadashi. Devotees from across Maharashtra and nearby areas leave for Pandharpur, wearing holy basil beads and singing the glories of Vithoba and songs like "Gyanba Tukaram", commemorating the saints. When they reach Pandharpur on Shayani Ekadashi, the devotees bathe in the sacred Bhima River before visiting the temple.</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default ExploreCity