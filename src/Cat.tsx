import { useGetCat } from "./hooks/useGetCat"

function Cat() {
	const { data, isCatLoading, refetchData } = useGetCat()

	if (isCatLoading) return <>...loading</>

	return (
		<>
			<button type="button" onClick={refetchData}>
				Refetch
			</button>
			<h1>{data?.fact}</h1>
		</>
	)
}

export default Cat
