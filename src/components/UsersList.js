import {useEffect} from 'react';
import {fetchUsers} from "../store";
import {useDispatch} from "react-redux";

function UsersList(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>UsersList</div>
    );
}

export default UsersList;