import { FC } from 'react'
import { StatusVariant, Variants } from './types'
import clsx from 'clsx'

const variants: Variants = {
	live: {
		text: 'Live',
		className: 'bg-green w-[70px] sm:w-22',
	},
	finished: {
		text: 'Finished',
		className: 'bg-red w-[70px] sm:w-22',
	},
	preparing: {
		text: 'Match preparing',
		className: 'bg-orange w-28',
	},
}

export const Status: FC<{ variant: StatusVariant }> = ({ variant }) => {
	const current = variants[variant]
	return (
		<div
			className={clsx(
				current.className,
				'text-white text-xs flex items-center justify-center font-semibold py-1 sm:py-1.5 rounded-sm'
			)}
		>
			{current.text}
		</div>
	)
}
