import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => {
    return (
        <div>
            <button className="btn bg-primary">
                <h5>{text}</h5>
            </button>
        </div>
    );
}

export default Button;