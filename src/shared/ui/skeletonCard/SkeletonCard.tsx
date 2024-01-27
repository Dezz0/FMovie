import { FunctionComponent } from 'react';
import './SkeletonCard.scss';

const SkeletonCard: FunctionComponent = () => {

    return (
        <div className="SkeletonCard">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
