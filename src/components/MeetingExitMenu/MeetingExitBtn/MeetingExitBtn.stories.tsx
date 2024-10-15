import type { Meta, StoryObj } from '@storybook/react';
import MeetingExitBtn from './MeetingExitBtn';

/**
 * `<MeetingExitBtn>`은 사용자가 회의를 나가거나 모든 사용자에 대해 회의를 끝날 때 사용하는 버튼입니다.
 */
const meta: Meta<typeof MeetingExitBtn> = {
	title: 'components/MeetingExitMenu/MeetingExitBtn',
	component: MeetingExitBtn,
	argTypes: {
		onClick: {
			description: '이 버튼을 클릭했을 때 호출할 콜백 함수를 의미합니다.',
		},
	},
};
export default meta;

type Story = StoryObj<typeof MeetingExitBtn>;

export const Default: Story = {
	args: {},
};
