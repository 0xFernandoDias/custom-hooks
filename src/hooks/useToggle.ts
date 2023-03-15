import { useReducer } from "react"

const reducer = (state: { isVisible: boolean }, action: { type: "Toggle" }) => {
	switch (action.type) {
		case "Toggle":
			return { isVisible: !state.isVisible }
		default:
			return state
	}
}

export const useToggle = (initialValue = false) => {
	const [{ isVisible }, dispatch] = useReducer(reducer, {
		isVisible: initialValue,
	})

	const toggle = () => dispatch({ type: "Toggle" })

	return { isVisible, toggle }
}
