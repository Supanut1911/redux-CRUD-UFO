import React , {Component} from 'react'
import {connect} from 'react-redux'
import {addStdx} from '../index'

class AddStd extends Component {

    state = {
        id:0,
        name: " ",
        surname:" ",
        Major:" ",
        Gpa:0.0
       
    }



    render () {
        return (
            <div>
                <h1>Add Student</h1>
                
                id:<input type="number" name="id" onChange={ (e) =>{
                    this.setState({[e.target.name] : e.target.value})
                }} />
                <br/>
                name:<input type="text" name="name" onChange={ (e) => {
                    this.setState({[e.target.name] : e.target.value})
                }} />
                <br />
                surname:<input type="text" name="surname" onChange={ (e)=>{
                    this.setState({[e.target.name] : e.target.value})
                }} />
                <br/>
                Major:<input type="text" name="Major" onChange={ (e)=>{
                    this.setState({[e.target.name] : e.target.value})
                }} />
                <br/>
                Gpa:<input type="number" name="Gpa" onChange={ (e)=>{
                    this.setState({[e.target.name] : e.target.value})
                }} />
                <br/>
                <button onClick={ () => {this.props.addStudent(this.state);alert("add successful")}}>submit</button>
    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       addStudent : (value) => dispatch( addStdx(value))
    }
}

const mapStateToProps = (state) => {
    return {
        res : state.std
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddStd)