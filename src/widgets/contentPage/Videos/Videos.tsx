import { FunctionComponent, useState } from 'react';
import cls from './Videos.module.scss';
import ContentWrapper from '../../../shared/ui/contentWrapper/ContentWrapper';
import { IVideosResults } from '../../../shared/types/typeOfResultRequest/typeOfResultRequest';
import VideosSkeleton from '../../../entities/contentPage/ui/videos/VideosSkeleton/VideosSkeleton';
import { VideoPopup } from '../../../features/videoPopup';
import { VideoCard } from '../../../entities/contentPage';
import { useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';

interface VideosProps {
    videos?: Array<IVideosResults>;

}

const Videos: FunctionComponent<VideosProps> = ({ videos }) => {
    const { isLoading } = useAppSelector(state => state.content);
    const [showVideo, setShowVideo] = useState(false);
    const [videoId, setVideoId] = useState('');

    if (!videos?.length && isLoading) {
        return <ContentWrapper><VideosSkeleton/></ContentWrapper>;
    }

    if (!videos?.length) {
        return <></>;
    }

    return (
        <div className={cls.Videos}>
            <ContentWrapper>
                <div className={cls.title}>Official Videos</div>
                {(!!videos) && (
                    <div className={cls.videosRow}>
                        {videos?.map((video) =>
                            <VideoCard
                                key={video.id}
                                video={video}
                                setShowVideo={setShowVideo}
                                setVideoId={setVideoId}
                            />)}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={showVideo}
                setShow={setShowVideo}
                trailerId={videoId}
                setTrailerId={setVideoId}
            />
        </div>
    );
};

export default Videos;
