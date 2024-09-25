import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useState,
} from "react";
import { UserType } from "../types/users.types";
import { API } from "../axios";

type AppContextType = {
  counter: number;
  setCounter?: Dispatch<number>;
  increase: () => void;
  decrease: () => void;
  reset: () => void;

  users: UserType[];
  setUsers?: Dispatch<UserType[]>;
  getAllUsers: () => Promise<unknown>;
  updateAllUsers: () => Promise<unknown>;
};

export const AppContext = createContext<AppContextType>({
  counter: 0,
  increase: () => {},
  decrease: () => {},
  reset: () => {},

  users: [],
  getAllUsers: async () => {},
  updateAllUsers: async () => {},
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState<number>(0);
  const [users, setUsers] = useState<UserType[]>([]);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const getAllUsers = async () => {
    try {
      const { data } = await API.get("users");
      console.log(data, "users");
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };

  const updateAllUsers = async () => {
    try {
      for await (const user of users) {
        const { data } = await API.patch(`users/${user.id}`, user);
        console.log(`The user ${user.id} was updated`, data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        counter,
        setCounter,
        increase,
        decrease,
        reset,
        users,
        setUsers,
        getAllUsers,
        updateAllUsers
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
