// ===================== 타이핑 애니메이션 =====================
function typeWriter(element, text, speed = 100) {
  let index = 0;
  element.innerHTML = "";

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", function () {
  const heroH2 = document.querySelector(".hero-text h2");
  const text = "코드로 아이디어를 구현하는 개발자입니다";

  if (heroH2) {
    heroH2.dataset.originalText = heroH2.innerHTML;
    setTimeout(() => {
      typeWriter(heroH2, text, 80);
    }, 500);
  }

  // ===================== 부드러운 스크롤 =====================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ===================== 호버 효과 =====================
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    });
    card.style.transition = "all 0.3s ease-out";
  });

  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener(
      "mouseenter",
      () => (card.style.transform = "translateY(-5px)")
    );
    card.addEventListener(
      "mouseleave",
      () => (card.style.transform = "translateY(0)")
    );
  });

  // ===================== Web3Forms 이메일 연동 =====================
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("메시지가 전송되었습니다!");
          form.reset();
        } else {
          alert("전송 실패: " + (data.message || "다시 시도해주세요."));
        }
      })
      .catch((err) => {
        alert("에러가 발생했습니다. 다시 시도해주세요.");
        console.error(err);
      });
  });
});
