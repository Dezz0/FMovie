import { FunctionComponent } from 'react';
import PosterFallback from '../../../../../shared/assets/images/no-poster.png';
import { useAppSelector } from '../../../../../app/providers/storeProviders/utils/hooks';
import Img from '../../../../../shared/ui/Image/Img';

interface DetailsBannerProps {
    poster_path: string;
}

const DetailsPoster: FunctionComponent<DetailsBannerProps> = ({ poster_path }) => {
    const { url_images } = useAppSelector(state => state.config);

    return (
        poster_path ? (
            <Img
                className="posterImg"
                src={url_images + poster_path}
            />
        ) : (
            <Img
                className="posterImg"
                src={PosterFallback}
            />
        )
    );
};

export default DetailsPoster;
