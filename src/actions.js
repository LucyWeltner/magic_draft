export const getPacks = () => {
	return (dispatch) => {
		fetch('localhost:3000/cards/packs').then(response => response.json()).then(packs => dispatch({action: 'get_packs', packs}))
	}
}

export const draftCard = (card) => {
	return {type: 'draft_card', card: card}
}

export const nextPack = () => {
	return {type: 'next_pack'}
}