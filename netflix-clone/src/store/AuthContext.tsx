// src/context/AuthContext.tsx

import { createContext } from "react";
import { User } from "firebase/auth";
import { auth, db } from "../Firebase/config";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface FirebaseContextType {
  auth: typeof auth;
  db: typeof db;
}

export const Firebasecontext = createContext<FirebaseContextType | null>(null);
export const AuthContext = createContext<AuthContextType | null>(null);
