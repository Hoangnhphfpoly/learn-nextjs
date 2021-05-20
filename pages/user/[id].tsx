import { useRouter } from 'next/router';
import Head from "next/head";
import React from 'react';

const User: React.FC = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
    <div>
        <Head>
            <title>User</title>
        </Head>
        Tôi là người thứ: {id}
     
    </div>
    )
}

export default User;