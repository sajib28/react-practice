import React, { Component } from "react";

export default class ChildA extends Component {
    render() {
        const { name, age, hobby } = this.props.user;
        console.log(hobby);
        return (
            <div>
                <h2>
                    Name: {name} and age is: {age}{" "}
                </h2>
                {hobby.map((data, index) => (
                    <li key={index}>{data}</li>
                ))}
            </div>
        );
    }
}
