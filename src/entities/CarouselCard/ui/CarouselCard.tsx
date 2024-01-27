import { FunctionComponent } from 'react';
import './CarouselCard.scss';
import Img from '../../../shared/ui/Image/Img';
import CircleRating from '../../../shared/ui/circleRating/CircleRating';
import Genres from '../../../shared/ui/genres/Genres';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { IRequestResults } from '../../../shared/types/typeOfResultRequest/typeOfResultRequest';

interface CarouselCardProps {
    item: IRequestResults,
    posterUrl: string,
    endpoint?: string
}

const CarouselCard: FunctionComponent<CarouselCardProps> = ({ item, posterUrl, endpoint }) => {
    const navigate = useNavigate();

    return (
        <div
            className="CarouselCard"
            onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
        >
            <div className="posterBlock">
                <Img src={posterUrl}/>
                <CircleRating rating={Number(item.vote_average.toFixed(1))}/>
                <Genres genresProps={item.genre_ids.slice(0, 2)}/>
            </div>
            <div className="descriptionCard">
                <span className="title">
                    {item.title || item.name}
                </span>
                <span className="date">
                    {dayjs(item.release_date).format(
                        'MMM D, YYYY',
                    )}
                </span>
            </div>
        </div>
    );
};

export default CarouselCard;
