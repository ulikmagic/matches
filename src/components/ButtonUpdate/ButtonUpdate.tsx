import type { ButtonHTMLAttributes, FC } from 'react'

import RefreshIcon from '../../assets/icons/refresh.svg?react'

const ButtonUpdate: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	...props
}) => {
	return (
		<button {...props}>
			{children || 'Обновить'} <RefreshIcon />
		</button>
	)
}

export default ButtonUpdate
