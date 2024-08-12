import React, { useEffect, useState } from 'react'
import { getBanner } from '../../services/bannerService'
import styles from './styles.module.css'
import Timer from '../Timer';

export default function Banner() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const getData = () => {
        setLoading(true);
        getBanner().then(
            res => {
                setLoading(false);
                setData(res);
                console.log(res);
            }
        ).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.leftDiv}>
                    <div className={styles.heading}>{data?.heading}</div>
                    <div className={styles.description}>{data?.description}</div>
                    <button className={styles.btn}>Go to URL</button>
                </div>
                <div className={styles.rightDiv}>
                    {data?.time &&
                        
                        <Timer deadline={data?.time} />
                    }
                </div>
            </div>
        </div>
    )
}
