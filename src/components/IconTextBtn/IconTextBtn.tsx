import React from 'react';
import type { SVGProps } from 'react';
import * as S from './IconTextBtn.styled';

interface IconTextBtnProps {
	icon: string | React.ReactElement<SVGProps<SVGSVGElement>>;
	text: string;
}

const IconTextBtn = (props: IconTextBtnProps) => {
	return (
		<S.IconTextBtn>
			{typeof props.icon === 'string' ? (
				<S.IconImg src={props.icon} />
			) : (
				<S.SvgIcon>{props.icon}</S.SvgIcon>
			)}
			<S.IconText>{props.text}</S.IconText>
		</S.IconTextBtn>
	);
};

export default IconTextBtn;
