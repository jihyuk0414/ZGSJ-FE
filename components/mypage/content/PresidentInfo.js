import React, { useEffect, useState } from 'react';
import styles from './PresidentInfo.module.css';
import BaseButton from '@/components/button/base-button';
import { nextClient } from '@/lib/nextClient';
import PrimaryButton from '@/components/button/primary-button';

const PresidentInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditingBirth, setIsEditingBirth] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] = useState({ birthDate: '', phoneNumber: '' });

  useEffect(() => {
    const loadMyPageData = async () => {
      try {
        const response = await nextClient.get('/mypage/president');
        const data = response.data;
        
        setName(data.name);
        setEmail(data.email);
        setBirthDate(data.birthDate);
        setPhoneNumber(data.phoneNumber);
        setOriginalData({
          birthDate: data.birthDate,
          phoneNumber: data.phoneNumber
        });

      } catch (error) {
        console.error('마이페이지 정보 로드 에러:', error.message);
      }
    }

    loadMyPageData();
  },[])

  const formatBirthDate = (input) => {
    const numbers = input.replace(/[^0-9]/g, '');
    if (numbers.length >= 8) {
      const year = numbers.substring(0, 4);
      const month = numbers.substring(4, 6);
      const day = numbers.substring(6, 8);
      return `${year}년 ${month}월 ${day}일`;
    }
    return input;
  };


  const handleSave = async () => {    
    try {
      // birthDate 값을 yyyy-mm-dd 형식으로 변환
      const formattedBirthDate = birthDate.replace(/[년월일\s]/g, '').replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
      const formattedPhoneNumber = phoneNumber.replace(/-/g, '');

      await nextClient.put('/mypage/president/modify', {
        phoneNumber: formattedPhoneNumber,
        birthDate: formattedBirthDate,
      });
      setIsEditing(false);
      setOriginalData({
        birthDate,
        phoneNumber
      });
      alert("변경 사항이 저장되었습니다.");
    } catch (error) {
      console.error('정보 수정 에러:', error.message);
      // 에러 발생 시 원래 데이터로 되돌리기
      setBirthDate(originalData.birthDate);
      setPhoneNumber(originalData.phoneNumber);
    }
  };

  const formatPhoneNumber = (input) => {
    const numbers = input.replace(/[^0-9]/g, '');
    if (numbers.length >= 10) {
      return numbers.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    return input;
  };

  return (
    <div className={styles.container}>
        <div className={styles.headerSection}>
            <h2 className={styles.title}> {name} 사장님</h2>
            <div className={styles.email}>{email}</div>
        </div>
        <div className={styles.changeSection}>
          <div className={styles.fieldGroup}>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>생년월일</label>
              <div className={styles.inputChange}>
              {isEditingBirth ? (
                <input
                  type="text"
                  value={birthDate.replace(/[년월일\s]/g, '')}
                  onChange={(e) => setBirthDate(formatBirthDate(e.target.value))}
                  className={styles.input}
                  placeholder="YYYYMMDD"
                />
              ) : (
                <div className={styles.displayText}>{birthDate}</div>
              )}
              <BaseButton
                text={isEditingBirth ? '확인' : '생년월일 변경'}
                onClick={() => setIsEditingBirth(!isEditingBirth)}
              />
              </div>
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>전화번호</label>
              <div className={styles.inputChange}>
              {isEditingPhone ? (
                <input
                  type="tel"
                  value={phoneNumber.replace(/-/g, '')}
                  onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                  className={styles.input}
                  placeholder="01012345678"
                />
              ) : (
                <div className={styles.displayText}>{phoneNumber}</div>
              )}
              <BaseButton
                  text={isEditingPhone ? '확인' : '전화번호 변경'}
                  onClick={() => setIsEditingPhone(!isEditingPhone)}
              />
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton
          text="변경 사항 저장"
          onClick={handleSave}
        />
    </div>
  );
};

export default PresidentInfo;