import { FunctionComponent } from 'react';
import cls from './VideosSkeleton.module.scss';

interface VideosSkeletonProps {

}

const VideosSkeleton: FunctionComponent<VideosSkeletonProps> = () => {

    const Skeleton = () => {
        return (
            <div className={cls.skItem}>
                <div className={`${cls.thumb} skeleton`}></div>
                <div className={`${cls.row} skeleton`}></div>
                <div className={`${cls.row2} skeleton`}></div>
            </div>
        );
    };

    return (
        <div className={cls.VideosSkeleton}>
            {Skeleton()}
            {Skeleton()}
            {Skeleton()}
            {Skeleton()}
        </div>
    );
};

export default VideosSkeleton;
