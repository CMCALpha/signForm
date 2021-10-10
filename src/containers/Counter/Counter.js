import React, { Component } from 'react';
import {connect} from "react-redux"
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreaters from "../../store/action/index";
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddingCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
            <hr />
            <button onClick={()=>this.props.onStoreResult(this.props.ctr)} >Submit</button>
             <ul>
             {this.props.submit.map(strResult=>(
                  <li key={strResult.id} onClick={() =>this.props.onDeleteResults(strResult.id)}>{strResult.value}</li>
             ))}
             </ul>
            
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
    ctr : state.ctr.counter,
    submit : state.rsl.results
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreaters.increment()),
        onAddingCounter: () => dispatch(actionCreaters.add(5)),
        onSubstractCounter: () => dispatch(actionCreaters.substract(5)),
        onDecrementCounter: () => dispatch(actionCreaters.decrement()),
        onStoreResult: (submit)=> dispatch(actionCreaters.store(submit)),
        onDeleteResults: (id)=> dispatch(actionCreaters.remove(id))
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(Counter);