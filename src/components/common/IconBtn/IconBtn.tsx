import React from 'react';
import type { SVGProps } from 'react';
import * as S from './IconBtn.styled';

interface IconBtnProps {
	icon: string | React.ReactElement<SVGProps<SVGSVGElement>>;
	size: 'medium' | 'small';
	disabled?: boolean;
	ariaLabel?: string;
	onClick: () => void;
}

const IconBtn = ({
	icon,
	size,
	disabled,
	ariaLabel,
	onClick,
}: IconBtnProps) => {
	return (
		<S.Container
			type="button"
			$size={size}
			disabled={disabled}
			aria-label={ariaLabel}
			aria-disabled={disabled}
			onClick={onClick}
		>
			{typeof icon === 'string' ? (
				<S.ImageIcon src={icon} alt={ariaLabel} />
			) : (
				<S.SvgIconWrapper>{icon}</S.SvgIconWrapper>
			)}
		</S.Container>
	);
};

export default IconBtn;
