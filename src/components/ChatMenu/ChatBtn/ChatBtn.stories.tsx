import type { Meta, StoryObj } from '@storybook/react';
import ChatBtn from './ChatBtn';

/**
 * `ChatBtn`은 채팅창을 여는 데 사용하는 버튼 컴포넌트입니다. 부가적인 기능으로 새로운 채팅의 개수를 시각적으로 보여줍니다.
 */
const meta = {
	title: 'components/ChatMenu/ChatBtn',
	component: ChatBtn,
	argTypes: {
		notificationCount: {
			description: '현재 알림의 개수를 의미합니다.',
			control: { type: 'number' },
		},
		maxDisplayNotificationCount: {
			description: '표시할 알림의 최대 개수입니다.',
			control: { type: 'number' },
		},
		onClick: {
			description: '본 컴포넌트를 클릭했을 때 호출할 콜백 함수를 의미합니다.',
			control: { type: 'function' },
		},
	},
} satisfies Meta<typeof ChatBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 알림이 없는 경우에는 알림의 개수를 표시하지 않습니다.
 */
export const Default: Story = {
	args: {
		notificationCount: 0,
		maxDisplayNotificationCount: 99,
	},
};

export const HasNotification: Story = {
	args: {
		notificationCount: 5,
		maxDisplayNotificationCount: 99,
	},
};

/**
 * 현재 알림의 개수(`notificationCount`)가 표시할 알림의 최대 개수(`maxDisplayNotificationCount`)보다 큰 경우에는, 알림의 최대 개수로 표시되고, `+`가 뒤에 붙습니다.
 * 굉장히 많은 알림의 개수를 표시할 때 사용할 수 있습니다.
 * - 아래는 알림이 `123`개, 알림의 최대 개수가 `99`개인 예시입니다.
 */
export const TooManyNotification: Story = {
	args: {
		notificationCount: 123,
		maxDisplayNotificationCount: 99,
	},
};
