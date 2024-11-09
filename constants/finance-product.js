export const financeProducts = [
    {
      title: "소상공인 저금리 대환대출(수탁보증)",
      subtitle: "고금리 대출 보유 소상공인 대상 신용보증기금 보증서 담보 대출",
      loanTypes: [
        "개인사업자대출",
        "기업대출",
        "정책자금대출",
        "신용보증기금",
      ],
      target: "고금리 대출을 보유하고 있는 개인사업자 또는 소기업 법인",
      term: "10년(3년 거치 7년 원금균등분할상환)",
      limit: "개인사업자 : 최대 1억원 / 법인 사업자 : 최대 2억원",
      url: "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PRD_CD=P020006404&PRD_YN=Y",
    },
    {
      title: "우리 · 경기도 소상공인지원 자금(협조융자)",
      subtitle: "경기도 내 사업장 소재 소상공인 대상 비대면 대출",
      loanTypes: ["개인사업자대출", "신용보증재단 보증서"],
      target: "경기도 소재 사업장의 소상공인 경기신용보증재단 자금 추천",
      term: "5년(1년거치 4년 원금균등분할상환)",
      limit: "최대 1억원(비대면보증신청: 최대 7천만원)",
      url: "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PLM_PDCD=P020006552&PRD_CD=P020006552&HOST_PRD_CD=2217030690113",
    },
    {
      title: "우리은행 네이버 스마트플레이스 대출",
      subtitle: "네이버 '스마트플레이스'에 등록된 소상공인 전용상품",
      loanTypes: ["신용대출", "개인사업자대출", "인터넷신용", "일반/기타"],
      target: "네이버 '스마트플레이스' 등록 개인사업자",
      term: "5년 이내",
      limit: "최대 4천만원",
      url: "https://spot.wooribank.com/pot/Dream?withyou=POLON0052&cc=c010528:c010531;c012425:c012399&PRD_CD=P020006375&PRD_YN=Y",
    },
    {
      title: "우리사장님e편한통장",
      subtitle: "가맹점 매출대금 입금 시 수수료 면제 및 우대금리 제공",
      loanTypes: ["자유입출금상품", "기업전용상품"],
      target: "사업자등록증을 소지한 개인사업자 (1인 1계좌)",
      term: "제한 없음",
      limit: "제한 없음",
      interestRate: [
        { period: "7일 미만", amount: "무관", rate: "연 0.0%" },
        { period: "7일 이상", amount: "50만원 미만", rate: "연 0.0%" },
        { period: "7일 이상", amount: "50만원 이상", rate: "연 0.3%" },
      ],
      url: "https://spot.wooribank.com/pot/Dream?withyou=PODEP0025&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010000039&PRD_CD=P010000039&ALL_GB=&depKind=A10",
    },
    {
      title: "우리동네 사장님 통장",
      subtitle: "신용카드 가맹점 대금 입금계좌로 사용하고자 하는 사장님 대상",
      loanTypes: ["자유입출금상품", "기업전용상품"],
      target: "사업자등록증을 소지한 개인사업자",
      term: "제한 없음",
      limit: "제한 없음",
      interestRate: [
        { period: "7일 미만", amount: "50만원 미만", rate: "연 0.0%" },
        { period: "7일 이상", amount: "50만원 이상", rate: "연 0.3%" },
      ],
      url: "https://spot.wooribank.com/pot/Dream?withyou=PODEP0025&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010000216&PRD_CD=P010000216&ALL_GB=&depKind=A10",
    },
    {
      title: "위비즈 편의점 꿀통장",
      subtitle: "편의점 운영 개인사업자 전용 금융수수료 면제 혜택 제공",
      loanTypes: ["자유입출금상품", "기업전용상품"],
      target: "편의점 운영 개인사업자",
      term: "제한 없음",
      limit: "제한 없음",
      interestRate: [{ rate: "연 0.1%" }],
      url: "https://spot.wooribank.com/pot/Dream?withyou=PODEP0025&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010000039&PRD_CD=P010000039&ALL_GB=&depKind=A10",
    },
    {
      title: "WON 기업통장",
      subtitle: "기업고객(개인사업자 포함) 전용 우대조건 충족 시 수수료 면제",
      loanTypes: ["자유입출금상품", "기업전용상품"],
      target: "사업자 등록증을 보유한 개인사업자 및 법인",
      term: "제한 없음",
      limit: "제한 없음",
      interestRate: [{ rate: "연 0.1%" }],
      url: "https://spot.wooribank.com/pot/Dream?withyou=PODEP0019&cc=c007095:c009166;c012263:c012399&PLM_PDCD=P010002386&PRD_CD=P010002386&ALL_GB=&depKind=A10",
    },
  ];
  