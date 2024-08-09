import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ChatMenu from './ChatMenu';

/**
 * `ChatMenu`는 채팅창 사이드 바(`ChatSidebar`)와 채팅창을 열고 닫을 수 있는 채팅 버튼(`ChatBtn`)을 통틀어 묶은 컴포넌트입니다.
 * - 채팅이 포함되어 있는 예시를 보시고자 한다면, `ChatSidebar` 스토리북 페이지를 열람해 주십시오.
 */
const meta = {
	title: 'components/ChatMenu',
	component: ChatMenu,
} satisfies Meta<typeof ChatMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<div
				style={{
					width: '100%',
					height: '100vh',
				}}
			>
				<Story />
			</div>
		),
	],
	args: {},
};
