import { FunctionComponent } from 'react';
import './Genres.scss';
import { useAppSelector } from '../../../app/providers/storeProviders/utils/hooks';

interface GenresProps {
    genresProps: number[];
    className?: string;
}

const Genres: FunctionComponent<GenresProps> = ({ genresProps, className = '' }) => {
    const { genres } = useAppSelector(state => state.config);

    return (
        <div className={`${className} Genres`}>
            {
                genresProps?.map(g => {
                    if (!genres[g]) return;
                    return (
                        <div key={g} className="genre">
                            {genres[g]}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Genres;
