import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => {
    return (
        <div>
            <button className="btn bg-primary">
                {text}
            </button>
        </div>
    );
}

export default Button;