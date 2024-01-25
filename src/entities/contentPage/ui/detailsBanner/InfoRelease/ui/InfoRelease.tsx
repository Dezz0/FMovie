import { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { toHoursAndMinutes } from '../../../../../../shared/helpers/helpers';
import '../../infoContent.scss';

interface InfoReleaseProps {
    status: string;
    release_date: string;
    runtime: number;
}

const InfoRelease: FunctionComponent<InfoReleaseProps> = ({ release_date, status, runtime }) => {

    return (
        <div className="info">
            <div className="infoItem">
                <span className="text bold">Status:{' '}</span>
                <span className="text">{status}</span>
            </div>

            <div className="infoItem">
                <span className="text bold">Release Date:{' '}</span>
                <span className="text">{dayjs(release_date).format('MMM D, YYYY')}</span>
            </div>

            <div className="infoItem">
                <span className="text bold">Runtime:{' '}</span>
                <span className="text">{toHoursAndMinutes(runtime)}</span>
            </div>
        </div>
    );
};

export default InfoRelease;
