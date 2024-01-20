import { FunctionComponent, useEffect, useState } from 'react';
import cls from './Banner.module.scss';
import { useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';
import { Img } from '../../../shared/ui/Image';
import { IRequestFilm } from '../../../shared/types/typeOfResultRequest/typeOfResultRequest';

const Banner: FunctionComponent = () => {
    const [background, setBackground] = useState<string | undefined>('');
    const url: string = useAppSelector(state => state.config.url_images);
    const upcoming: Array<IRequestFilm> = useAppSelector(state => state.upcoming.results);

    useEffect(() => {
        console.log('banner');
        if (upcoming?.length <= 20) {
            const bg = url + upcoming[Math.floor(Math.random() * 20)]?.backdrop_path;
            setBackground(bg);
        }
    }, [url, upcoming]);

    return (
        <div className={cls.Banner}>
            <Img className={'lazy-load-image-background'} src={background}/>
        </div>
    );
};

export default Banner;
