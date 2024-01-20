import { FunctionComponent, InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input: FunctionComponent<InputProps> = (props) => {
    const {
        placeholder,
        className = '',
        disabled = false,
        type,
        value = '',
        onChange,
    } = props;

    return (
        <input
            className={cls[className]}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
