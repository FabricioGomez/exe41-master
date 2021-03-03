import { GET_DATA } from "./actionTypes";


export const getData = (index) => ({
  type: GET_DATA,
  payload: { index: ++index },
});
