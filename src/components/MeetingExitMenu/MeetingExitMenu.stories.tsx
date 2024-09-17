import type { Meta, StoryObj } from '@storybook/react';
import MeetingExitMenu from './MeetingExitMenu';

/**
 * `<MeetingExitMenu>`은 사용자가 회의를 나가거나 회의를 종료할 때 사용하는 메뉴 전체를 담당하는 컴포넌트입니다.
 *
 * 회의를 나갈 때 사용하는 버튼, 말풍선 형태의 메뉴, 그리고 회의 종료 시의 최종 확인 모달로 이루어져 있습니다.
 */
const meta: Meta<typeof MeetingExitMenu> = {
	title: 'components/MeetingExitMenu',
	component: MeetingExitMenu,
	argTypes: {
		roomName: {
			description: '현재 참여하고 있는 회의방의 이름입니다.',
		},
		onMeetingExit: {
			description:
				'사용자가 최종적으로 회의를 나가는 것을 선택했을 때 실행시킬 콜백 함수입니다.',
		},
		onMeetingEnd: {
			description:
				'사용자가 최종적으로 모든 사용자에 대해 회의를 종료하는 것을 선택했을 때 실행시킬 콜백 함수입니다.',
		},
	},
};
export default meta;

type Story = StoryObj<typeof MeetingExitMenu>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-end',
					width: '100%',
					height: '200px',
				}}
			>
				<Story />
			</div>
		),
	],
	args: {
		roomName: '(주)김비서소프트 1차 임원 회의',
	},
};
