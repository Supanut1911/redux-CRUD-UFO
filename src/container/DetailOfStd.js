import React , {Component} from 'react'
import {connect} from 'react-redux'
import {getStdById} from '../index'

class DetailOfStd extends Component {

   
  

   state = {
       name : ""
   }

  

    render () {
        // console.log(this.state.name)
        return (
            <div>
                <h1>Search Student By ID </h1>
                <input type = "number" name="name" onChange={ (e) =>{
                    this.setState({
                        [e.target.name] : e.target.value
                    })
                } }/>
                <button onClick ={ () => this.props.getStdUsingID(this.state.name)}>Search</button>
                <hr/>
                <h3>{"id:" +this.props.result.id}</h3>
                <h3>{"name:" +this.props.result.name}</h3>
                <h3>{"surname:" +this.props.result.surename}</h3>
                <h3>{"Major:" +this.props.result.Major}</h3>
                <h3>{"Gpa:" +this.props.result.Gpa}</h3>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getStdUsingID : (value) => dispatch( getStdById(value) ) 
    }
}

const mapStateToProps = (state) => {
    return {
        result : state.std
    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailOfStd)