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
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(deck)
		}
		fetch('http://localhost:3000/decks', configObj).then(response => response.json()).then(json => console.log(json))
		.catch(error => {
    		alert("Something went wrong trying to save your deck")
    		console.log(error.message)
  		})
	}
}

export const deleteCard = (deck_id, card_id) => {
	return (dispatch) => {
		let configObj = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json"
			},
			body: JSON.stringify({card_id: card_id})
		}
		fetch(`http://localhost:3000/decks/${deck_id}/cards/${card_id}`, configObj)
	}
}