import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p> Loading </p>
      : (
        <div className="container">
          <img 
            src={ src }
            alt="dog"
            className="dog-image"
          />
          <button
            className="btn btn-success"
            onClick={ fetchDog }
            type="button"
          >
            Novo Doguinho
          </button>
        </div>
      )
  );
}
const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
