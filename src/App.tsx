import { useToggle } from "./hooks/useToggle"

function App() {
	const { isVisible, toggle } = useToggle()

	return (
		<>
			<button type="button" onClick={toggle}>
				{isVisible ? "Hide" : "Show"}
			</button>
			{isVisible && <p>Hidden text</p>}
		</>
	)
}

export default App
