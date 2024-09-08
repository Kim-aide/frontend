import type { Meta, StoryObj } from '@storybook/react';
import UserVideoGrid from './UserVideoGrid';

/**
 * `UserVideoGrid`는 회의에서의 **모든** 참가자에 대응되는 화면 및 참가자의 정보를 보여줍니다.
 *
 * 참가자 수, 화면의 크기에 따라 레이아웃의 형태가 적절하다고 판단되는 UI로 적절하게 변형됩니다.
 *
 * **본 컴포넌트를 실제로 구동시키려면 session 연결 시 제공되는 OpenVidu의 streamManager 객체를 사용하여야 합니다.
 * 여기에서는 시각적인 UI만을 테스트하며, 실제 streamManager 객체가 아닌 가짜 객체를 사용하고 있음에 유의해 주시기 바랍니다.**
 */
const meta: Meta<typeof UserVideoGrid> = {
	title: 'components/UserVideoGrid',
	component: UserVideoGrid,
	argTypes: {
		userVideoInfos: {
			description:
				'배열 형태의 모든 참가자의 정보들을 의미합니다. 각 참가자의 정보는 `streamManager` 객체, 아바타, 사용자 닉네임으로 구성되어 있습니다.',
			control: 'none',
		},
	},
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
