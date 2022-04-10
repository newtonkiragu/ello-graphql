import React, { Component } from 'react';

const Content = (props) => (
    <div key={props.pageIndex}>
        <p>{`${props.pageIndex}`}</p>

        {props.tokens.map((value) => (
            <h1>{`${value.value}`}</h1>
        ))}

    </div>
);
export default Content;
