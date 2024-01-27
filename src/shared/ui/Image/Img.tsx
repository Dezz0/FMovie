import { FunctionComponent } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Img.scss';
import PosterFallback from '../../assets/images/no-poster.png';

interface ImgProps {
    src?: string;
    className?: string;
}

const Img: FunctionComponent<ImgProps> = ({ src, className = '' }) => {

    return (
        <LazyLoadImage
            className={className}
            alt=""
            effect="blur"
            src={src}
            placeholderSrc={PosterFallback}
        />
    );
};

export default Img;
