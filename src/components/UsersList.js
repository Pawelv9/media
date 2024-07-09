import {useEffect, useState} from 'react';
import {addUser, fetchUsers} from "../store";
import {useDispatch, useSelector} from "react-redux";
import Skeleton from "./Skeleton";
import Button from "./Button";

function UsersList(props) {
    const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    const [loadingUsersError, setLoadingUsersError] = useState(null)
    const [isCreatingUser, setIsCreatingUser] = useState(false)
    const [creatingUserError, setCreatingUserError] = useState(null)

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        setIsLoadingUsers(true)
        dispatch(fetchUsers())
            .unwrap()
            .catch((err) => setLoadingUsersError(err))
            .finally(() => setIsLoadingUsers(false))
    }, [dispatch]);

    const handleUserAdd = () => {
        setIsCreatingUser((true))
        dispatch(addUser())
            .unwrap()
            .catch(err => setCreatingUserError(err))
            .finally(() => setIsCreatingUser(false ))
    }

    if (isLoadingUsers === true) {
        return <Skeleton times={6} className='h-10 w-full'/>
    }

    if (loadingUsersError) {
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
        <div>
            <div className='flex flex-row justify-between m-3'>
                <h1 className='m-2 text-xl'>Users</h1>
                {
                    isCreatingUser
                    ? 'creating user..'
                    : <Button onClick={handleUserAdd}>+ Add User</Button>
                }
                {creatingUserError && 'Error creating user..'}
            </div>
            {renderedUsers}
        </div>
    );
}

export default UsersList;