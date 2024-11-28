import { create } from "zustand";

type User = {
  avatar?: string;
  name: string;
  email: string;
};

type UserStore = {
  user: User;
  mutation: (user: UserStore["user"]) => void;
};

const userStore = create<UserStore>((set) => ({
  user: {
    name: "",
    email: "",
  },
  mutation: (user: UserStore["user"]) => set({ user }),
}));

export default userStore;
