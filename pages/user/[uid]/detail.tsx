import { useRouter } from 'next/router';
import Head from "next/head";
import React from 'react';
// import img from '../../../assets/sc4.jpg';

const Detail: React.FC = () => {
    const router = useRouter();
    const {uid} = router.query;

    const handleOnClick = () => {
        router.push(`/user/${uid}`);
    }
    return (
    <div>
        <Head>
            <title>User</title>
        </Head>
        <p>
        Tôi là người thứ: {uid} nhưng chi tiết hơn
        </p>    
        {/* <img src={img} alt="none" />  */}
        <button onClick={handleOnClick}>Back</button>
    </div>
    )
}

export default Detail;