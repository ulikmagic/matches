import type { FC } from 'react'
import type { SelectProps } from './types'

import { ArrowSelect } from '@/assets/icons'
import SelectLib from 'react-select'
import clsx from 'clsx'

export const Select: FC<SelectProps> = ({ options }) => {
	return (
		<SelectLib
			className='select-wrapper'
			options={options}
			components={{
				DropdownIndicator: ({ selectProps }) => (
					<div className='w-5 !h-5 flex items-center justify-center'>
						<ArrowSelect
							className={clsx(
								'w-3 duration-400 cursor-pointer group-hover:text-white text-grey',
								selectProps.menuIsOpen && 'rotate-180'
							)}
						/>
					</div>
				),
			}}
			classNames={{
				indicatorSeparator: () => 'hidden',
				valueContainer: () => '!p-0',
				input: () => '!p-0 !m-0',
				placeholder: () => '!text-grey',
				singleValue: () =>
					'font-medium text-base group-hover:!text-white !text-grey',
				control: () =>
					'!bg-black-light group h-14 active:!bg-black-light active:!border-black-border hover:!bg-black-hover !inline-flex !shadow-none !border-black-light flex gap-3 p-4 pr-5 !cursor-pointer',
			}}
		/>
	)
}
