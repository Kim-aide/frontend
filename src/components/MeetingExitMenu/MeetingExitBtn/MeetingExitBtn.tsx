import * as S from './MeetingExitBtn.styled';
import { CallEndIcon } from '../../../assets/svg';
import type { MouseEvent } from 'react';

interface MeetingExitBtnProps {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const MeetingExitBtn = (props: MeetingExitBtnProps) => {
	const { onClick } = props;

	return (
		<S.Container onClick={onClick} aria-label="회의 나가기">
			<CallEndIcon />
		</S.Container>
	);
};

export default MeetingExitBtn;
