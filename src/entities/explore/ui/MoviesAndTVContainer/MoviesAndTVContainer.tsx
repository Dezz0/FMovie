import { FunctionComponent } from 'react';
import PosterFallback from '../../../../shared/assets/images/no-poster.png';
import { CarouselCard } from '../../../CarouselCard';
import cls from '../../../query/ui/QueryContent/QueryContent.module.scss';
import { useAppSelector } from '../../../../app/providers/storeProviders/utils/hooks';
import { IMovieResults, ITVResults } from '../../model/types/exploreType';

interface MoviesAndTVContainerProps {
    data: Array<IMovieResults | ITVResults>;
    mediaType: 'tv' | 'movie';
}

const MoviesAndTVContainer: FunctionComponent<MoviesAndTVContainerProps> = ({ data, mediaType }) => {
    const { url_images } = useAppSelector(state => state.config);

    return (
        <>
            {data?.map((item) => {
                const posterUrl = item.poster_path ? url_images + item.poster_path : PosterFallback;
                return (
                    <CarouselCard
                        key={item.id}
                        item={item}
                        posterUrl={posterUrl}
                        fullInfo={false}
                        className={cls.contentCard}
                        mediaType={mediaType}
                    />);
            })}
        </>
    );
};

export default MoviesAndTVContainer;
