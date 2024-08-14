import type { SVGProps } from 'react';
import * as S from './IconTextBtn.styled';

interface IconTextBtnProps {
	icon: string | React.ReactElement<SVGProps<SVGSVGElement>>;
	text: string;
	onClick: () => void;
}

const IconTextBtn = (props: IconTextBtnProps) => {
	return (
		<S.IconTextBtn onClick={props.onClick}>
			{typeof props.icon === 'string' ? (
				<S.IconImg src={props.icon} alt="" />
			) : (
				<S.SvgIcon>{props.icon}</S.SvgIcon>
			)}
			<S.IconText>{props.text}</S.IconText>
		</S.IconTextBtn>
	);
};

export default IconTextBtn;
