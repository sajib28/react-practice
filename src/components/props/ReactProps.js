import React, { Component } from 'react'
import ChildA from './ChildA'

class ReactProps extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        const user ={
            name:"sajib",
            age:30,
            hobby:["Watching Tv","Reading Books","Traveling"]
        }
        return (
            <div>
                Hello Dear
                <ChildA user={user}>
                </ChildA>
            </div>
        )
    }
}
export default ReactProps