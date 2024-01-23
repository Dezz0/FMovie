import { FunctionComponent, useRef } from 'react';
import { IRequestResults } from '../../../shared/types/typeOfResultRequest/typeOfResultRequest';
import { ContentWrapper } from '../../../shared/ui/contentWrapper';
import { SkeletonCard } from '../../../shared/ui/skeletonCard';
import PosterFallback from '../../../shared/assets/images/no-poster.png';
import { useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { CarouselCard } from '../../../entities/CarouselCard';
import { Arrows } from '../../arrows';
import cls from './Carousel.module.scss';

interface CarouselProps {
    results: Array<IRequestResults>;
    isLoading: boolean;
}

const Carousel: FunctionComponent<CarouselProps> = ({ results, isLoading }) => {
    const carouselContainer = useRef<HTMLDivElement>(null);
    const url: string = useAppSelector(state => state.config.url_images);
    const changeContentCarousel = (dir: string) => {
        const container = carouselContainer.current;
        if (container) {
            const scrollAmount =
                dir === 'left'
                    ? container.scrollLeft - (container.offsetWidth + 20)
                    : container.scrollLeft + (container.offsetWidth + 20);

            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={cls.Carousel}>
            <ContentWrapper className="ContentWrapperCarousel">
                <Arrows changeContentCarousel={changeContentCarousel}/>
                {!isLoading ?
                    (
                        <div className={cls.carouselItems} ref={carouselContainer}>
                            {
                                results?.map(item => {
                                    const posterUrl = item.poster_path ? url + item.poster_path : PosterFallback;
                                    return <CarouselCard key={item.id} item={item} posterUrl={posterUrl}/>;
                                })
                            }
                        </div>
                    ) :
                    (
                        <div className={cls.loadingSkeleton}>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                            <SkeletonCard/>
                        </div>
                    )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;
