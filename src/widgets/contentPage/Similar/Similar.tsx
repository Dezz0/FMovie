import { FunctionComponent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { useParams } from 'react-router-dom';
import { fetchSimilar } from '../../../entities/contentPage/model/slice/contentPagesSlice';
import { IRequestResults } from '../../../shared/types/typeOfResultRequest/typeOfResultRequest';
import { Carousel } from '../../../features/carousel';

const Similar: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { id, mediaType } = useParams();
    const [similar, setSimilar] = useState<Array<IRequestResults>>();
    const { media, isLoadingSimilar } = useAppSelector(state => state.content);
    const title = mediaType === 'tv' ? 'Similar TV Shows' : 'Similar Movies';

    useEffect(() => {
        if (id && mediaType && !media[id]?.similar && !isLoadingSimilar) {
            dispatch(fetchSimilar({ id, mediaType }));
        }
        if (id && mediaType && media[id]?.similar) {
            setSimilar(media[id].similar!.results);
        }
    }, [media]);
  
    return (
        <>{!!similar &&
            <Carousel results={similar} isLoading={isLoadingSimilar} title={title} endpoint={mediaType}/>
        }</>
    );
};

export default Similar;
