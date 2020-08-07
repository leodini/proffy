import React from 'react'

import whatsappIcon from '../../images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars0.githubusercontent.com/u/21128553?s=460&u=8e97b47f93c40c275b7e60f475f90cb79dc5e59f&v=4"
					alt="leonardo dini"
				/>
				<div>
					<strong>Leonardo Dini</strong>
					<span>Quimica</span>
				</div>
			</header>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				<br />
				Accusantium, saepe consequatur dolore blanditiis ipsam nam. Incidunt
				nulla corrupti sapiente, debitis eligendi praesentium, non, voluptates
				dolore et recusandae est quod reiciendis!
			</p>

			<footer>
				Preço/hora
				<strong>R$ 80,00</strong>
				<button>
					<img src={whatsappIcon} alt="whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem
