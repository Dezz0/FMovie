import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import './VideoPopup.scss';
import ReactPlayer from 'react-player';

interface VideoPopupProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
    trailerId?: string;
    setTrailerId: Dispatch<SetStateAction<string>>;
}

const VideoPopup: FunctionComponent<VideoPopupProps> = ({ show, setShow, trailerId, setTrailerId }) => {

    const hidePopup = () => {
        setShow(false);
        setTrailerId('');
    };

    return (
        <div className={`videoPopup ${show ? 'visible' : ''}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${trailerId}`}
                    controls
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
};

export default VideoPopup;
