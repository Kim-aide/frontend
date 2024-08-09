import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ChatSidebar from './ChatSidebar';

/**
 * `ChatSidebar`은 우측에 고정되도록 고안된 사이드 바 형식의 채팅 컴포넌트입니다.
 * - `Shift + Enter` 시 메시지를 전송하는 대신 다음 줄에 채팅을 이어서 입력할 수 있습니다.
 */
const meta = {
	title: 'components/ChatMenu/ChatSidebar',
	component: ChatSidebar,
	argTypes: {
		open: {
			description: '사이드 바가 열려있는지를 의미합니다.',
		},
		top: {
			description:
				'사이드 바를 최상단으로부터 얼마나 아래로 배치할 것인지를 의미합니다.',
		},
		height: {
			description: '사이드 바의 높이를 의미합니다.',
		},
		messageInfos: {
			description: '표시할 채팅 기록들을 의미합니다.',
			control: { type: 'none' },
		},
		onSendMessage: {
			description:
				'사용자가 채팅을 적은 후 메시지를 전송했을 때 실행시킬 콜백 함수를 의미합니다.',
		},
	},
} satisfies Meta<typeof ChatSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const messageInfos = [
	{
		id: 1,
		avatar:
			'https://github.com/user-attachments/assets/79737ad5-e91c-40db-85d0-32e76fae718b',
		nickname: 'DreamLight',
		createdAt: new Date('2024-07-25 09:00:00'),
		message: '요즘 밤하늘에 반짝이는 별들 중에 가장 신비로운 별은 어떤 걸까?',
	},
	{
		id: 2,
		avatar:
			'https://github.com/user-attachments/assets/bc85b50e-738e-428e-ba1e-109461ac7885',
		nickname: '토끼',
		createdAt: new Date('2024-07-25 09:01:40'),
		message:
			'아마 시리우스일 거야. 시리우스는 밤하늘에서 가장 밝게 빛나며, 고대부터 많은 전설과 신화에 등장하잖아.',
	},
	{
		id: 3,
		avatar:
			'https://github.com/user-attachments/assets/3b6a03b2-5730-4c56-9e64-6f3bb18caf0e',
		nickname: '0123456789-_!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		createdAt: new Date('2024-07-25 09:03:50'),
		message:
			'맞아, 시리우스는 예로부터 사람들에게 신비로운 존재로 여겨졌지. 최근에 쌍성계에 대해 읽었는데, 시리우스도 쌍성계에 속해 있더라고. 마치 보이지 않는 비밀을 품고 있는 것처럼.',
	},
	{
		id: 4,
		avatar:
			'https://github.com/user-attachments/assets/38debe2f-064d-48b1-a87c-dc56b6b5fe84',
		nickname: 'Researcher',
		createdAt: new Date('2024-07-25 09:04:15'),
		message:
			"Indeed, Sirius is part of a binary star system. There's Sirius A, which shines brightly, and its mysterious companion, Sirius B, a white dwarf. The idea of these stars dancing together through space is quite enchanting.",
	},
	{
		id: 5,
		avatar:
			'https://github.com/user-attachments/assets/79737ad5-e91c-40db-85d0-32e76fae718b',
		nickname: 'DreamLight',
		createdAt: new Date('2024-07-25 09:05:00'),
		message:
			'와, 그건 몰랐네. 그래서 시리우스가 더 신비롭게 느껴져. 우리 은하에 얼마나 많은 쌍성계가 숨겨져 있을지 궁금해지네.',
	},
	{
		id: 6,
		avatar:
			'https://github.com/user-attachments/assets/bc85b50e-738e-428e-ba1e-109461ac7885',
		nickname: '토끼',
		createdAt: new Date('2024-07-25 09:05:30'),
		message:
			'연구에 따르면 우리 은하의 절반 이상의 별들이 쌍성계 또는 다중성계라고 해. 그 안에 얼마나 많은 이야기가 숨겨져 있을지 상상해 봐.',
	},
	{
		id: 7,
		avatar:
			'https://github.com/user-attachments/assets/3b6a03b2-5730-4c56-9e64-6f3bb18caf0e',
		nickname: '0123456789-_!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		createdAt: new Date('2024-07-25 09:08:00'),
		message:
			'최근에 화성 탐사 소식 들었어? 새로운 로버가 화성에 착륙했다고 하던데, 화성의 붉은 사막 속에 감춰진 비밀들을 풀어낼 수 있을까?',
	},
	{
		id: 8,
		avatar:
			'https://github.com/user-attachments/assets/38debe2f-064d-48b1-a87c-dc56b6b5fe84',
		nickname: 'Researcher',
		createdAt: new Date('2024-07-25 09:11:10'),
		message:
			"Yes, the Perseverance rover has begun its journey across the Martian surface, exploring the Jezero Crater. It's like a detective searching for ancient secrets hidden in the red dust, hoping to uncover signs of past life.",
	},
];

export const Default: Story = {
	decorators: [
		(Story) => (
			<div
				style={{
					width: '100%',
					height: '560px',
				}}
			>
				<Story />
			</div>
		),
	],
	args: {
		open: true,
		top: '30px',
		height: '500px',
		messageInfos,
		onSendMessage: (currentMessage: string) => {
			alert(
				`onSendMessage() 함수가 실행되었습니다. 전송할 내용은 아래와 같습니다.\n\n"${currentMessage}"\n\n * 이 메시지는 storybook에서만 사용할 테스트 alert입니다. 실제로 사용할 때에는 적절한 함수를 삽입해 주시기 바랍니다.`,
			);
		},
	},
};
