import {useEffect} from 'react';
import {fetchUsers} from "../store";
import {useDispatch, useSelector} from "react-redux";
import Skeleton from "./Skeleton";

function UsersList(props) {
    const dispatch = useDispatch();
    const {isLoading, data, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (isLoading) {
        return <Skeleton times={6} className='h-10 w-full'/>
    }

    if (error) {
        return <div>error fetching data..</div>;
    }

    const renderedUsers = data.map((user) => {
        return <div key={user.id} className='mb-2 border rounded'>
            <div className='flex justify-between items-center cursor-pointer'>
                {user.name}
            </div>
        </div>
    })

    return (
        <div>{renderedUsers}</div>
    );
}

export default UsersList;