import { atom } from "jotai";

export const userAddressAtom = atom(null);
export const ethBalanceAtom = atom();
export const isLoginAtom = atom((get) => get(userAddressAtom) !== null);
