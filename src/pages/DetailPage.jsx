/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentLists';
import ThreadCommentInput from '../components/ThreadCommentInput';
import ThreadDetail from '../components/ThreadDetail';
import { asyncRecieveThreadDetail } from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const { detailThread = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncRecieveThreadDetail(id));
  }, [id, dispatch]);

  if (!detailThread) {
    return null;
  }
  return (
    <section className="container">
      <ThreadDetail {...detailThread} />
      <h4 className="my-3">Add Comment</h4>
      <ThreadCommentInput id={id} />
      <h4 className="my-3">Comments</h4>
      <CommentList comments={detailThread.comments} />
    </section>
  );
}

export default DetailPage;
