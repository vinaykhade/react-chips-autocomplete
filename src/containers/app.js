import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'actions/app';
import styles from './app.css';
import MultiStageFrom from './multiStageForm';

type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class AppContainer extends Component {
  render() {
    return (
      <div className={styles.parentContainer}>
        <MultiStageFrom />
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProperties)(AppContainer);
