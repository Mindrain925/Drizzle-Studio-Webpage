document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    /**
     * 버튼의 상태에 따라 이미지 소스를 업데이트하는 함수
     * @param {HTMLElement} button - 상태를 확인할 버튼 요소
     * @param {string} type - 'prev' 또는 'next'
     */
    const updateButtonImage = (button, type) => {
        if (!button) return; // 버튼 요소가 없으면 함수 종료

        const img = button.querySelector("img");
        if (!img) return; // img 요소가 없으면 함수 종료

        if (button.disabled) {
            // 버튼이 비활성화 상태일 때
            img.src = `Source/ScrollButton-${type}-disabled.png`;
        } else {
            // 버튼이 활성화 상태일 때
            img.src = `Source/ScrollButton-${type}.png`;
        }
    };

    // 초기 로드 시 버튼 상태에 맞게 이미지 설정
    updateButtonImage(prevBtn, "prev");
    updateButtonImage(nextBtn, "next");

    // 버튼의 disabled 속성 변화를 감지하는 MutationObserver 생성
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === "disabled") {
                if (mutation.target.classList.contains("prev-btn")) {
                    updateButtonImage(prevBtn, "prev");
                } else if (mutation.target.classList.contains("next-btn")) {
                    updateButtonImage(nextBtn, "next");
                }
            }
        });
    });

    // 각 버튼에 대해 disabled 속성 변화를 감지하도록 설정
    if (prevBtn) {
        observer.observe(prevBtn, { attributes: true });
    }
    if (nextBtn) {
        observer.observe(nextBtn, { attributes: true });
    }
});