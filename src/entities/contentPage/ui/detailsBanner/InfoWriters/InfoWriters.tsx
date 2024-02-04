import { FunctionComponent } from 'react';
import { ICrewResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';

interface InfoWritersProps {
    writers: Array<ICrewResults>;
}

const InfoWriters: FunctionComponent<InfoWritersProps> = ({ writers }) => {

    return (
        <div className="info">
            <span className="text bold">Writer:{' '}</span>
            <span className="text">
                {writers?.map((w, idx) => (
                    <span key={idx}>{w.name}{writers.length - 1 !== idx && ', '}</span>
                ))}
            </span>
        </div>
    );
};

export default InfoWriters;
