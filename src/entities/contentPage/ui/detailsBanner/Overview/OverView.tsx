import { FunctionComponent } from 'react';
import cls from './OverView.module.scss';

interface OverViewProps {
    overview: string;
}

const OverView: FunctionComponent<OverViewProps> = ({ overview }) => {

    return (
        <div className={cls.overview}>
            <div className={cls.heading}>
                Overview
            </div>
            <div className={cls.description}>
                {overview}
            </div>
        </div>
    );
};

export default OverView;
