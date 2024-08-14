import type { Meta, StoryObj } from '@storybook/react';
import IconTextBtn from './IconTextBtn';
import {
	AddMeetingIcon,
	NavigateMainIcon,
	SearchIcon,
	SummaryIcon,
} from '../../../assets/svg';

/**
 * `IconTextBtn` 컴포넌트는 아이콘과 텍스트가 함께 있는 버튼을 만들어주는 컴포넌트입니다.
 */

const meta = {
	title: 'components/common/IconTextBtn',
	component: IconTextBtn,
	argTypes: {
		icon: {
			description: '이미지, SVG 아이콘을 받습니다.',
			control: { type: 'none' },
		},
		text: {
			description: '버튼에 표시할 텍스트를 받습니다.',
		},
	},
} satisfies Meta<typeof IconTextBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AddMeetingRoom: Story = {
	args: {
		icon: <AddMeetingIcon />,
		text: '새로운 회의 생성',
	},
};

export const NavigateMain: Story = {
	args: {
		icon: <NavigateMainIcon />,
		text: '메인 페이지로 돌아가기',
	},
};

export const Search: Story = {
	args: {
		icon: <SearchIcon />,
		text: '이미 있는 회의에 참가하기',
	},
};

export const Summary: Story = {
	args: {
		icon: <SummaryIcon />,
		text: '회의 요약 보기',
	},
};
