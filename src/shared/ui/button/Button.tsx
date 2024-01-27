import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    const {
        className = '',
        disabled = false,
        children,
        type = 'button',
        ...otherProps

    } = props;

    return (
        <button
            className={cls[className]}
            disabled={disabled}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
