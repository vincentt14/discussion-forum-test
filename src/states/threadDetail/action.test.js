/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncRecieveThreadDetail, recieveThreadDetailActionCreator } from './action';

const fakeThreadsDetailResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    owner: {
      id: 'users-1',
      name: 'John Doe',
      avatar: 'https://generated-image-url.jpg',
    },
    upVotesBy: [],
    downVotesBy: [],
    comments: [
      {
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg',
        },
        upVotesBy: [],
        downVotesBy: [],
      },
    ],
  },
];

describe('asyncRecieveThreadDetail thunk', () => {
  jest.setTimeout(80000);
  beforeEach(() => {
    // backup original implementation
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    // restore original implementation
    api.getThreadDetail = api._getThreadDetail;
  });

  // delete backup
  delete api._getThreadDetail;

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(fakeThreadsDetailResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncRecieveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(recieveThreadDetailActionCreator(fakeThreadsDetailResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
