import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increase, decrease } from '../actions/Counter';

class Counter extends Component {
  render() {
    return (
      <p>
        Clicked: {this.props.count} times
        {' '}
        <button onClick={this.props.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.props.onDecrement}>
          -
        </button>
      </p>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increase()),
  onDecrement: () => dispatch(decrease())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);