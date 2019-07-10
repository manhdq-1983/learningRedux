import * as types from '../constants/type';

const addUser = (data) => ({
    type: types.ADD_USER,
    data
});

const updateUser = (data) => ({
    type: types.UPDATE_USER,
    data
});

const deleteUser = (id) => ({
    type: types.DELETE_USER,
    id
});

export {
    addUser,
    updateUser,
    deleteUser
};
