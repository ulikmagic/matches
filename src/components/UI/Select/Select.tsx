import type { FC } from 'react'
import type { SelectProps } from './types'

import SelectLib from 'react-select'
import { ArrowSelect } from './components/ArrowSelect'
import { Option } from './components/Option'

export const Select: FC<SelectProps> = ({ options }) => {
	return (
		<SelectLib
			options={options}
			components={{ Option, DropdownIndicator: ArrowSelect }}
			classNames={{
				indicatorSeparator: () => 'hidden',
				valueContainer: () => '!p-0',
				input: () => '!p-0 !m-0',
				placeholder: () => '!text-grey group-hover:!text-white',
				menu: () => '!rounded-md !bg-black-200',
				menuList: () => '!py-1.5',
				singleValue: () =>
					'font-medium text-base group-hover:!text-white !text-grey',
				control: () =>
					'!bg-black-100 group h-14 active:!bg-black-100 active:!border-black-300 hover:!bg-black-200 !shadow-none !border-black-100 flex gap-3 p-4 pr-5 !cursor-pointer',
			}}
		/>
	)
}
