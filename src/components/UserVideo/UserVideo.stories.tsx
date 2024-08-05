import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import UserVideo from './UserVideo';

/**
 * `UserVideo`는 회의에서의 한 명의 참가자에 대응되는 화면 및 참가자의 정보를 보여줍니다.
 *
 * **본 컴포넌트를 실제로 구동시키려면 session 연결 시 제공되는 OpenVidu의 streamManager 객체를 사용하여야 합니다.
 * 여기에서는 시각적인 UI만을 테스트하며, 실제 streamManager 객체가 아닌 가짜 객체를 사용하고 있음에 유의해 주시기 바랍니다.**
 */
const meta: Meta<typeof UserVideo> = {
	title: 'components/UserVideo',
	component: UserVideo,
	argTypes: {
		streamManager: {
			description:
				'OpenVidu에서 각 참가자에게 제공하는 `StreamManager` 객체를 의미합니다.',
			control: 'none',
		},
		width: {
			description: '화면의 가로 길이를 의미합니다.',
		},
		height: {
			description: '화면의 세로 길이를 의미합니다.',
		},
		avatar: {
			description: '참여자의 아바타(= 프로필 사진)입니다.',
		},
		nickname: {
			description: '참여자의 닉네임을 의미합니다.',
		},
	},
	decorators: [
		(Story) => {
			useEffect(() => {
				const videoElements = Array.from(
					document.getElementsByTagName('video'),
				);
				console.log(videoElements);

				videoElements.map((videoElement) => {
					videoElement.src =
						'https://github.com/user-attachments/assets/612f7fd7-377a-464c-980d-8250087021e3';
					videoElement.loop = true;
					videoElement.muted = true;
				});
			}, []);

			return <Story />;
		},
	],
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
};
export default meta;

interface FakeUserVideoProps {
	streamManager: {
		addVideoElement: () => void;
		stream: {
			videoActive: boolean;
		};
		on: (eventName: string, callback: (event?: unknown) => void) => void;
		off: () => void;
	};
	width: string;
	height: string;
	avatar: string;
	nickname: string;
}

type Story = StoryObj<FakeUserVideoProps>;

const AVATAR_URL =
	'https://github.com/user-attachments/assets/20a8431a-f2c0-44b5-8f12-848630b44b91';

/**
 * 사용자가 일반적인 상황에서 여러 메뉴들을 조작할 경우 보이게 될 UI의 예시입니다.
 * 이 스토리에서는 의도적으로 `publisherStartSpeaking` / `publisherStopSpeaking` / `streamPropertyChanged` 이벤트를 랜덤하게 호출하고 있습니다.
 */
export const Preview: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: false,
			},
			on: (eventName, callback) => {
				if (eventName === 'publisherStartSpeaking') {
					setInterval(() => {
						callback();
					}, 1500);
				}

				if (eventName === 'publisherStopSpeaking') {
					setInterval(() => {
						callback();
					}, 4000);
				}

				if (eventName === 'streamPropertyChanged') {
					setInterval(() => {
						callback({
							stream: { videoActive: true },
							changedProperty: 'videoActive',
						});
					}, 2500);

					setInterval(() => {
						callback({
							stream: { videoActive: false },
							changedProperty: 'videoActive',
						});
					}, 8000);
				}
			},
			off: () => {},
		},
		width: '600px',
		height: '340px',
		avatar: AVATAR_URL,
		nickname: '오로라',
	},
};

export const VideoOn: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: true,
			},
			on: () => {},
			off: () => {},
		},
		width: '600px',
		height: '340px',
		avatar: AVATAR_URL,
		nickname: '오로라',
	},
};

export const VideoOff: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: false,
			},
			on: () => {},
			off: () => {},
		},
		width: '600px',
		height: '340px',
		avatar: AVATAR_URL,
		nickname: '오로라',
	},
};

export const VideoOnAndSpeaking: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: true,
			},
			on: (eventName, callback) => {
				if (eventName === 'publisherStartSpeaking') {
					callback();
				}
			},
			off: () => {},
		},
		width: '600px',
		height: '340px',
		avatar: AVATAR_URL,
		nickname: '오로라',
	},
};

export const VideoOffAndSpeaking: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: false,
			},
			on: (eventName, callback) => {
				if (eventName === 'publisherStartSpeaking') {
					callback();
				}
			},
			off: () => {},
		},
		width: '600px',
		height: '340px',
		avatar: AVATAR_URL,
		nickname: '오로라',
	},
};

export const HorizontallyLongScreen: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: true,
			},
			on: () => {},
			off: () => {},
		},
		width: '600px',
		height: '200px',
		avatar: AVATAR_URL,
		nickname: '오로라',
	},
};

export const VerticallyLongScreen: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: true,
			},
			on: () => {},
			off: () => {},
		},
		width: '340px',
		height: '600px',
		avatar: AVATAR_URL,
		nickname: '오로라',
	},
};

/**
 * 로고의 크기는 화면의 가로/세로 크기에 따라 자동 조정됩니다.
 */
export const HorizontallyLongVideoOff: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: false,
			},
			on: () => {},
			off: () => {},
		},
		width: '600px',
		height: '200px',
		avatar: AVATAR_URL,
		nickname: '오로라',
	},
};

export const VerticallyLongScreenVideoOff: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: false,
			},
			on: () => {},
			off: () => {},
		},
		width: '340px',
		height: '600px',
		avatar: AVATAR_URL,
		nickname: '오로라',
	},
};

/**
 * 닉네임이 매우 길어 화면을 가득 채우는 경우, `...`로 생략됩니다. 다른 말로, 닉네임에는 `ellipsis`가 적용되어 있습니다.
 */
export const VeryLongNickname: Story = {
	args: {
		streamManager: {
			addVideoElement: () => {},
			stream: {
				videoActive: false,
			},
			on: () => {},
			off: () => {},
		},
		width: '600px',
		height: '340px',
		avatar: AVATAR_URL,
		nickname:
			'이닉네임은너무길기때문에도저히한화면에담을수없을정도입니다이경우에는과연어떻게작동할까요',
	},
};
