import { useEffect, useRef } from 'react';

interface UseClickOutsideParams {
	onClickOutside: () => void;
}

/**
 * `useClickOutside`는 요소를 지정해 해당 요소의 바깥이 클릭되는 것이 감지되었을 경우 이를 알려주는 커스텀 훅입니다.
 *
 * @template T - 바깥쪽이 클릭되는 지를 감지할 때, 기준이 되는 요소의 타입입니다.
 *
 * @param {UseClickOutsideParams} params - 이 커스텀 훅이 받는 파라미터입니다.
 * @param {() => void} params.onClickOutside - 바깥쪽이 클릭되는 것이 감지될 경우 실행시킬 콜백 함수입니다.
 */
const useClickOutside = <T extends HTMLElement>({
	onClickOutside,
}: UseClickOutsideParams) => {
	const clickOutsideRef = useRef<T>(null);

	const executeCallbackIfClickOutside = (event: globalThis.MouseEvent) => {
		const clickOutsideElement = clickOutsideRef.current;

		if (!clickOutsideElement || !(event.target instanceof Node)) {
			return;
		}

		if (!clickOutsideElement.contains(event.target)) {
			onClickOutside();
		}
	};

	useEffect(() => {
		document.addEventListener('click', executeCallbackIfClickOutside);

		return () => {
			document.removeEventListener('click', executeCallbackIfClickOutside);
		};
	}, []);

	return {
		clickOutsideRef,
	};
};

export default useClickOutside;
