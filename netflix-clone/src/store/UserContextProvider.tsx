
import { useState, ReactNode } from "react";
import { User } from "firebase/auth";
import { Firebasecontext,AuthContext } from "./AuthContext";
import { auth, db } from "../Firebase/config";

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Firebasecontext.Provider value={{ auth, db }}>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </Firebasecontext.Provider>
  );
};

export default UserContextProvider;
