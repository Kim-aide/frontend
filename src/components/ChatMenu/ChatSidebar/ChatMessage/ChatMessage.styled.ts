import styled from '@emotion/styled';

const Container = styled.li`
	display: flex;
	column-gap: 6px;
	width: 100%;
	height: auto;
`;

const AvatarWrapper = styled.div`
	flex-shrink: 0;
	width: 30px;
`;

const Avatar = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 15px;
	object-fit: cover;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	row-gap: 6px;
	min-width: 0;
`;

const Header = styled.header`
	display: flex;
	align-items: flex-end;
	column-gap: 6px;
	max-width: 100%;
`;

const Nickname = styled.div`
	overflow: hidden;
	font-weight: 700;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.WHITE};
	white-space: nowrap;
	text-overflow: ellipsis;
`;

const Timestamp = styled.div`
	height: 12px;
	font-size: 12px;
	line-height: 12px;
	color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;

const Message = styled.p`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.WHITE};
	word-break: break-all;
`;

export {
	Container,
	AvatarWrapper,
	Avatar,
	ContentContainer,
	Header,
	Nickname,
	Timestamp,
	Message,
};
