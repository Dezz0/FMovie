import { FunctionComponent } from 'react';
import './CircleRating.scss';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

interface CircleRatingProps {
    rating: number;
}

const CircleRating: FunctionComponent<CircleRatingProps> = ({ rating }) => {

    return (
        <div className="CircleRating">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={String(rating)}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
                })}
            />
        </div>
    );
};

export default CircleRating;
