import { FunctionComponent } from 'react';
import cls from './CartSkeleton.module.scss';

const CartSkeleton: FunctionComponent = () => {

    const Skeleton = () => {
        return (
            <div className={cls.skItem}>
                <div className={`${cls.circle} skeleton`}></div>
                <div className={`${cls.row} skeleton`}></div>
                <div className={`${cls.row2} skeleton`}></div>
            </div>
        );
    };

    return (
        <div className={cls.CartSkeleton}>
            {Skeleton()}
            {Skeleton()}
            {Skeleton()}
            {Skeleton()}
            {Skeleton()}
            {Skeleton()}
        </div>
    );
};

export default CartSkeleton;
