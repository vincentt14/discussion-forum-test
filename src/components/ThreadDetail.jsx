import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadDetail({
  body, createdAt, owner, title,
}) {
  const { id, name, avatar } = owner;

  const isString = (isiBody) => isiBody.search('<div>|<pre>|<p>|<b>|<i>|<blockquote>');

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <div className="flex-shrink-0">
            <img className="border border-secondary rounded-circle" src={avatar} alt={id} title={name} style={{ height: '50px' }} />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="card-title ms-2 mb-0">{name}</h5>
          </div>
        </div>
        <h5 className="card-title">{title}</h5>
        {isString(body) === -1 ? <div className="card-text">{parse(body)}</div> : <div className="card-text">{parse(body)}</div>}
        <p className="card-subtitle mt-2 text-muted">
          Created
          {' '}
          {postedAt(createdAt)}
        </p>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  title: PropTypes.string.isRequired,
};

export default ThreadDetail;
