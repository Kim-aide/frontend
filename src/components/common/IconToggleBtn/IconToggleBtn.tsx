import React from 'react';
import type { SVGProps } from 'react';
import * as S from './IconToggleBtn.styled';

interface IconToggleBtnProps {
	activeIcon: string | React.ReactElement<SVGProps<SVGSVGElement>>;
	inactiveIcon: string | React.ReactElement<SVGProps<SVGSVGElement>>;
	isActive: boolean;
	disabled?: boolean;
	ariaLabel?: string;
	onClick: (toggleState: boolean) => void;
}

const IconToggleBtn = ({
	activeIcon,
	inactiveIcon,
	isActive,
	disabled,
	ariaLabel,
	onClick,
}: IconToggleBtnProps) => {
	return (
		<S.Container
			type="button"
			$isActive={isActive}
			disabled={disabled}
			aria-label={ariaLabel}
			aria-pressed={isActive}
			aria-disabled={disabled}
			onClick={() => {
				onClick(!isActive);
			}}
		>
			{isActive ? (
				typeof activeIcon === 'string' ? (
					<S.ImageIcon src={activeIcon} $isActive={isActive} alt={ariaLabel} />
				) : (
					<S.SvgIconWrapper $isActive={isActive}>{activeIcon}</S.SvgIconWrapper>
				)
			) : typeof inactiveIcon === 'string' ? (
				<S.ImageIcon src={inactiveIcon} $isActive={isActive} alt={ariaLabel} />
			) : (
				<S.SvgIconWrapper $isActive={isActive}>{inactiveIcon}</S.SvgIconWrapper>
			)}
		</S.Container>
	);
};

export default IconToggleBtn;
