import { FunctionComponent } from 'react';
import './Arrows.scss';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

interface ArrowsProps {
    changeContentCarousel: (dir: string) => void;
}

const Arrows: FunctionComponent<ArrowsProps> = ({ changeContentCarousel }) => {

    return (
        <>
            <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={() => changeContentCarousel('left')}
            />
            <BsFillArrowRightCircleFill
                className="carouselRightNav arrow"
                onClick={() => changeContentCarousel('right')}
            />
        </>
    );
};

export default Arrows;
