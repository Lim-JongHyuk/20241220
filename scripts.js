// 모든 드롭다운에 클릭 이벤트 추가
document.querySelectorAll('.dropdown-header').forEach(header => {
  header.addEventListener('click', () => {
    const dropdown = header.parentElement;
    const content = dropdown.querySelector('.dropdown-content');
    const icon = header.querySelector('.dropdown-icon');

    // 드롭다운 활성화 토글
    dropdown.classList.toggle('active');

    if (dropdown.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px'; // 콘텐츠의 실제 높이만큼 설정
      icon.style.transform = 'rotate(180deg)';
    } else {
      content.style.maxHeight = '0'; // 높이를 0으로 설정
      icon.style.transform = 'rotate(0deg)';
    }
  });
});

// 타이핑 효과가 끝난 후 커서 깜빡임 제거
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.querySelector('.typing-effect');
  setTimeout(() => {
    typingElement.style.borderRight = 'none';
  }, 3000); // 타이핑 애니메이션 시간 이후
});

// TOP 버튼 스크롤 기능
document.addEventListener('DOMContentLoaded', () => {
  const topButton = document.getElementById('topButton');

  // 스크롤 이벤트로 버튼 표시
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topButton.classList.add('show'); // 스크롤이 일정 위치를 넘으면 버튼 표시
    } else {
      topButton.classList.remove('show'); // 스크롤이 상단으로 가면 버튼 숨김
    }
  });

  // 버튼 클릭 시 상단으로 스크롤
  topButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드러운 스크롤
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // 이미지 비교 섹션 - 카카오페이와 삼성화재
  const kakaoImages = ['img/kakao1.png', 'img/kakao2.png'];
  const samsungImages = ['img/sam1.png', 'img/sam2.png'];
  const chungyeonImages = ['img/chung1.png', 'img/chung2.png'];
  const hominImages = ['img/homin1.png', 'img/homin2.png'];

  const setupImageComparison = (prevButtonId, nextButtonId, leftElementId, rightElementId, leftImages, rightImages) => {
    let currentIndex = 0;
    const leftElement = document.getElementById(leftElementId);
    const rightElement = document.getElementById(rightElementId);
    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);

    const updateImages = (direction) => {
      const leftClass = direction === 1 ? 'hidden-left' : 'hidden-right';
      const rightClass = direction === 1 ? 'hidden-right' : 'hidden-left';

      leftElement.classList.add(leftClass);
      rightElement.classList.add(rightClass);

      setTimeout(() => {
        currentIndex = (currentIndex + direction + leftImages.length) % leftImages.length;
        leftElement.querySelector('img').src = leftImages[currentIndex];
        rightElement.querySelector('img').src = rightImages[currentIndex];

        leftElement.classList.remove(leftClass);
        rightElement.classList.remove(rightClass);
      }, 500);
    };

    prevButton.addEventListener('click', () => updateImages(-1));
    nextButton.addEventListener('click', () => updateImages(1));
  };

  // 카카오페이 vs. 삼성화재
  setupImageComparison('prevButton', 'nextButton', 'kakao', 'samsung', kakaoImages, samsungImages);

  // 청연 vs. 홈인
  setupImageComparison('prevButton3', 'nextButton3', 'chungyeon', 'homin', chungyeonImages, hominImages);
});


// 버튼 요소들 가져오기
const btnPlagiarism = document.getElementById('btn-plagiarism');
const btnNotPlagiarism = document.getElementById('btn-not-plagiarism');
const content = document.getElementById('content');

