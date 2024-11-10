'use client';
import React, {useState} from 'react';
import Image from "next/image";
import styles from './Header.module.css';

const Header: React.FC = () => {

  const [hovered, setHovered] = useState(false)

  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <Image
                src='/double-quotes.png'
                alt='Double Quotes'
                width={24}
                height={24}
            />
            <button
                className={styles.nightMode}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                onClick={() => alert('Button clicked!')} // Добавьте свою функцию обработки клика
                style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0}}
            >
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-labelledby="moonIconTitle"
                    stroke={hovered ? "#9247D8" : "#000000"}
                    opacity=".5"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    fill="none"
                    color="#000000"
                    style={{ transition: 'stroke 0.5s' }}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <title id="moonIconTitle">Moon</title>
                        <path
                            d="M10.423839,3 C10.1490474,3.80837289 10,4.67486099 10,5.57616098 C10,9.99443898 13.581722,13.576161 18,13.576161 C18.9013,13.576161 19.7677881,13.4271135 20.576161,13.152322 C19.5038921,16.3066875 16.516978,18.576161 13,18.576161 C8.581722,18.576161 5,14.994439 5,10.576161 C5,7.05918297 7.26947343,4.07226889 10.423839,3 Z"
                        ></path>
                    </g>
                </svg>
            </button>
        </div>
    </header>
  );
};

export default Header;