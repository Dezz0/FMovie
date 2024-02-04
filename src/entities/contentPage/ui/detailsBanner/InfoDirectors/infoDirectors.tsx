import { FunctionComponent } from 'react';
import { ICrewResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';

interface infoDirectorsProps {
    director: Array<ICrewResults>;
}

const infoDirectors: FunctionComponent<infoDirectorsProps> = ({ director }) => {

    return (
        <div className="info">
            <span className="text bold">Director:{' '}</span>
            <span className="text">
                {director?.map((d, idx) => (
                    <span key={idx}>{d.name}{director.length - 1 !== idx && ', '}</span>
                ))}
            </span>
        </div>
    );
};

export default infoDirectors;

