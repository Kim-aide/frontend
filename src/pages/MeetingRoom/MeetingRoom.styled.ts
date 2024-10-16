import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	width: 100%;
	height: 100%;
	padding: 20px;
	background-color: #111111;
`;

const UserVideoGridContainer = styled.div`
	flex-grow: 1;
	min-height: 0;
`;

const ControlPanel = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 10px;
	flex-shrink: 0;
	height: 55px;
`;

export { Container, UserVideoGridContainer, ControlPanel };
