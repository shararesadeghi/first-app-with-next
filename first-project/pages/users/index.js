import React from 'react';
import Link from 'next/link';

const users = [
    {id:1, name:1},
    {id:2, name:2},
    {id:3, name:3},
    {id:4, name:4},
    {id:5, name:5},
]

const Users = () => {
    return (
        <>
        <h1>
           Users List
        </h1>
        <ul>
            {
                users.map(user=>(
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>user{user.name}</Link>
                    </li>
                ))
            }
        </ul>
        </>
    );
};

export default Users;