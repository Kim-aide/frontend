import styled from '@emotion/styled';

const Container = styled.button<{ $size: 'medium' | 'small' }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ $size }) => ($size === 'medium' ? '40px' : '28px')};
	height: ${({ $size }) => ($size === 'medium' ? '40px' : '28px')};
	background: none;

	&:disabled {
		opacity: 0.4;
	}

	&:not(:disabled):hover svg {
		color: ${({ theme }) => theme.colors.LIGHT_GRAY};
	}
`;

const ImageIcon = styled.img`
	width: 40px;
	height: 40px;
	object-fit: contain;
`;

const SvgIconWrapper = styled.div`
	width: 100%;
	height: 100%;

	& > svg {
		width: 100%;
		height: 100%;
		color: ${({ theme }) => theme.colors.WHITE};
		transition: color 0.2s;
	}
`;

export { Container, ImageIcon, SvgIconWrapper };
