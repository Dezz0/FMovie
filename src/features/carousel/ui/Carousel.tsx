import { FunctionComponent, useRef } from 'react';
import { IRequestResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';
import PosterFallback from 'shared/assets/images/no-poster.png';
import { useAppSelector } from 'app/providers/storeProviders/utils/hooks';
import { CarouselCard } from 'entities/CarouselCard';
import { Arrows } from '../../arrows';
import cls from './Carousel.module.scss';
import ContentWrapper from 'shared/ui/contentWrapper/ContentWrapper';
import CarouselSkeleton from 'shared/ui/skeletonCard/CarouselSkeleton';

interface CarouselProps {
    results: Array<IRequestResults>;
    isLoading: boolean;
    endpoint?: string;
    title?: string;
}

const Carousel: FunctionComponent<CarouselProps> = ({ results, isLoading, endpoint, title }) => {
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
            {title &&
                <ContentWrapper className="ContentWrapperCarousel">
                    <div className={cls.carouselTitle}>{title}</div>
                </ContentWrapper>
            }
            <ContentWrapper className="ContentWrapperCarousel">
                {Boolean(results) && <Arrows changeContentCarousel={changeContentCarousel}/>}
                {!isLoading ?
                    (
                        <div className={cls.carouselItems} ref={carouselContainer}>
                            {
                                results?.map(item => {
                                    const posterUrl = item.poster_path ? url + item.poster_path : PosterFallback;
                                    return <CarouselCard
                                        key={item.id + item.poster_path}
                                        item={item}
                                        posterUrl={posterUrl}
                                        endpoint={endpoint}
                                    />;
                                })
                            }
                        </div>
                    ) :
                    (
                        <CarouselSkeleton/>
                    )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;
