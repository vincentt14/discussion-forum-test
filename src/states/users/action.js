/* eslint-disable no-alert */
import api from '../../utils/api';

const ActionType = {
  RECIEVE_USERS: 'RECIEVE_USERS',
};

function recieveUsersActionCreator(users) {
  return {
    type: ActionType.RECIEVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  recieveUsersActionCreator,
  asyncRegisterUser,
};
