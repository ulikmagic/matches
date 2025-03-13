import type { FC } from 'react'
import type { OptionProps } from 'react-select'
import type { OptionType } from '../types'

import clsx from 'clsx'

export const Option: FC<OptionProps<OptionType, false>> = ({
	innerProps,
	data,
	isSelected,
}) => {
	return (
		<div
			{...innerProps}
			className={clsx(
				'bg-black-200 p-3 text-grey cursor-pointer font-medium hover:bg-black-400 active:bg-black-500 hover:text-white',
				isSelected && 'bg-black-400 text-white',
				data.disabled && 'bg-black-200 text-grey-100 pointer-events-none'
			)}
		>
			{data.label}
		</div>
	)
}
