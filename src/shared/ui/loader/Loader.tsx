import { FunctionComponent } from 'react';
import cls from './Loader.module.scss';

const Loader: FunctionComponent = () => {

    return (
        <div className={cls.Center}>
            <div className={cls.Loader}/>
        </div>

    );
};

export default Loader;
