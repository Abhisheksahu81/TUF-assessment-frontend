import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getBanner, updateBanner } from '../../services/bannerService';
export default function Dashboard() {



    const [formData, setFormData] = useState({
        visibility: null,
        heading: '',
        description: '',
        time: '',
        url: ''
    }); 

    const [loading, setLoading] = useState(false);
    

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    
    const handleSubmit = async(event) => {
        event.preventDefault();
        setLoading(true);
        updateBanner(formData).then(
            res => {
                setLoading(false);
                alert('Form submitted!');
            }
        );       
    };

    return (
        <div className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
                <label>Visibility:</label>
                <input
                    type="checkbox"
                    name="visibility"
                    className={styles.input}
                    checked={formData.visibility}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label>Heading:</label>
                <input
                    type="text"
                    name="heading"
                    className={styles.input}
                    value={formData.heading}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label>Description:</label>
                <textarea
                    name="description"
                    className={styles.description}
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label>Time:</label>
                <input
                    type="datetime-local"
                    name="time"
                    className={styles.input}
                    value={formData.time.replace('Z', '')} // Adjust to fit datetime-local input requirements
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label>URL:</label>
                <input
                    type="url"
                    name="url"
                    className={styles.input}
                    value={formData.url}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className={styles.submitButton}>{loading ? "Submitting..." : "Submit"}</button>
        </form>
    </div>
)
}