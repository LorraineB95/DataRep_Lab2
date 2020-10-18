import React from 'react';

//Exports the contents of the class 'content' when called
export class Content extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
