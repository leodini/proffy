import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../images/logo.svg'
import landingImg from '../../images/landing.svg'

import studyIcon from '../../images/icons/study.svg'
import giveClassesIcon from '../../images/icons/give-classes.svg'
import purpleHeartIcon from '../../images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
	return (
		<div id="page-landing">
			<div className="container" id="page-landing-content">
				<div className="logo-container">
					<img src={logoImg} alt="Proffy" />
					<h2>Sua plataforma de estudos online.</h2>
				</div>

				<img
					src={landingImg}
					alt="Plataforma de estudos"
					className="hero-image"
				/>

				<div className="buttons-container">
					<Link to="/study" className="study">
						<img src={studyIcon} alt="estudar" />
						Estudar
					</Link>
					<Link to="/give-classes" className="give-classes">
						<img src={giveClassesIcon} alt="Dar aulas" />
						Dar aulas
					</Link>
				</div>

				<span className="total-connections">
					Total de 200 conexões já realizadas{' '}
					<img src={purpleHeartIcon} alt="coração roxo" />
				</span>
			</div>
		</div>
	)
}

export default Landing
