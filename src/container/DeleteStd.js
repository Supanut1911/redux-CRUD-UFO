import React , {Component} from 'react'
import {connect} from 'react-redux'
import {delStd} from '../index'

class DeleteStd extends Component {

    state = {
        num : 0
    }


    render () {
        return (
            <div>
                <h1>enter student_id that you want to DELETE</h1>
                <input type="number" name="num" onChange={ (e)=>{
                    this.setState({ [e.target.name] : e.target.value})
                }}/>
                <button onClick={ () => this.props.deleteStudent(this.state.num)}>submit</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteStudent : (value) => dispatch( delStd(value)) 
    }
}

const mapStateToProps = (state) => {
    return {
        res : state.std
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteStd)