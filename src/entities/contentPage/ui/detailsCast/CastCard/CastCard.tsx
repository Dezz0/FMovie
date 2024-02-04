import { FunctionComponent } from 'react';
import cls from './CastCard.module.scss';
import Img from 'shared/ui/Image/Img';
import { ICastResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';
import Avatar from 'shared/assets/images/avatar.png';
import { useAppSelector } from 'app/providers/storeProviders/utils/hooks';

interface CastCardProps {
    actor: ICastResults;
}

const CastCard: FunctionComponent<CastCardProps> = ({ actor }) => {
    const { url_images } = useAppSelector(state => state.config);
    let imgUrl = actor.profile_path ? url_images + actor.profile_path : Avatar;

    return (
        <div key={actor.id} className={cls.CastCard}>
            <div className={cls.profileImg}>
                <Img src={imgUrl}/>
            </div>
            <div className={cls.name}>{actor.name}</div>
            <div className={cls.character}>
                {actor.character}
            </div>
        </div>
    );
};

export default CastCard;
