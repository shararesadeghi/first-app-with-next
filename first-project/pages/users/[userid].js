import {useRouter}  from 'next/router';
function User(){
    const router = useRouter();
    const id = router.query.userid;
    return <p>user #{id}</p>
}
export default User;