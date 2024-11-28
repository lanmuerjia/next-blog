import { create } from "zustand";

type UserStore = {
  user: unknown;
  updateUser: (user: UserStore["user"]) => void;
};

const userStore = create<UserStore>((set) => ({
  user: {},
  updateUser: (user: UserStore["user"]) => set({ user }),
}));

export default userStore;
