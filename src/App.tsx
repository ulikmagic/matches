import { Select } from '@/components/UI/Select/Select'

function App() {
	return (
		<div className='w-full h-screen bg-main-black p-10'>
			<Select
				options={[
					{ label: 'Все статусы', value: 1 },
					{ label: 'Live', value: 2 },
					{ label: 'Finished', value: 3 },
					{ label: 'Match preparing', value: 4 },
				]}
			/>
		</div>
	)
}

export default App
