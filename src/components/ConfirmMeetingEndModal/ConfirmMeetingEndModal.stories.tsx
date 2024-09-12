import type { Meta, StoryObj } from '@storybook/react';
import ConfirmMeetingEndModal from './ConfirmMeetingEndModal';
import { useState } from 'react';

/**
 * `<ConfirmMeetingEndModal>`은 회의 종료를 선택한 사용자에게 확인차로 정말로 모든 사용자에 대해 회의를 종료하는지가 맞는지를 묻기 위한 모달 컴포넌트입니다.
 */
const meta: Meta<typeof ConfirmMeetingEndModal> = {
	title: 'components/MeetingExitBtn/ConfirmMeetingEndModal',
	component: ConfirmMeetingEndModal,
	argTypes: {
		roomName: {
			description: '현재 참여하고 있는 회의방의 이름입니다.',
		},
		open: {
			description: '해당 모달이 열려 있는지의 여부입니다.',
			control: 'none',
		},
		onClose: {
			description: '모달을 닫을 때 실행시킬 콜백 함수입니다.',
		},
		onConfirm: {
			description: '회의 종료를 할 때 실행시킬 콜백 함수입니다.',
		},
	},
};
export default meta;

type Story = StoryObj<typeof ConfirmMeetingEndModal>;

/**
 * 모달을 여는 버튼은 본 컴포넌트에 포함되지 않습니다. 이 컴포넌트를 사용하여 구현할 경우 이에 맞는 적절한 UI를 구현해 주세요.
 */
export const Default: Story = {
	render: (_, { args }) => {
		const [open, setOpen] = useState(false);

		return (
			<div>
				<button
					type="button"
					style={{
						padding: '12px',
						borderRadius: '4px',
						backgroundColor: '#222222',
						color: 'white',
						fontSize: '16px',
						fontWeight: 600,
					}}
					onClick={() => {
						setOpen(true);
					}}
				>
					모달 열기
				</button>
				<ConfirmMeetingEndModal
					roomName={args.roomName}
					open={open}
					onClose={() => {
						setOpen(false);
					}}
					onConfirm={() => {}}
				/>
			</div>
		);
	},
	args: {
		roomName: '(주)김비서소프트 1차 임원 회의',
	},
};
