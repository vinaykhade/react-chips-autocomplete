import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'actions/app';
import './app.scss';
import MultiStageFrom from './multiStageForm';

type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class AppContainer extends Component {
  render() {
    return (
      <div>
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
