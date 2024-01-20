import { FunctionComponent } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Img.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ImgProps {
    className?: string;
    src?: string;
}

const Img: FunctionComponent<ImgProps> = ({ className = '', src }) => {

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
