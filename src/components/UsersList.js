import {useEffect} from 'react';
import {addUser, fetchUsers} from "../store";
import {useDispatch, useSelector} from "react-redux";
import Skeleton from "./Skeleton";
import Button from "./Button";
import {useThunk} from "../hooks/use-thunk";


function UsersList(props) {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);

    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)

    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser()
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
                <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
                {creatingUserError && 'Error creating user..'}
            </div>
            {renderedUsers}
        </div>
    );
}

export default UsersList;