import { useState, useEffect } from "react";
import UserService, { User } from "../services/UserService";
import { CanceledError } from "../services/Api-client";

const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = UserService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    // .finally(() => {
    // setLoading(false)
    // });//  this is a method that is in all promises that will always be executed when our promises are resolved/rejected. but doesn't work im strict mode

    return () => cancel();
  }, []);
  return { users, error, loading, setError, setUsers, setLoading };
};

export default useUser;
