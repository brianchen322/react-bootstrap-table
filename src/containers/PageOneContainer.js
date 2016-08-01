import React from 'react';
import {connect} from 'react-redux';
import Logger from 'simple-console-logger';

const log = Logger.getLogger('PageOneContainer');

//import {bindActionCreators} from 'redux';

import {actions} from '../actions-reducers';

import PageOne from '../components/PageOne';

export const Container = (props) => {
  return (
    <PageOne {...props} />
  );
};

function mapStateToProps(state) {
  return {
    data: state.state.items,
    options: state.state.options,
    selected: state.state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelected: function (newSelection) {
      dispatch(actions.setSelected(newSelection));
    },
    showHeader: function (show) {
      log.debug('showHeader: ' + show);
      dispatch(actions.showHeader(show));
    },
    autoResize: function (value) {
      dispatch(actions.autoResize(value));
    },
    setTableClass: function (value) {
      dispatch(actions.setTableClass(value));
    },
    setActiveClass: function (value) {
      dispatch(actions.setActiveClass(value));
    },
    reloadData: function (size) {
      dispatch(actions.reloadData(size));
    },
    clearSelection: function () {
      dispatch(actions.clearSelection());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
