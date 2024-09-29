import { useState } from 'react';
import useAnimatedModalClose from './useAnimatedModalClose';
import useClickOutside from './useClickOutside';

const useMeetingExitMenu = () => {
	const [isEndMeetingModalOpen, setIsEndMeetingModalOpen] = useState(false);
	const {
		isModalOpen: isExitBubbleOpen,
		isModalClosing: isExitBubbleClosing,
		startOpeningModal: startOpeningExitBubbleAnimation,
		startClosingModal: startClosingExitBubbleAnimation,
		handleClosingAnimationEnd: handleClosingExitBubbleAnimationEnd,
	} = useAnimatedModalClose({});
	const { clickOutsideRef: menuContainerRef } = useClickOutside<HTMLDivElement>(
		{
			onClickOutside: startClosingExitBubbleAnimation,
		},
	);

	return {
		isExitBubbleOpen,
		isExitBubbleClosing,
		isEndMeetingModalOpen,
		menuContainerRef,
		startOpeningExitBubbleAnimation,
		startClosingExitBubbleAnimation,
		handleClosingExitBubbleAnimationEnd,
		setIsEndMeetingModalOpen,
	};
};

export default useMeetingExitMenu;
