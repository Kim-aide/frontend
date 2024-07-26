import type { Meta, StoryObj } from '@storybook/react';
import ChatMessage from './ChatMessage';

/**
 * `ChatMessage`는 채팅창에서 사용자가 보낸 단일 메시지를 표시하기 위해 사용합니다. 사용자의 아바타, 닉네임, 메시지를 보낸 시각, 그리고 메시지 내용을 보여줄 수 있습니다.
 */
const meta = {
	title: 'components/ChatMenu/ChatSidebar/ChatMessage',
	component: ChatMessage,
	argTypes: {
		id: {
			description: '채팅의 ID를 의미합니다.',
		},
		avatar: {
			description: '채팅을 작성한 작성자의 아바타(= 프로필 사진)입니다.',
		},
		nickname: {
			description: '채팅을 작성한 작성자의 닉네임을 의미합니다.',
		},
		createdAt: {
			description: '해당 채팅이 생성된 시각을 의미합니다.',
		},
		message: {
			description: '해당 채팅의 메시지 내용을 의미합니다.',
		},
	},
} satisfies Meta<typeof ChatMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 1,
		avatar:
			'https://github.com/user-attachments/assets/79737ad5-e91c-40db-85d0-32e76fae718b',
		nickname: '닉네임',
		createdAt: new Date(),
		message:
			'계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정 없이 가을 속의 별들을 다 헤일 듯합니다.',
	},
};

/**
 * 사용자의 닉네임이 길어 한 줄에 모두 표시할 수 없는 경우에는, "..."으로 축약되어 표시됩니다. `text-overflow: ellipsis`가 적용되어 있습니다.
 */
export const VeryLongNickname: Story = {
	args: {
		id: 1,
		avatar:
			'https://github.com/user-attachments/assets/79737ad5-e91c-40db-85d0-32e76fae718b',
		nickname:
			'이 사용자는 너무 긴 닉네임을 사용하기 때문에 도저히 한 줄에 닉네임 전체를 표시할 수가 없을 지경입니다. 이 경우에는 오버플로되지 않고 끝부분이 적절히 생략되어야겠죠?',
		createdAt: new Date(),
		message:
			'계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정 없이 가을 속의 별들을 다 헤일 듯합니다.',
	},
};
