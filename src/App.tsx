import { Select } from '@/components/UI/Select/Select'
import { Status } from './components/UI/Status/Status'
import ButtonUpdate from './components/UI/ButtonUpdate/ButtonUpdate'

function App() {
	return (
		<div className='w-full h-screen bg-black p-10'>
			<Status variant='finished' />
			<ButtonUpdate isLoading />
			<Select
				options={[
					{ label: 'Все статусы', value: 1 },
					{ label: 'Live', value: 2 },
					{ label: 'Finished', value: 3 },
					{ label: 'Match preparing', value: 4, disabled: true },
				]}
			/>
		</div>
	)
}

export default App
