import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconBtn from './IconBtn';
import { PeopleIcon } from '../../../assets/svg';

/**
 * `IconBtn`은 아이콘 형태의 공용 버튼 컴포넌트입니다.
 */
const meta = {
	title: 'components/common/IconBtn',
	component: IconBtn,
	argTypes: {
		icon: {
			description: '상태가 활성화되어 있을 경우 사용할 아이콘을 의미합니다.',
			control: { type: 'none' },
		},
		size: {
			description: '버튼의 크기를 의미합니다.',
		},
		disabled: {
			description: '버튼이 비활성화되어 조작할 수 없는지의 여부입니다.',
			control: { type: 'boolean' },
		},
		ariaLabel: {
			description:
				'버튼을 설명하는 텍스트이자 스크린 리더에서 사용자에게 들려줄 정보 텍스트를 의미합니다.',
		},
		onClick: {
			description: '버튼 클릭시 실행할 리스너 함수를 의미합니다.',
		},
	},
} satisfies Meta<typeof IconBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
	args: {
		icon: <PeopleIcon />,
		size: 'medium',
		ariaLabel: '참가자 목록 보기',
	},
};

export const Small: Story = {
	args: {
		icon: <PeopleIcon />,
		size: 'small',
		ariaLabel: '참가자 목록 보기',
	},
};

export const MediumDisabled: Story = {
	args: {
		icon: <PeopleIcon />,
		size: 'medium',
		disabled: true,
		ariaLabel: '참가자 목록 보기',
	},
};

export const MediumPng: Story = {
	args: {
		icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/87642422/350677050-549159b8-8a6d-4eff-86f8-9475b14f6a83.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240720T082810Z&X-Amz-Expires=300&X-Amz-Signature=56ca710ea3f058c3a3b0603cd4eb7aac2ac1ef177dba397ef0dc6e0254203acc&X-Amz-SignedHeaders=host&actor_id=87642422&key_id=0&repo_id=825320470',
		size: 'medium',
		ariaLabel: '왕관',
	},
};
