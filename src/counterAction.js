const counterChange = () => async (dispatch, getState) => {
  dispatch({
    type: 'START_COUNTER_CHANGE',
  });

  await delay(1000); // wait one second

  dispatch({
    type: 'END_COUNTER_CHANGE'
  })
}

const delay = ms => new Promise(res => setTimeout(res, ms));

export default counterChange;
