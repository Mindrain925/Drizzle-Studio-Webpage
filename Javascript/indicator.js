// 필요한 DOM 요소들을 가져옵니다.
const membersDisplay = document.getElementById('MembersDisplay');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicator = document.querySelector('.indicator');

// "다음" 버튼 클릭 시 다음 카드로 스크롤
nextBtn.addEventListener('click', () => {
    // 현재 스크롤 위치에서 뷰포트 너비만큼 오른쪽으로 이동
    membersDisplay.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth' // 부드러운 스크롤 효과
    });
});

// "이전" 버튼 클릭 시 이전 카드로 스크롤
prevBtn.addEventListener('click', () => {
    // 현재 스크롤 위치에서 뷰포트 너비만큼 왼쪽으로 이동
    membersDisplay.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
    });
});

// 스크롤 이벤트 발생 시 인디케이터와 버튼 상태 업데이트
membersDisplay.addEventListener('scroll', () => {
    // 현재 스크롤 위치
    const currentScroll = window.innerWidth + membersDisplay.scrollLeft;
    // 전체 스크롤 가능한 최대 길이
    const maxScroll = membersDisplay.scrollWidth;

    // 스크롤 진행도를 퍼센트로 계산하여 인디케이터 너비에 적용
    const scrollPercentage = (currentScroll / maxScroll) * 100;
    indicator.style.width = `${scrollPercentage}%`;

    // 스크롤 위치에 따라 버튼의 활성화/비활성화 상태 변경
    prevBtn.disabled = currentScroll <= window.innerWidth;
    nextBtn.disabled = currentScroll >= maxScroll;
});

// 페이지가 처음 로드될 때 '이전' 버튼을 비활성화
window.addEventListener('load', () => {
    prevBtn.disabled = true;
});