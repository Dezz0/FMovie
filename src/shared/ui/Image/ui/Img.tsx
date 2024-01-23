import { FunctionComponent } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Img.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ImgProps {
    src?: string;
}

const Img: FunctionComponent<ImgProps> = ({ src }) => {

    return (
        <LazyLoadImage
            alt=""
            effect="blur"
            src={src}
        />
    );
};

export default Img;
