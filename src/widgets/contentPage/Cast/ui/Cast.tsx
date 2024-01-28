import { FunctionComponent } from 'react';
import cls from './Cast.module.scss';
import { ICastResults } from '../../../../shared/types/typeOfResultRequest/typeOfResultRequest';
import ContentWrapper from '../../../../shared/ui/contentWrapper/ContentWrapper';
import { CartSkeleton, CastCard } from '../../../../entities/contentPage';

interface CastProps {
    cast?: Array<ICastResults>;
}

const Cast: FunctionComponent<CastProps> = ({ cast }) => {

    if (!cast?.length) {
        return <ContentWrapper><CartSkeleton/></ContentWrapper>;
    }

    return (
        <div className={cls.Cast}>
            <ContentWrapper>
                <div className={cls.title}>Top Cast</div>
                {(!!cast) && (
                    <div className={cls.listItems}>
                        {cast?.map((actor) => <CastCard key={actor.id} actor={actor}/>)}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;
