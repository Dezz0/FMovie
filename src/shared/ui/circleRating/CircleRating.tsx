import { FunctionComponent } from 'react';
import './CircleRating.scss';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

interface CircleRatingProps {
    rating: number;
    className?: string;
    textColor?: string;
}

const CircleRating: FunctionComponent<CircleRatingProps> = ({ rating, className = '', textColor = '' }) => {

    return (
        <div className={`${className} CircleRating`}>
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={String(rating)}
                styles={buildStyles({
                    pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
                    textColor: textColor ? textColor : '',
                })}
            />
        </div>
    );
};

export default CircleRating;
