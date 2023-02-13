import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import LoadingStyled from './styled/LoadingStyled';

function Loading() {
  return (
    <LoadingStyled>
      <LoadingBar style={{ backgroundColor: '#4877fd' }} />
    </LoadingStyled>
  );
}

export default Loading;
