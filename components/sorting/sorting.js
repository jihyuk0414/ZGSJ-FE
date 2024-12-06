import React from 'react';
import styles from './sorting.module.css';

export default function Sorting({ onChange, selectedOption }) {
    return (
        <div className={styles.sortContainer}>
            <select 
                className={styles.sortSelect} 
                onChange={onChange} 
                value={selectedOption}
            >
                <option value="latest">최신순</option>
                <option value="oldest">오래된 순</option>
            </select>
        </div>
    );
}