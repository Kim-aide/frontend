import styled from '@emotion/styled';

const Container = styled.button<{ $isActive: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 52px;
	height: 52px;
	border-radius: 50%;
	background: none;
	transition: transform 0.2s;

	border: 2px solid
		${({ theme, $isActive }) =>
			$isActive ? theme.colors.WHITE : theme.colors.LIGHT_GRAY};

	&:disabled {
		opacity: 0.4;
	}

	&:not(:disabled):hover {
		transform: scale(1.07);
	}

	&:not(:disabled):active {
		transform: scale(1);
	}
`;

const ImageIcon = styled.img<{ $isActive: boolean }>`
	width: 32px;
	height: 32px;
	object-fit: contain;
`;

const SvgIconWrapper = styled.div<{ $isActive: boolean }>`
	& > svg {
		width: 32px;
		height: 32px;
		color: ${({ theme, $isActive }) =>
			$isActive ? theme.colors.WHITE : theme.colors.LIGHT_GRAY};
	}
`;

export { Container, ImageIcon, SvgIconWrapper };
