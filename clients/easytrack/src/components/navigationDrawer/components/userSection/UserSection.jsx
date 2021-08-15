import React from 'react'
import { useSelector } from 'react-redux';

const UserSection = () => {
    const { user: { username, email } } = useSelector(state => state.auth);

    return (
        <div className="shadow">
            <div className="p-6 flex flex-col">
                <div className="bg-brand text-white rounded-full flex items-center justify-center h-10 w-10 text-xl mb-2">{username.slice(0,1).toUpperCase()}</div>
                <div className="font-bold truncate text-lg">{username}</div>
                <div className="text-sm text-grey-medium truncate">{email}</div>
            </div>
        </div>
    )
}

export default UserSection;

