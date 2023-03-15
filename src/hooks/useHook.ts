import { useReducer } from "react"

const reducer = (state: {}, action: { type: "" }) => {
	switch (action.type) {
		case "":
			return {}
		default:
			return state
	}
}

export const useHook = () => {
	const [state, dispatch] = useReducer(reducer, {})

	const toggle = () => dispatch({ type: "" })

	return { state, toggle }
}
