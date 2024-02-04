import { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProviders/utils/hooks';
import { fetchCredits, fetchVideos } from 'entities/contentPage/model/slice/contentPagesSlice';
import {
    ICastResults,
    ICrewResults,
    IVideosResults,
} from 'shared/types/typeOfResultRequest/typeOfResultRequest';
import { Cast, DetailsBanner, Similar, Videos } from 'widgets/contentPage';

const ContentPage: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { id, mediaType } = useParams();
    const [crew, setCrew] = useState<Array<ICrewResults>>([]);
    const [cast, setCast] = useState<Array<ICastResults>>([]);
    const [videos, setVideos] = useState<Array<IVideosResults>>([]);
    const { media } = useAppSelector(state => state.content);

    useEffect(() => {
        if (id && mediaType && !media[id]) {
            dispatch(fetchVideos({ mediaType, id }));
            dispatch(fetchCredits({ mediaType, id }));
        }
    }, [dispatch, id, media, mediaType]);

    useEffect(() => {
        if (id && media[id]?.videos) setVideos(media[id].videos!.results);
        if (id && media[id]?.credits?.cast) setCast(media[id].credits!.cast);
        if (id && media[id]?.credits?.crew) setCrew(media[id].credits!.crew);
    }, [cast, crew, id, media, videos]);

    return (
        <div>
            <DetailsBanner trailer={videos?.[0]} crew={crew}/>
            <Cast cast={cast}/>
            <Videos videos={videos}/>
            <Similar/>
        </div>
    );
};

export default ContentPage;
