import React, {Component} from "react"
import Header from "../component/Header"
class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            age: 23
        }
    }

    componentWillMount(){
        this.setState({
            age: 24
        })
    }

    render(){
        return(
            <div>
                <Header name="Lasantha"/>
                <h1>{this.state.age}</h1>
            </div>
        )
    }
}

export default Home;