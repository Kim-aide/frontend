import { useState } from 'react';

interface useAnimatedModalClose {
	onClose: () => void;
}

/**
 * `useAnimatedUnmount`는 부드럽게 요소가 사라지는 연출을 구현할 때 사용할 수 있는 커스텀 훅입니다.
 * 요소를 제거할 때 사라지는 애니메이션을 먼저 실행한 후, 애니메이션이 끝났을 때 콜백 함수가 실행되도록 할 수 있습니다.
 *
 * @param {useAnimatedModalClose} params - 이 커스텀 훅이 받는 파라미터입니다.
 * @param {() => void} params.onClose - 요소를 제거할 때 실행시킬 콜백 함수입니다.
 */
const useAnimatedModalClose = ({ onClose }: useAnimatedModalClose) => {
	const [isModalClosing, setIsModalClosing] = useState(false);

	const startClosingModal = () => {
		setIsModalClosing(true);
	};

	const onClosingAnimationEnd = () => {
		if (isModalClosing) {
			onClose();
			setIsModalClosing(false);
		}
	};

	return {
		isModalClosing,
		startClosingModal,
		onClosingAnimationEnd,
	};
};

export default useAnimatedModalClose;
