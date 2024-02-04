import { FunctionComponent, useEffect, useState } from 'react';
import cls from './Banner.module.scss';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProviders/utils/hooks';
import Img from 'shared/ui/Image/Img';
import { fetchUpcoming } from 'entities/upcoming/model/slice/upcomingSlice';

const Banner: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const [background, setBackground] = useState<string | undefined>('');
    const url: string = useAppSelector(state => state.config.url_images);
    const { results } = useAppSelector(state => state.upcoming);

    useEffect(() => {
        if (!results?.length) {
            dispatch(fetchUpcoming());
        } else {
            const bg = url + results[Math.floor(Math.random() * 20)]?.backdrop_path;
            setBackground(bg);
        }
    }, [url, results, dispatch]);

    return (
        <div className={cls.Banner}>
            <Img src={background}/>
        </div>
    );
};

export default Banner;
