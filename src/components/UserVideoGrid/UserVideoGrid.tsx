import { StreamManager } from 'openvidu-browser';
import * as S from './UserVideoGrid.styled';
import UserVideo from './UserVideo/UserVideo';
import useUserVideoGrid from '../../hooks/useUserVideoGrid';

interface UserVideoInfo {
	streamManager: StreamManager;
	avatar: string;
	nickname: string;
}

interface UserVideoGridProps {
	userVideoInfos: UserVideoInfo[];
}

const UserVideoGrid = ({ userVideoInfos }: UserVideoGridProps) => {
	const { videoWidth, videoHeight, rowVideoCounts, videoGridRef } =
		useUserVideoGrid({
			videoGridLayoutGap: 12,
			participantsCount: userVideoInfos.length,
		});
	let renderingVideoIndex = 0;

	return (
		<S.Container ref={videoGridRef}>
			{rowVideoCounts.map((rowVideoCount, rowIndex) => (
				<S.Row key={rowIndex}>
					{Array.from({ length: rowVideoCount }).map(() => {
						if (!userVideoInfos[renderingVideoIndex]) {
							return null;
						}

						const userVideoInfo = userVideoInfos[renderingVideoIndex];
						const streamId =
							userVideoInfos[renderingVideoIndex].streamManager.stream.streamId;

						renderingVideoIndex += 1;

						return (
							<UserVideo
								key={streamId}
								width={`${videoWidth}px`}
								height={`${videoHeight}px`}
								{...userVideoInfo}
							/>
						);
					})}
				</S.Row>
			))}
		</S.Container>
	);
};

export default UserVideoGrid;
