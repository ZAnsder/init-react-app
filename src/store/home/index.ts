import { useSelector } from "react-redux";
import { RootStore } from "../reducers";

export function useHomePageState() {
  const state = useSelector((state: RootStore) => state.home);

  return state;
}
