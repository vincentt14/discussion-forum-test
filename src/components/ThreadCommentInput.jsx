/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncAddComment, asyncRecieveThreadDetail } from '../states/threadDetail/action';

function ThreadCommentInput({ id }) {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const createCommentar = async (e) => {
    e.preventDefault();
    dispatch(asyncAddComment({ content, id }));
    dispatch(asyncRecieveThreadDetail(id));
    setContent('');
  };

  return (
    <form onSubmit={createCommentar}>
      <div className="form-floating">
        <textarea className="form-control mb-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} value={content} onChange={onContentChange} />
        <label htmlFor="floatingTextarea2">Leave a comment here</label>
      </div>
      <button type="submit" className="btn btn-outline-primary w-100 mb-3">
        Send
      </button>
    </form>
  );
}

ThreadCommentInput.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ThreadCommentInput;
