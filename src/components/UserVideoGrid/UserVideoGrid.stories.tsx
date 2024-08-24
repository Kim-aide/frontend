import type { Meta, StoryObj } from '@storybook/react';
import UserVideoGrid from './UserVideoGrid';

/**
 * `UserVideoGrid`
 */
const meta: Meta<typeof UserVideoGrid> = {
	title: 'components/UserVideoGrid',
	component: UserVideoGrid,
	parameters: {
		backgrounds: {
			default: 'darkGray',
			values: [
				{
					name: 'darkGray',
					value: '#202020',
				},
			],
		},
	},
	decorators: [
		(Story) => (
			<div style={{ height: '90vh' }}>
				<Story />
			</div>
		),
	],
};
export default meta;

interface FakeStreamManager {
	addVideoElement: () => void;
	stream: {
		streamId: string;
		videoActive: boolean;
	};
	on: () => void;
	off: () => void;
}

interface FakeUserVideoInfo {
	streamManager: FakeStreamManager;
	avatar: string;
	nickname: string;
}

interface FakeUserVideoGridProps {
	userVideoInfos: FakeUserVideoInfo[];
}

type Story = StoryObj<FakeUserVideoGridProps>;

const AVATAR_URL =
	'https://github.com/user-attachments/assets/20a8431a-f2c0-44b5-8f12-848630b44b91';

const getUserVideoInfo = (index: number): FakeUserVideoInfo => ({
	streamManager: {
		addVideoElement: () => {},
		stream: {
			videoActive: false,
			streamId: String(index + 1),
		},
		on: () => {},
		off: () => {},
	},
	avatar: AVATAR_URL,
	nickname: `참가자 ${index + 1}`,
});

const getStory = (participantsCount: number): Story => {
	return {
		name:
			participantsCount === 1
				? `1 Participant`
				: `${participantsCount} Participants`,
		args: {
			userVideoInfos: Array.from({ length: participantsCount }).map(
				(_, index) => getUserVideoInfo(index),
			),
		},
	};
};

export const participantsCount3: Story = getStory(3);

export const participantsCount1: Story = getStory(1);

export const participantsCount2: Story = getStory(2);

export const participantsCount4: Story = getStory(4);

export const participantsCount5: Story = getStory(5);

export const participantsCount6: Story = getStory(6);

export const participantsCount8: Story = getStory(8);

export const participantsCount12: Story = getStory(12);

export const participantsCount16: Story = getStory(16);

export const participantsCount20: Story = getStory(20);

export const participantsCount25: Story = getStory(25);
