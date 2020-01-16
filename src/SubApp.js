import React, { useEffect } from 'react'
import counterChange from './counterAction';
import { useParentSpace } from 'react-redux-subspace';

function SubApp() {
  const parentSpace = useParentSpace();
  const counterValue = parentSpace.getState().counter.value;

  useEffect(() => {
    parentSpace.dispatch(counterChange())
  }, [parentSpace])

  return(
    <div>Parent Value: {counterValue}</div>
  );
}

export default SubApp;
