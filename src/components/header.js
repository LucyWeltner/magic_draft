import React from 'react'

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<img src="https://miro.medium.com/max/1400/1*I9FzTNOaLYgXnsAT-qPUeA.jpeg" alt="Archon of the Falling Stars" className="header-img" id="archonfs"/>
				<img src="https://miro.medium.com/max/2400/0*nzS3B9uuwJQxms1i.jpg" alt="Archon of Absolution" className="header-img" id="archona"/>
				<img src="https://miro.medium.com/max/1252/0*ICgXUC-c3fBu42lY.jpg" alt="Harmonious Archon" className="header-img" id="harchon"/>
				<h2 id="header-text"><b>Doin' Some Magic</b></h2>
				<nav><a href="/decks/new"><i>Draft A Deck</i></a><span>   </span><a href="/decks"><i>See Your Decks</i></a></nav>
			</div>
		)
	}
}

// https://d1rw89lz12ur5s.cloudfront.net/photo/crazytimmy/file/1398973/large/13091964_1744260412527323_88520436088152191_n.jpg?1487965218