// 각 버튼에 들어갈 내용 정의
const plagiarismContent = `
  <p>
    가입 단계나 화면 구성 및 UI, 레이아웃 및 안내 문구 등 모든 측면에서 카카오손보의 프로세스와 100% 동일하다.
    "카카오손보가 처음으로 도입한 담보 직접 설계나 국가 선택, 동반 가입하기 단계는 추가하고 가입 단계별 디자인이나 문구도 차이가 없었다."
    , 금융소비자에게 편리한 보험 환경을 제공하기 위해 고객 리서치 및 인터뷰 결과를 반영하는 등 개편 작업을 지속하고 있다. 
    보험상품 가입과정은 보험업계가 유사하게 사용하고 있는 상황이다. 소비자에게 보다 편리한 보험환경을 제공하기 위해 고객 리서치 및 인터뷰 결과를 반영하는 등 지속적으로 개편 작업을 하고 있다
  </p>
`;

const notPlagiarismContent = `
  <p>
    온라인 채널에서 해외여행보험 판매를 처음 시작한 게 당사이며, 보험 가입 과정과 입력정보 등의 내용은 어느 보험사나 동일하다.
    보험상품 가입과정은 보험업계가 유사하게 사용하고 있는 상황이다.
    보험은 대면 채널의 과정을 온라인으로 옮긴 것이고 가입 단계별로 보험사 간 큰 차이가 없을 수밖에 없다.
    삼성화재는 소비자에게 보다 편리한 보험환경을 제공하기 위해 고객 리서치 및 인터뷰 결과를 반영하는 등 개편 작업은 지속 중이며
    개편을 통해 2015년 중단했던 여행국가 선택 재개와 기존 단체, 부부에 적용됐던 할인제도를 발전시킨 동반형 할인을 추가했다.
  </p>
`;



btnPlagiarism.addEventListener('click', () => {
  content.innerHTML = plagiarismContent;
  content.classList.remove('blue-bg');
  content.classList.add('yellow-bg');
  btnPlagiarism.classList.add('active');
  btnNotPlagiarism.classList.remove('active');
});

btnNotPlagiarism.addEventListener('click', () => {
  content.innerHTML = notPlagiarismContent;
  content.classList.remove('yellow-bg');
  content.classList.add('blue-bg');
  btnNotPlagiarism.classList.add('active');
  btnPlagiarism.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const btnPlagiarism3 = document.getElementById('btn-plagiarism3');
  const btnNotPlagiarism3 = document.getElementById('btn-not-plagiarism3');
  const content3 = document.getElementById('content3');

  const plagiarism3Content = `
    <p>
      청소연구소는 협상이 결렬된 이후 LG유플러스가 출시한 '홈인' 앱이 유사한 기능과 UI/UX를 갖췄다고 지적했다. 
      특히 청소 구역 설정, 청소 도구 선택, 매칭 정책 등 주요 기능에서 유사성이 발견되었다고 밝혔다.
      이를 협업을 빌미로 한 영업비밀 침해로 보고, 2022년 1월 공정거래위원회에 불공정거래행위로 신고했다고 전했다.
    </p>
  `;

  const notPlagiarism3Content = `
    <p>
      다른 벤처 입점사와 '홈인' 서비스를 준비하는 과정에서 일부 용어·표현 등에 있어 
      청소연구소 측과 유사한 부분이 있었음을 발견하고 오해의 소지를 없애기 위해 수정한 바 있다.
      특정한 이익을 추구하기 위한 영업기밀 침해 행위는 아니었으며 당사가 추구하는 본질적인 차별화 요소도 아니다.
      향후에도 청소연구소를 비롯한 우수한 벤처들과 상생하며 집안일과 관련한 다양한 문제들을 풀어나갈 것.
    </p>
  `;

  btnPlagiarism3.addEventListener('click', () => {
    content3.innerHTML = plagiarism3Content;
    content3.classList.remove('gray-bg');
    content3.classList.add('green-bg');
    btnPlagiarism3.classList.add('active3');
    btnNotPlagiarism3.classList.remove('active3');
  });

  btnNotPlagiarism3.addEventListener('click', () => {
    content3.innerHTML = notPlagiarism3Content;
    content3.classList.remove('green-bg');
    content3.classList.add('gray-bg');
    btnNotPlagiarism3.classList.add('active3');
    btnPlagiarism3.classList.remove('active3');
  });
});


