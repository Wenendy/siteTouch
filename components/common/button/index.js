import React from 'react';
import { ChevronRight } from 'react-feather';

function Button(props) {
    return (
        <button className={props.Class} onClick={props.Clickble}>
            <span className={`title ${props.Title ? props.Title : ''}`}>{props.Name}</span>
            {props.BtnIcon &&
                <span className={props.BtnIcon}>
                    <ChevronRight />
                </span>
            }
        </button>
    );
}

export default Button;