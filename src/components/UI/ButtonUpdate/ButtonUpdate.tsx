import type { FC } from 'react'

import RefreshIcon from '@/assets/icons/refresh.svg?react'
import clsx from 'clsx'
import { ButtonUpdateProps } from './types'

const ButtonUpdate: FC<ButtonUpdateProps> = ({
	children,
	isLoading,
	...props
}) => {
	const defaultClassName =
		'flex py-3.5 bg-red px-10 gap-x-2.5 items-center justify-center rounded-sm cursor-pointer font-semibold text-lg w-full sm:w-auto hover:bg-red-pressed'
	const loadingClassName = 'bg-red-disabled text-disabled pointer-events-none'
	return (
		<button
			{...props}
			className={clsx(
				props.className,
				isLoading && loadingClassName,
				defaultClassName
			)}
		>
			{children || 'Обновить'}{' '}
			<RefreshIcon
				className={clsx('w-6.5 h-6.5', isLoading && 'opacity-50 animate-spin')}
			/>
		</button>
	)
}

export default ButtonUpdate
