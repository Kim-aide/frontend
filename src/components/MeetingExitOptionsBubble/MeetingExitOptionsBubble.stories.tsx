import type { Meta, StoryObj } from '@storybook/react';
import MeetingExitOptionsBubble from './MeetingExitOptionsBubble';

/**
 * `<MeetingExitOptionsBubble>`은 사용자가 회의를 나갈 지, 모든 참가자에 대해 회의를 종료시킬 지를 선택할 수 있는 두 버튼이 담긴 컴포넌트입니다.
 */
const meta: Meta<typeof MeetingExitOptionsBubble> = {
	title: 'components/MeetingExitBtn/MeetingExitOptionsBubble',
	component: MeetingExitOptionsBubble,
	argTypes: {
		onMeetingExit: {
			description:
				'사용자가 "회의 나가기"를 선택할 경우 실행시킬 콜백 함수입니다.',
		},
		onMeetingEnd: {
			description:
				'사용자가 "모든 참가자에 대해 회의 종료하기"를 선택할 경우 실행시킬 콜백 함수입니다.',
		},
	},
};
export default meta;

type Story = StoryObj<typeof MeetingExitOptionsBubble>;

export const Default: Story = {
	args: {},
};
