
// 스크롤 애니메이션
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("show");
    });
}

// 버튼 클릭 이벤트
document.querySelectorAll("[data-contact]").forEach((button) => {
    button.addEventListener("click", () => {
        alert("NEXUS에 오신 것을 환영합니다!");
    });
});

// 부드러운 페이지 이동
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
