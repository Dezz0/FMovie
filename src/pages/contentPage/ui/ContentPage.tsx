import { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsBanner } from '../../../widgets/contentPage/detailsBanner';
import { useAppDispatch, useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { fetchCredits, fetchVideos } from '../../../entities/contentPage/model/slice/contentPagesSlice';
import { ICrewResults, IVideosResults } from '../../../shared/types/typeOfResultRequest/typeOfResultRequest';

interface ContentPageProps {

}

const ContentPage: FunctionComponent<ContentPageProps> = () => {
    const [crew, setCrew] = useState<Array<ICrewResults>>();
    const [trailer, setTrailer] = useState<IVideosResults>();
    const dispatch = useAppDispatch();
    const { id, mediaType } = useParams();
    const { media } = useAppSelector(state => state.content);

    useEffect(() => {
        if (id && mediaType && !media[id]) {
            dispatch(fetchVideos({ mediaType, id }));
            dispatch(fetchCredits({ mediaType, id }));
        }
    }, [dispatch, id, media, mediaType]);

    useEffect(() => {
        if (!crew && !trailer) {
            if (media[id!]?.credits) setCrew(media[id!].credits!.crew);
            if (media[id!]?.videos) setTrailer(media[id!].videos?.results[0]);
        }
    }, [media]);

    return (
        <div>
            <DetailsBanner
                trailer={trailer}
                crew={crew}
            />
        </div>
    );
};

export default ContentPage;
