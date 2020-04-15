export const getPacks = () => {
	return (dispatch) => {
		fetch('http://localhost:3000/cards/packs').then(response => response.json()).then(packs => dispatch({type: 'get_packs', packs}))
	}
}

export const draftCard = (card) => {
	return {type: 'draft_card', card: card}
}

export const nextPack = () => {
	return {type: 'next_pack'}
}