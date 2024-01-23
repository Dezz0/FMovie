import { FunctionComponent } from 'react';
import './CarouselCard.scss';
import { Img } from '../../../shared/ui/Image';
import { CircleRating } from '../../../shared/ui/circleRating';
import { Genres } from '../../../shared/ui/genres';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { IRequestResults } from '../../../shared/types/typeOfResultRequest/typeOfResultRequest';

interface CarouselCardProps {
    item: IRequestResults,
    posterUrl: string
}

const CarouselCard: FunctionComponent<CarouselCardProps> = ({ item, posterUrl }) => {
    const navigate = useNavigate();

    return (
        <div
            className="CarouselCard"
            onClick={() => navigate(`/${item.media_type}/${item.id}`)}
        >
            <div className="posterBlock">
                <Img src={posterUrl}/>
                <CircleRating rating={Number(item.vote_average.toFixed(1))}/>
                <Genres genresProps={item.genre_ids.slice(0, 2)}/>
            </div>
            <div className="descriptionCard">
                <span className="title">
                    {item.title}
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