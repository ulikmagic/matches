import { Status } from '@/components/UI/Status/Status'
import { TeamInfo } from './components/TeamInfo'
import TeamLogoImage from '@/assets/icons/team-logo.svg'

export const Card = () => {
	return (
		<div className='bg-black-100 rounded-sm min-h-card p-2 sm:p-4 w-full flex items-center justify-between'>
			<TeamInfo title='Command №1' logo={TeamLogoImage} />
			<div className='flex flex-col items-center gap-1'>
				<p className='font-semibold text-sm sm:text-xl text-white'>2 : 1</p>
				<Status variant='live' />
			</div>
			<TeamInfo reverse title='Command №2' logo={TeamLogoImage} />
		</div>
	)
}
