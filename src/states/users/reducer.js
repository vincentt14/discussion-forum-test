import { ActionType } from './action';

function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.RECIEVE_USERS:
      return action.payload.users;
    default:
      return users;
  }
}

export default usersReducer;
