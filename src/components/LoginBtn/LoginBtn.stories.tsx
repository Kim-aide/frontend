import type { Meta, StoryObj } from '@storybook/react';
import LoginBtn from './LoginBtn';

/**
 * 소셜 로그인 공용 버튼 스토리입니다.
 *
 * - `type`: 소셜 로그인 버튼 타입을 설정합니다.(ex: google, naver)
 */

const meta: Meta<typeof LoginBtn> = {
	title: 'components/LoginBtn',
	component: LoginBtn,
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof LoginBtn>;

export const Google: Story = {
	args: {
		type: 'google',
	},
};

export const Naver: Story = {
	args: {
		type: 'naver',
	},
};
