import { useDispatch } from "react-redux";
import { clearDataUser } from "../reducers/userReducer";

export default function clearUser () {
    console.log('clear 1')
    const dispatch = useDispatch
    console.log('clear 33')
    dispatch(clearDataUser())
    console.log('clear 2')
}