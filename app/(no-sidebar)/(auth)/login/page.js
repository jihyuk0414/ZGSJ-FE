'use client'

import BaseButton from '@/components/button/base-button';
import styles from './login.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation' 
import apiRouteClient from '@/lib/apiClient';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')  
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            return  // 유효하지 않은 이메일이면 여기서 중단
        }

        try {
            // Axios를 통해 API Route로 요청
            const response = await apiRouteClient.post('/auth/login', {
                email,
                password,
            });
        
            if (response.data.success) {
                // 성공 시 마이페이지로 이동
                router.push('/mypage');
            } else {
                throw new Error(response.data.error || '로그인 실패');
            }
        } catch (error) {
            setError(error.response?.data?.error || error.message);
        }
    };

    const validateEmail = (email) => {
        if (!email.includes('@')) {
            setEmailError('유효한 이메일을 입력하세요')
            return false
        } else {
            setEmailError('')
            return true
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h1>Need webdesign for your business?</h1>
                <h2>Design Spacee will help you.</h2>
                <div className={styles.logo}>
                    <span>DS</span>
                </div>
            </div>

            <div className={styles.rightSection}>
                <h3>로그인</h3>

                <form className={styles.loginForm} onSubmit={handleLogin}>
                    <div className={styles.inputGroup}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                validateEmail(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {emailError && <div className={styles.errorMessage}>{emailError}</div>}
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    <BaseButton
                       text= "로그인"
                       type="submit"
                   />
                </form>
                <div className={styles.links}>
                    <a href="/login/find-id">ID/PW 찾기</a>
                    <a href="/signup">회원이 아니신가요?</a>
                </div>
                {/* <BaseButton 
                    text='버튼'
                    type='button'
                    onClick={getData}
                    disabled={isLoading}
               /> */}
            </div>
        </div>
    )
}