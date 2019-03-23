import React , {Component} from 'react'
import {connect} from 'react-redux'
import {getStd} from '../index'

class Home extends Component {

    componentDidMount = () => {
        console.log("1value =" , this.props.value)
        this.props.getStd()
        console.log("after")
    }

    renderStd = () => {
        console.log("2value =" , this.props.value)
        if(this.props.value) 
            return this.props.value.map( (item ,index) =>{
                return (<li key={index}> {item.id+"  "+item.name }</li>)
            })
    }


    render () {
        return (
            <div>
                <h1>List</h1>
                <hr/>
                <ul>{this.renderStd()}</ul>
                <hr/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        value : state.std
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        getStd : () => dispatch( getStd() )
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
