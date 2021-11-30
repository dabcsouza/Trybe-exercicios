import React from 'react';
import { connect } from 'react-redux';
import addClick from '../actions';
class ButtonClicks extends React.Component {
  render () {
    return (
      <div>
        <button
          onClick={this.props.add}
          className="btn btn-success"
        >
          Clique aqui
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addClick())});
export default connect(null, mapDispatchToProps)(ButtonClicks);