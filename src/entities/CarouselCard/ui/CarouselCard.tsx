import { FunctionComponent } from 'react';
import './CarouselCard.scss';
import Img from 'shared/ui/Image/Img';
import CircleRating from 'shared/ui/circleRating/CircleRating';
import Genres from 'shared/ui/genres/Genres';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { IRequestResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';

interface CarouselCardProps {
    item: IRequestResults,
    posterUrl: string,
    endpoint?: string,
    fullInfo?: boolean
    className?: string
    mediaType?: 'tv' | 'movie'
}

const CarouselCard: FunctionComponent<CarouselCardProps> = ({ item, posterUrl, endpoint, fullInfo = true, className = '', mediaType }) => {
    const navigate = useNavigate();

    return (
        <div
            className={`CarouselCard ${className}`}
            onClick={() => navigate(`/${item.media_type || endpoint || mediaType}/${item.id}`)}
        >
            <div className="posterBlock">
                <Img src={posterUrl}/>
                {fullInfo && (<>
                    <CircleRating rating={Number(item.vote_average?.toFixed(1))}/>
                    <Genres genresProps={item.genre_ids?.slice(0, 2)}/>
                </>)}
            </div>
            <div className="descriptionCard">
                <span className="title">
                    {item.title || item.name}
                </span>
                <span className="date">
                    {dayjs(item.release_date || item.first_air_date).format(
                        'MMM D, YYYY',
                    )}
                </span>
            </div>
        </div>
    );
};

export default CarouselCard;
