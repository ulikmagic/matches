import type { FC } from 'react'
import type { TeamInfoProps } from '../types'

import clsx from 'clsx'

export const TeamInfo: FC<TeamInfoProps> = ({ title, logo, reverse }) => (
	<div
		className={clsx(
			'flex items-center gap-1.5 sm:gap-3.5',
			reverse && 'flex-row-reverse'
		)}
	>
		<img src={logo} className='w-7 h-7 sm:w-12 sm:h-12' alt='logo-team' />
		<p className='text-white font-semibold text-sm sm:text-base whitespace-nowrap'>
			{title}
		</p>
	</div>
)
