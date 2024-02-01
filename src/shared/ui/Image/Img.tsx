import { FunctionComponent } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Img.scss';

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
        />
    );
};

export default Img;
