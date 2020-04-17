
export default function magicReducer(state={deck: [], packs: [], current_pack: [], turn: 0, decks: []}, action) {
	switch (action.type) {
		case 'get_packs':
			return {...state, packs: action.packs, current_pack: action.packs[0], turn: 0}
		case 'get_decks':
			return {...state, decks: action.decks}
		case 'draft_card':
			// find and remove the card the user just drafted from its pack
			let currentPackCopy = state.current_pack.slice()
			let index = state.current_pack.findIndex(card => card.name === action.name)
			let card = state.current_pack.find(card => card.name === action.name)
			currentPackCopy.splice(index, 1)
			// Remove random cards from the packs the user did not just pick from
			let newPacks = state.packs.map((pack, index) => {
				if (index !== (state.turn)%6) {
					let found = pack.find((card) => card.rarity === "rare" || card.rarity === "mythic rare")
					if (found) {
						return pack.filter((card) => card.rarity !== "rare" && card.rarity !=="mythic rare")
					}
					else {
						let number = Math.floor(Math.random*pack.length)
						let packCopy = pack.slice()
						packCopy.splice(number, 1)
						return packCopy
					}
				}
				else {
					return currentPackCopy
				}
			})
			return {...state, turn: state.turn + 1, packs: newPacks, current_pack: newPacks[state.turn%5+1], deck: [...state.deck, card]}
		default:
			return state
	}
}