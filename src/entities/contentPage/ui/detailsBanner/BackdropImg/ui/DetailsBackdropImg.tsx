import { FunctionComponent } from 'react';
import './DetailsBackdropImg.scss';
import { useAppSelector } from '../../../../../../app/providers/storeProviders/utils/hooks';
import Img from '../../../../../../shared/ui/Image/Img';

interface DetailsBackdropImgProps {
    backdrop_path: string;
}

const DetailsBackdropImg: FunctionComponent<DetailsBackdropImgProps> = ({ backdrop_path }) => {
    const { url_images } = useAppSelector(state => state.config);

    return (
        <>
            <div className="backdrop-img">
                <Img src={url_images + backdrop_path}/>
            </div>
            <div className="opacity-layer"></div>
        </>
    );

};

export default DetailsBackdropImg;
