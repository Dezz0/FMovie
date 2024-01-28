import { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cls from './DetailsBanner.module.scss';
import { fetchDetails } from '../../../../entities/contentPage/model/slice/contentPagesSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/providers/storeProviders/utils/hooks';
import { IDetailsResponse } from '../../../../entities/contentPage/model/types/contentPageType';
import { validGenres } from '../../../../shared/helpers/helpers';
import ContentWrapper from '../../../../shared/ui/contentWrapper/ContentWrapper';
import Genres from '../../../../shared/ui/genres/Genres';
import CircleRating from '../../../../shared/ui/circleRating/CircleRating';
import { ICrewResults, IVideosResults } from '../../../../shared/types/typeOfResultRequest/typeOfResultRequest';
import { VideoPopup } from '../../../../features/videoPopup';
import {
    DetailsBackdropImg,
    DetailsBannerSkeleton,
    DetailsPoster,
    InfoRelease,
    InfoWriters,
    OverView,
    Titles,
    WatchTrailer,
} from '../../../../entities/contentPage';
import InfoDirectors from '../../../../entities/contentPage/ui/detailsBanner/InfoDirectors/infoDirectors';

interface DetailsBannerProps {
    trailer?: IVideosResults;
    crew: Array<ICrewResults>;
}

const DetailsBanner: FunctionComponent<DetailsBannerProps> = ({ trailer, crew }) => {
    const dispatch = useAppDispatch();
    const { mediaType, id } = useParams();
    const [data, setData] = useState<IDetailsResponse>();
    const [show, setShow] = useState(false);
    const [trailerId, setTrailerId] = useState<string>('');
    const director = crew?.filter(pers => pers.job.includes('Director'));
    const writers = crew?.filter(pers => pers.job.includes('Screenplay') || pers.job.includes('Story') || pers.job.includes('Writer'));
    const { media, isLoadingDetails } = useAppSelector(state => state.content);

    useEffect(() => {
        if (id && mediaType && !media[id]?.details && !isLoadingDetails) {
            dispatch(fetchDetails({ id, mediaType }));
        }
        if (id && mediaType && media[id]?.details) {
            setData(media[id].details);
        }
    }, [dispatch, id, media, mediaType]);

    const openTrailer = () => {
        setShow(true);
        setTrailerId(trailer!.key);
    };

    if (!data) {
        return <DetailsBannerSkeleton/>;
    }

    return (
        <div className={cls.DetailsBanner}>
            {!!data && (
                <>
                    <DetailsBackdropImg backdrop_path={data.backdrop_path}/>
                    <ContentWrapper>
                        <div className={cls.content}>
                            <div className={cls.left}>
                                <DetailsPoster poster_path={data.poster_path}/>
                            </div>
                            <div className={cls.right}>
                                <Titles
                                    title={data.title || data.name}
                                    release_date={data.release_date}
                                    tagline={data.tagline}
                                />
                                <Genres className={cls.genres} genresProps={validGenres(data.genres)}/>
                                <div className={cls.row}>
                                    <CircleRating
                                        className={cls.rating}
                                        textColor="white"
                                        rating={Number(data.vote_average.toFixed(1))}
                                    />
                                    <WatchTrailer openTrailer={openTrailer}/>
                                </div>
                                <OverView overview={data.overview}/>
                                <InfoRelease
                                    status={data.status}
                                    release_date={data.release_date}
                                    runtime={data.runtime}
                                />
                                {!!director && <InfoDirectors director={director}/>}
                                {!!writers && <InfoWriters writers={writers}/>}
                            </div>
                        </div>
                        <VideoPopup
                            show={show}
                            setShow={setShow}
                            trailerId={trailerId}
                            setTrailerId={setTrailerId}
                        />
                    </ContentWrapper>
                </>
            )})
        </div>
    );
};

export default DetailsBanner;
