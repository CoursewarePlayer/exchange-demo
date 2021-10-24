import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';

const useStyle = makeStyles(theme => ({

  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#eee"
  }
}))


const Workspace = () => {

  let classes = useStyle();

  return (
    <div className={ classes.container }>
      div
    </div>
  );
}

export default Workspace;
