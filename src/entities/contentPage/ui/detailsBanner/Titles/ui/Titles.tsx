import { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import cls from './Titles.module.scss';

interface TitleProps {
    title: string;
    release_date: string;
    tagline: string;
}

const Titles: FunctionComponent<TitleProps> = ({ title, release_date, tagline }) => {

    return (
        <>
            <div className={cls.title}>
                {`${title} (${dayjs(release_date).format('YYYY')})`}
            </div>
            <div className={cls.subtitle}>
                {tagline}
            </div>
        </>
    );
};

export default Titles;
