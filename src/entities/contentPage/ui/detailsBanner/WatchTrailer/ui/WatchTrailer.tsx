import { FunctionComponent } from 'react';
import './WatchTrailer.scss';
import { PlayIcon } from '../../../../../../shared/ui/playbtn';

interface WatchTrailerProps {
    openTrailer: () => void;
}

const WatchTrailer: FunctionComponent<WatchTrailerProps> = ({ openTrailer }) => {

    return (
        <div className="playbtn" onClick={openTrailer}>
            <PlayIcon/>
            <span className="text">Watch Trailer</span>
        </div>
    );
};

export default WatchTrailer;
