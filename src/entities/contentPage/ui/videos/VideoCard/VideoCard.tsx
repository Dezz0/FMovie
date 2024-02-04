import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import './VideoCard.scss';
import Img from 'shared/ui/Image/Img';
import PlayIcon from 'shared/ui/playIcon/PlayIcon';
import { IVideosResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';

interface VideoCardProps {
    video: IVideosResults;
    setShowVideo: Dispatch<SetStateAction<boolean>>;
    setVideoId: Dispatch<SetStateAction<string>>;
}

const VideoCard: FunctionComponent<VideoCardProps> = ({ video, setVideoId, setShowVideo }) => {

    const startVideo = () => {
        setVideoId(video.key);
        setShowVideo(true);
    };

    return (
        <div className="VideoCard" onClick={startVideo}>
            <div className="videoThumbnail">
                <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                />
                <PlayIcon/>
            </div>
            <div className="videoTitle">{video.name}</div>
        </div>
    );
};

export default VideoCard;
