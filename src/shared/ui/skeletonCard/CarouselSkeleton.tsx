import { FunctionComponent } from 'react';
import cls from './CarouselSkeleton.module.scss';

const CarouselSkeleton: FunctionComponent = () => {

    const Skeleton = () => {
        return (
            <div className={cls.SkeletonCard}>
                <div className={`${cls.posterBlock} skeleton`}></div>
                <div className={cls.textBlock}>
                    <div className={`${cls.title} skeleton`}></div>
                    <div className={`${cls.date} skeleton`}></div>
                </div>
            </div>
        );
    };

    return (
        <div className={cls.carouselSkeleton}>
            {Skeleton()}
            {Skeleton()}
            {Skeleton()}
            {Skeleton()}
            {Skeleton()}
        </div>
    );
};

export default CarouselSkeleton;
