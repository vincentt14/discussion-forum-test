import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function CommentItem({ content, createdAt, owner }) {
  const { avatar, name, id } = owner;

  const isString = (isiContent) => isiContent.search('<div>|<pre>|<p>|<b>|<i>|<blockquote>');

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <div className="flex-shrink-0">
            <img className="border border-secondary rounded-circle" src={avatar} alt={id} title={name} style={{ height: '30px' }} />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="card-title ms-2 mb-0">{owner.name}</h5>
          </div>
        </div>

        {isString(content) === -1 ? <p className="card-text">{parse(content)}</p> : <div className="card-text">{parse(content)}</div>}
        <p className="card-subtitle mb-2 text-muted">
          Created
          {' '}
          {postedAt(createdAt)}
        </p>
      </div>
    </div>
  );
}

const commentItemShape = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
};

CommentItem.propTypes = {
  ...commentItemShape,
};

export { commentItemShape };

export default CommentItem;
