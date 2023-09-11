import { useEffect, useState } from "react";
import ApiClient, { CanceledError } from "./services/Api-client";
import UserService, { User } from "./services/UserService";
import useUser from "./hooks/useUsers";

const App = () => {

  const {users, loading, error, setError, setLoading, setUsers} = useUser() //custom hook to fetch data

  const addUser = () => {
    const originalUsers = [...users];

    const newUser = { id: 0, name: "Web3Phoenix" };
    setUsers([newUser, ...users]);

    UserService.create(newUser)
      // .then(res => setUsers([res.data, ...users])) // we can destructure this further
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    // optimistic updating => that is updating the ui first then calling the server to save the changes. opp is pessimistic updating
    setUsers(users.filter((u) => u.id !== user.id));

    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      // then we return the original list of users
      setUsers(originalUsers);
    });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];

    const updatedUsers = { ...user, name: user.name + "!" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUsers : u)));

    UserService.update(updatedUsers).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>

      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* <select  className="form-select" onChange={(event) => setCategory( event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}/> */}
    </div>
  );
};

export default App;
