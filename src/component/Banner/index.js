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
                if (res.error) {

                }
                else {
                    setData(res);
                }
            }
        ).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const handleOnclick = () => {
        window.location.href = data?.url;
    }

    return (
        <div className={styles.main}>
            {!loading ?
                <>
                    {data ?
                            <div className={styles.container}>
                                <div className={styles.leftDiv}>
                                    <div className={styles.heading}>{data?.heading}</div>
                                    <div className={styles.description}>{data?.description}</div>
                                    <button className={styles.btn} onClick={handleOnclick}>Go to URL</button>
                                </div>
                                <div className={styles.rightDiv}>
                                    <Timer deadline={data?.time} />
                                </div>
                            </div>
                            :
                            <div>
                                Banner's Visibility is Off
                            </div>
                    }
                </>
                :
                <div>
                    Loading...
                </div>
            }

        </div>
    )
}
