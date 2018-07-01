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
  // componentDidMount() {
  //   this.props.dispatch(loadApp());
  // }

  props: Props;

  render() {
    return (
      <div className={styles.container}>
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
