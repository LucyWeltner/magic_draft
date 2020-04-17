export const getPacks = () => {
	return (dispatch) => {
		fetch('http://localhost:3000/cards/packs').then(response => response.json()).then(packs => dispatch({type: 'get_packs', packs}))
	}
}

export const getDecks = () => {
	return (dispatch) => {
		fetch('http://localhost:3000/cards/decks').then(response => response.json()).then(decks => dispatch({type: 'get_decks', decks}))
	}
}

export const draftCard = (name) => {
	return {type: 'draft_card', name: name}
}

export const nextPack = () => {
	return {type: 'next_pack'}
}

export const saveDeck = (deck) => {
	return (dispatch) => {
		let configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
				"Accept": "application/json"
			}
			body: JSON.stringify(deck)
		}
		fetch('http://localhost:3000/cards/', configObj).then(response => response.json()).then(json => console.log(json)).catch(error => alert("There was a problem saving your deck. Please try again."))
	}
}