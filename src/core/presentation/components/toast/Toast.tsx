import { CircularProgress, Modal } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { selectLoader } from '../../adapters/redux/loader/loader.selectors';

const Toast: FunctionComponent = () => {
  const loader = useSelector(selectLoader);

  return (
    <Modal open={loader.active}>
      <CircularProgress />
    </Modal>
  );
};

export default Toast;
