import styled from '@emotion/styled';

const Container = styled.div<{
	$top: string;
	$height: string;
	$isOpen: boolean;
}>`
	display: flex;
	flex-direction: column;
	row-gap: 12px;
	position: fixed;
	top: ${({ $top }) => $top};
	right: -20px;
	width: 290px;
	height: ${({ $height }) => $height};
	padding: 8px;
	border-width: 2px 0 2px 2px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.WHITE};
	border-radius: 12px 0 0 12px;
	box-shadow: 0 0 12px ${({ theme }) => theme.colors.WHITE_TRANSPARENT};
	background-color: ${({ theme }) => theme.colors.DARK_GRAY};
	transition: transform 0.25s;
	transform: ${({ $isOpen }) =>
		$isOpen ? 'translateX(0)' : 'translateX(100%)'};
`;

const ChatMessagesContainer = styled.ul`
	display: flex;
	overflow: auto;
	flex-direction: column;
	flex-grow: 1;
	row-gap: 15px;
	padding: 8px;
`;

const InputPanel = styled.form`
	display: flex;
	align-items: flex-end;
	flex-shrink: 0;
	column-gap: 6px;
`;

const TextAreaInput = styled.textarea`
	flex-grow: 1;
	height: 28px;
	min-height: 28px;
	max-height: 100px;
	padding: 4px;
	border: 2px solid ${({ theme }) => theme.colors.WHITE};
	border-radius: 6px;
	box-shadow: 0 0 6px ${({ theme }) => theme.colors.WHITE_TRANSPARENT};
	background: none;
	color: ${({ theme }) => theme.colors.WHITE};
	resize: none;
	outline-width: 4px;
	transition: outline-width 0.1s;

	&:not(:disabled):focus,
	&:not(:disabled):active {
		border-color: ${({ theme }) => theme.colors.WHITE};
		outline: 3px solid ${({ theme }) => theme.colors.WHITE_TRANSPARENT};
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

export { Container, ChatMessagesContainer, InputPanel, TextAreaInput };
