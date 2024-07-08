import {useEffect} from 'react';
import {fetchUsers} from "../store";
import {useDispatch, useSelector} from "react-redux";

function UsersList(props) {
    const dispatch = useDispatch();
    const {isLoading, data, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading..</div>
    }

    if (error) {
        return <div>error fetching data..</div>;
    }

    return (
        <div>{data.length}</div>
    );
}

export default UsersList;