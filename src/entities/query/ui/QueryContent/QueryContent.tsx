import { FunctionComponent } from 'react';
import PosterFallback from 'shared/assets/images/no-poster.png';
import { CarouselCard } from '../../../CarouselCard';
import { IRequestResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';
import { useAppSelector } from 'app/providers/storeProviders/utils/hooks';
import cls from './QueryContent.module.scss';

interface QueryResultsProps {
    data: Array<IRequestResults>;
}

const QueryContent: FunctionComponent<QueryResultsProps> = ({ data }) => {
    const { url_images } = useAppSelector(state => state.config);

    return (
        <>
            {data?.map((item) => {
                const posterUrl = item.poster_path ? url_images + item.poster_path : PosterFallback;
                if (item.media_type === 'person') return;
                return (
                    <CarouselCard
                        key={item.id}
                        item={item}
                        posterUrl={posterUrl}
                        fullInfo={false}
                        className={cls.contentCard}
                    />);
            })}
        </>
    );
};

export default QueryContent;
