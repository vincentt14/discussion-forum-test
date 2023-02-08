/* eslint-disable no-undef */

import threadsReducer from './reducer';

describe('threadReducers  function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Test 1',
            body: 'Ini adalah test Thread',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            totalComments: 0,
          },
          {
            id: 'thread-2',
            title: 'Thread Test 2',
            body: 'Ini adalah test Thread 2',
            createdAt: '2022-09-22T10:06:55.588Z',
            ownerId: 'users-2',
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });
});
