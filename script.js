/* ============================================================
   kt ds University · 제28기 채용예정자과정 — interactions
   ============================================================ */

/* ---------- Curriculum modules ---------- */
const MODULES = [
  {
    no: '01', title: 'Core Java Programming', en: 'Java', hours: '148h',
    desc: 'Java 기본 문법부터 객체지향(OOP)의 원리까지. 컬렉션 · 예외처리 · 람다 · Stream을 실습형 애플리케이션 제작으로 체득합니다.',
    tags: ['문법', 'OOP', '컬렉션', '예외처리', '람다', 'Stream']
  },
  {
    no: '02', title: 'Database Programming', en: 'Oracle', hours: '88h',
    desc: 'SQL 기초부터 고급(SELECT · JOIN · SUB-QUERY)까지. 인덱스 · 시퀀스 · ERD 설계를 익히고 Java-DB 연동 게시판 프로젝트로 마무리합니다.',
    tags: ['SQL', 'JOIN', 'SUB-QUERY', '인덱스', 'ERD', 'JDBC']
  },
  {
    no: '03', title: 'Front Programming', en: 'Frontend', hours: '80h',
    desc: 'HTML5 · CSS3(Flex/Grid) · JavaScript를 기본에서 고급까지. 화면을 직접 구성하며 프론트엔드의 기초 체력을 만듭니다.',
    tags: ['HTML5', 'CSS3', 'Flex/Grid', 'JavaScript']
  },
  {
    no: '04', title: 'Spring Boot', en: 'Backend', hours: '120h',
    desc: 'MVC · RESTful API · 세션 관리 · MyBatis · 파일 업·다운로드 · 유효성검사 · AOP · 예외처리. 회원제 게시판을 직접 구축합니다.',
    tags: ['MVC', 'REST API', 'MyBatis', 'AOP', '유효성검사']
  },
  {
    no: '05', title: 'Spring Security', en: 'Auth', hours: '32h',
    desc: 'Form 기반 인증·인가부터 CSRF · CORS · JWT 인증, OAuth2(Naver/Google) 소셜 로그인 연동까지 실무 보안을 다룹니다.',
    tags: ['인증·인가', 'CSRF', 'CORS', 'JWT', 'OAuth2']
  },
  {
    no: '06', title: 'React.js', en: 'Frontend', hours: '64h',
    desc: 'React 기본과 Hooks(useState · useEffect · useReducer), Redux & Toolkit, Router를 익히고 미니 프로젝트로 적용합니다.',
    tags: ['Hooks', 'Redux Toolkit', 'Router', '미니 프로젝트']
  },
  {
    no: '07', title: 'Spring Cloud & MSA', en: 'Cloud', hours: '56h',
    desc: 'Eureka · Gateway · JWT 인증인가 · Config Server · Bus · FeignClient · Circuit Breaker. Grafana · Prometheus로 모니터링까지.',
    tags: ['Eureka', 'Gateway', 'Config', 'FeignClient', 'Circuit Breaker', '모니터링']
  },
  {
    no: '08', title: 'Docker & Cloud (Azure)', en: 'DevOps', hours: '32h',
    desc: '컨테이너 생성·배포, Google Jib · Build packs. Azure의 VM · VNet · Storage와 NSG · ASG 보안/모니터링을 다룹니다.',
    tags: ['Docker', 'Jib', 'Azure', 'VM/VNet', 'NSG/ASG']
  },
  {
    no: '09', title: 'Spring AI', en: 'AI', hours: '36h', ai: true,
    desc: 'On-Prem LLM(Meta Ollama) 연동, AI 텍스트 대화, Prompt Engineering(제로/퓨샷·역할부여·스텝백), Structured Output Converter, Chat Memory, RAG까지. Spring 위에서 여러 LLM을 직접 연동합니다.',
    tags: ['On-Prem LLM', 'Prompt Engineering', 'Structured Output', 'Chat Memory', 'RAG']
  },
  {
    no: '10', title: 'Claude Code', en: 'AI', hours: '32h', ai: true,
    desc: 'Claude Code 기본 · 설치 및 실행부터 Claude Code 기반 웹 페이지 생성, 프롬프트 엔지니어링, 코드 리팩토링 및 성능 최적화, LLM 최적화, MCP(Model Context Protocol)까지 AI 활용 개발을 익힙니다.',
    tags: ['Claude Code', '프롬프트 엔지니어링', '리팩토링', '성능 최적화', 'MCP']
  },
  {
    no: '11', title: 'Claude Code 기반 팀 프로젝트', en: 'Project', hours: '112h', ai: true,
    desc: '4일간의 AI 개발환경 학습을 바탕으로, Claude Code를 적용한 대규모 실무형 팀 프로젝트를 진행합니다. AI를 활용해 실제 서비스 수준의 풀스택 결과물을 완성합니다.',
    tags: ['AI 활용 개발', '대규모 실무형', '협업·발표', '실서비스 수준', '포트폴리오']
  },
];

function buildModules() {
  const root = document.getElementById('modules');
  if (!root) return;
  root.innerHTML = MODULES.map(m => `
    <div class="module${m.ai ? ' ai' : ''}">
      <div class="module-head" role="button" tabindex="0" aria-expanded="false">
        <span class="mnum">${m.no}</span>
        <span class="mtitle">${m.title}<span class="en">${m.en}</span><span class="hrs">${m.hours}</span>${m.ai ? '<span class="ai-pill">AI</span>' : ''}</span>
        <span class="toggle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
      </div>
      <div class="module-body">
        <div><div class="inner">
          <p>${m.desc}</p>
          <div class="tags">${m.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </div></div>
      </div>
    </div>`).join('');

  root.querySelectorAll('.module-head').forEach(head => {
    const toggle = () => {
      const mod = head.closest('.module');
      const open = mod.classList.toggle('open');
      head.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    head.addEventListener('click', toggle);
    head.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  // open the first by default
  const first = root.querySelector('.module');
  if (first) { first.classList.add('open'); first.querySelector('.module-head').setAttribute('aria-expanded', 'true'); }
}

/* ---------- Countdown ---------- */
function updateCountdown() {
  const deadline = new Date('2026-06-30T23:59:59+09:00');
  const now = new Date();
  const diff = deadline - now;
  const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  const label = days > 0 ? `D-${days}` : 'D-DAY';
  const h = document.querySelector('#ddayHero .big');
  const c = document.getElementById('ddayCta');
  if (h) h.textContent = label;
  if (c) c.textContent = label;
}

/* ---------- Header scroll state ---------- */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Reveal on scroll (progressive enhancement) ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  // Only opt into the hidden-then-animate behavior if IO is supported.
  if (!('IntersectionObserver' in window)) { return; }
  document.documentElement.classList.add('js-anim');

  // Reveal anything already in (or near) the viewport on load immediately.
  const revealIfVisible = (el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) el.classList.add('in');
  };
  els.forEach(revealIfVisible);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(e => { if (!e.classList.contains('in')) io.observe(e); });

  // Failsafe: never leave content invisible if IO never fires.
  setTimeout(() => els.forEach(e => e.classList.add('in')), 1500);
}

/* ---------- Campaign cards rail + lightbox ---------- */
const PROMO = [
  { src: 'images/promo-01.png', alt: 'AI 시대에 필요한 개발자가 되세요 — 28기 스프링 클라우드 풀스택 전문가 양성과정' },
  { src: 'images/promo-02.png', alt: '혼자 공부하면 대부분 여기서 멈춥니다 — 함께 할 때의 변화' },
  { src: 'images/promo-03.png', alt: '무료이지만, 운영 방식은 다릅니다 — 전액 무료 ₩0' },
  { src: 'images/promo-04.png', alt: 'AI는 결과를 만듭니다. 개발자는 결과를 완성합니다' },
  { src: 'images/promo-05.png', alt: '수료 후에도 연결은 계속됩니다 — kt ds 커뮤니티' },
  { src: 'images/promo-06.png', alt: '공부가 잘되는 공간은 따로 있습니다 — kt ds 방배 교육센터' },
  { src: 'images/promo-07.png', alt: '면접에서 보여줄 건 결국 프로젝트입니다 — 수료생 프로젝트' },
  { src: 'images/promo-08.png', alt: '제28기 모집 중 — Developer Growth Kit' },
  { src: 'images/promo-09.png', alt: 'AI 기술은 계속 바뀝니다. 개발 기본기는 오래 남습니다' },
];

function buildCards() {
  const track = document.getElementById('railTrack');
  const dots = document.getElementById('railDots');
  if (!track) return;

  track.innerHTML = PROMO.map((c, i) =>
    `<figure class="promo-card" data-i="${i}"><img src="${c.src}" alt="${c.alt}" loading="lazy"></figure>`).join('');
  dots.innerHTML = PROMO.map((_, i) =>
    `<button data-i="${i}" aria-label="${i+1}번 카드로"></button>`).join('');

  const cards = [...track.querySelectorAll('.promo-card')];
  const dotEls = [...dots.querySelectorAll('button')];

  // active dot via scroll position
  const setActive = () => {
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    cards.forEach((card, i) => {
      const cc = card.offsetLeft + card.offsetWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    dotEls.forEach((d, i) => d.classList.toggle('active', i === best));
  };
  track.addEventListener('scroll', () => requestAnimationFrame(setActive), { passive: true });
  setActive();

  const scrollToCard = (i) => {
    const card = cards[Math.max(0, Math.min(cards.length - 1, i))];
    if (card) track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' });
  };
  dotEls.forEach((d, i) => d.addEventListener('click', () => scrollToCard(i)));

  const curIndex = () => {
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    cards.forEach((card, i) => {
      const cc = card.offsetLeft + card.offsetWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  };
  document.getElementById('railPrev').addEventListener('click', () => scrollToCard(curIndex() - 1));
  document.getElementById('railNext').addEventListener('click', () => scrollToCard(curIndex() + 1));

  // ---- Lightbox ----
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCounter = document.getElementById('lbCounter');
  let lbIdx = 0;

  const renderLb = () => {
    lbImg.src = PROMO[lbIdx].src;
    lbImg.alt = PROMO[lbIdx].alt;
    lbCounter.textContent = `${String(lbIdx + 1).padStart(2, '0')} / ${String(PROMO.length).padStart(2, '0')}`;
  };
  const openLb = (i) => { lbIdx = i; renderLb(); lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; };
  const closeLb = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
  const stepLb = (d) => { lbIdx = (lbIdx + d + PROMO.length) % PROMO.length; renderLb(); };

  cards.forEach((card, i) => card.addEventListener('click', () => openLb(i)));
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', () => stepLb(-1));
  document.getElementById('lbNext').addEventListener('click', () => stepLb(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') stepLb(-1);
    if (e.key === 'ArrowRight') stepLb(1);
  });
}

/* ---------- Testimonials (수료생 인터뷰) ---------- */
const VOICES = [
  {
    initial: '17',
    by: '17기 수료생', meta: '웹 애플리케이션 팀장',
    tag: '스프링 팀 프로젝트 완성',
    quote: '9명 팀의 팀장으로,\n기획부터 배포까지 완성했습니다.',
    excerpt: '팀장 경험이 전무했지만 일단 시작했습니다. 회의와 기록으로 협업하며 스프링 프로젝트의 기획·개발·배포 전 과정을 경험했습니다.',
    body: [
      ['참여 계기', '인턴 때 Vue·Node.js로 개발했지만 신입 채용은 스프링이 우세했습니다. 먼저 취업한 동기들의 공통점도 스프링 프로젝트 경험이었기에, 팀 프로젝트가 가능한 이 과정을 선택했습니다.'],
      ['어려움과 극복', '9명 팀의 팀장을 맡았지만 경험이 없어 막막했습니다. 걱정만 하기보다 일단 할 일을 만들어 팀원들과 나눴고, 회의와 기록을 쌓으며 자연스럽게 협업이 자리잡았습니다.'],
      ['가장 도움이 된 점', '스프링으로 프로젝트의 기획·개발·배포까지 모든 과정을 경험한 것. 강사님이 수강생이 어려워하는 부분을 잘 알고 관련 개념을 자주 반복해주셔서 개발에 큰 도움이 됐습니다.'],
      ['기억에 남는 일', '프로젝트 기간에 아침부터 오후까지 강의장에서 개발하던 때가 기억에 남습니다. 커피 한 잔으로 하루를 시작해 회의로 진행 상황을 공유하고, 막히면 검색하고 팀원에게 물으며 마치 스타트업 개발자가 된 것 같았습니다.'],
      ['반 분위기', '전공자·입문자 비율이 반반이었는데도 모두 잘 어울렸습니다. 프로젝트 기간이 다가올수록 팀끼리 회의가 많아지며 친밀도도 높아졌습니다.'],
      ['예비 수강생에게', '수료하면 협약기업으로 취업이 알선됩니다. 시키는 것만 하지 말고 더 할 수 있는 일을 계속 생각하고 행동하세요. 모르는 건 창피한 게 아니니 강사님을 적극 활용하시길 바랍니다.'],
    ],
  },
  {
    initial: '19',
    by: '19기 수료생', meta: '협약기업 취업',
    tag: '어느 전공이든 → 현업 개발자',
    quote: '코딩의 ‘코’자도 몰랐던 제가,\n지금 현업에서 일하고 있습니다.',
    excerpt: '지원 마감 이틀 전에 알게 되어 시작했습니다. 구글링과 끊임없는 질문으로 극복했고, 지금은 회사에서 소스 구조를 파악하며 일하고 있습니다.',
    body: [
      ['참여 계기', '개발자가 막연히 되고 싶었지만 무엇부터 시작할지 몰라 헤매던 중, 마감 이틀 전에 공고를 발견해 지원했습니다. 이전 기수 선배들의 후기가 큰 힘이 됐습니다.'],
      ['극복 방법', '첫째는 구글링, 둘째는 모르는 것을 부끄러워하지 않고 무엇이든 물어보는 것이었습니다. 충분히 알려고 노력한 뒤 질문하는 습관이 큰 도움이 됐습니다.'],
      ['지금의 나', '처음에는 코딩의 코자도 몰랐던 제가 회사에서 소스 구조를 파악하고 사수 직원을 도와 일하고 있다는 게 너무나 신기하고 뿌듯합니다.'],
      ['기억에 남는 일', '프로젝트에서 난생처음 접하는 오류들을 팀원과 머리를 맞대고 해결하고, 구현하려던 화면이 마침내 떠올랐을 때의 쾌감은 잊지 못할 것 같습니다.'],
      ['반 분위기', '누구 하나 성격이 모난 사람이 없어, 교육과정에 차질이 생기지 않게끔 좋은 분위기로 흘러갔습니다.'],
      ['예비 수강생에게', '자격증 준비를 병행하면 큰 도움이 됩니다. 그리고 모르는 게 생겼을 때 부끄러워하지 말고 물어보는 게 가장 중요합니다.'],
    ],
  },
  {
    initial: '15',
    by: '15기 수료생', meta: '새로운 직무로 전향',
    tag: '의심에서 자신감으로',
    quote: '‘내가 IT를 할 수 있을까?’\n의심이 자신감으로 바뀌었습니다.',
    excerpt: '새로운 분야였지만 오늘 배운 건 오늘 이해하자는 마음으로 임했습니다. 꾸준히 노력하면 가능성이 있다는 확신을 얻었습니다.',
    body: [
      ['참여 계기', 'IT 직무로 진로를 설정하고 관련 역량을 키우고자 참여를 결심했습니다.'],
      ['나만의 공부법', '목표를 멀리 두기보다 오늘 배운 내용은 오늘 이해하고 넘어가자는 마음으로, 점심·쉬는 시간 틈틈이 복습했습니다. 모르는 부분은 강사님과 동기들에게 물어보며 채워갔습니다.'],
      ['가장 도움이 된 점', 'JAVA뿐 아니라 DB와 Spring framework까지 현업에서 쓰이는 내용을 두루 공부한 점이 IT 직무를 이해하는 데 도움이 됐습니다.'],
      ['기억에 남는 일', '방역을 철저히 지키며 다 함께 공부했던 시기가 기억에 남습니다. 어려운 상황에서도 각자의 목표를 향해 열심히 임했습니다.'],
      ['강사님·동기에게', 'IT를 전혀 모르던 저를 매일 도와주고 함께 고민해주신 강사님과 동기들에게 감사드립니다. 각자 원하는 목표를 꼭 이루길 응원합니다.'],
      ['지금의 나', '처음엔 "내가 IT를 이해하고 공부할 수 있을까" 의심부터 들었지만, 지금은 꾸준히 노력하면 가능성이 있다는 마음을 갖게 됐습니다.'],
    ],
  },
  {
    initial: '19',
    by: '19기 수료생', meta: '직업군인 → 개발자 전향',
    tag: '늦은 시작도 가능합니다',
    quote: '34살, 직업군인에서\n개발자라는 새 길에 도전했습니다.',
    excerpt: '늦은 나이라는 부담을 안고 시작했지만, 교육과 취업 두 마리 토끼를 잡을 수 있는 과정이었습니다. 자신감을 얻어 개발자 전향에 확신이 생겼습니다.',
    body: [
      ['참여 계기', '직업군인으로 일하다 미래성과 직업 전망에 대한 긍정적인 이야기를 듣고, 교육과 취업을 함께 잡을 수 있는 이 과정을 추천받아 지원했습니다.'],
      ['극복 방법', '수업 중 강사님 설명을 놓치지 않으려 집중했고, 교재로 기초를 쌓은 뒤 관련 서적을 추가로 구매해 깊이 있게 공부했습니다.'],
      ['지금의 나', '전반적인 지식이 늘고 자신감이 붙어, 개발자로 전향하는 데 긍정적인 생각이 많이 들었습니다.'],
      ['기억에 남는 일', '열심히 하겠다 다짐하고 처음 강의실에 모여 어색하게 자기소개하던 순간이 기억에 남습니다. 역시 초심이 오래 남는 것 같습니다.'],
      ['반 분위기', '인터뷰를 통해 인원을 선발해서인지 인성 좋은 분들이 모여, 학습 분위기 조성이 잘 되어 공부에 큰 도움이 됐습니다.'],
      ['예비 수강생에게', '교육의 꽃은 프로젝트입니다. 기본적인 사전 학습을 해오면 큰 도움이 되고, 자격증 공부를 병행하면 입사에도 유리합니다.'],
    ],
  },
  {
    initial: '16',
    by: '16기 수료생', meta: '취업연계 · 1:1 첨삭',
    tag: '이력서·자소서 밀착 지원',
    quote: '이력서·자기소개서를\n한 명씩 면담하며 고쳐주셨습니다.',
    excerpt: '취업연계가 가장 큰 장점이었습니다. 담당자가 한 명 한 명 면담 형식으로 이력서를 세세하게 첨삭해 취업 준비에 큰 도움을 받았습니다.',
    body: [
      ['참여 계기', '대학 동기가 kt ds에서 일하며 이 교육을 추천해줬습니다. 취업연계를 해준다는 점과 전문 강사진이 결심의 계기가 됐습니다.'],
      ['가장 도움이 된 점', '교육이 끝나고 취업을 준비할 때, 담당자님이 이력서와 자기소개서를 한 명 한 명 면담 형식으로 잘못된 부분을 고쳐주셔서 큰 도움을 받았습니다.'],
      ['기억에 남는 일', '프로젝트 초반 팀원끼리 며칠간 시행착오를 겪으며 형상관리 도구를 익혀간 경험이 인상 깊었습니다.'],
      ['반 분위기', '강사님께 질문도 많이 하고, 팀원끼리 모르는 부분을 서로 도와주는 학습적인 분위기였습니다.'],
      ['수료 소감', '강사님의 전문적인 강의와 교육담당관님의 진심 어린 조언·지원 덕분에 취업할 수 있었습니다.'],
    ],
  },
  {
    initial: '17',
    by: '17기 수료생', meta: '독학에서 협업 학습으로',
    tag: '여러 언어·프레임워크 경험',
    quote: '자바 하나만 알고 왔는데,\n지금은 여러 언어를 다룹니다.',
    excerpt: '독학으로 안드로이드를 공부하다 한계를 느껴 참여했습니다. 처음 접한 HTML·CSS·Spring을 동기들과 강의장에 남아 공부하며 익혔습니다.',
    body: [
      ['참여 계기', '혼자 안드로이드 앱을 공부하며 어려움을 많이 느꼈고, 같은 목표를 가진 사람들과 함께라면 실력이 빨리 늘 것 같아 참여했습니다.'],
      ['극복 방법', 'Spring을 배울 때 팀 프로젝트에 방해가 되기 싫어, 동기들과 강의장에 남아 함께 공부했습니다. 그 시간이 큰 도움이 됐습니다.'],
      ['지금의 나', '처음엔 기본 자바만 알고 왔는데, 지금은 완벽하진 않아도 여러 언어를 경험했고 프레임워크도 다뤄보며 실력이 쌓였습니다.'],
      ['기억에 남는 일', '동기들과 남아서 공부하고, 끝나고는 가끔 이야기를 나누던 시간들이 가장 기억에 남습니다.'],
      ['반 분위기', '반장이 역할을 잘 해주어 동기들 사이가 좋았고, 강사님도 잘 적응하도록 도와주셔서 분위기가 정말 좋았습니다. 교육 막바진엔 다 같이 풋살도 했습니다.'],
      ['예비 수강생에게', '처음 신청할 때의 마음가짐을 끝까지 이어가, 원하는 곳에 꼭 취업하시길 바랍니다.'],
    ],
  },
  {
    initial: '18',
    by: '18기 수료생', meta: '1주차 신입 개발자',
    tag: '기본기를 탄탄하게',
    quote: '아직 개발자라는 이름이 어색한,\n1주차 신입 개발자입니다.',
    excerpt: '국비지원 프로그램을 찾던 중 지원했습니다. 막연한 불안을 팀원·강사님께 조언을 구하고 소통하며 이겨냈습니다.',
    body: [
      ['참여 계기', '여러 국비지원 프로그램을 알아보던 중 공고를 발견했고, 이 과정이 제 커리어에 큰 도움이 될 것이라 생각해 신청했습니다.'],
      ['극복 방법', '혼자 끙끙 앓지 않고 팀원·강사님께 조언을 구하며 밤낮으로 매달렸고, 팀원들과 소통을 최대한 하려 노력했습니다.'],
      ['가장 도움이 된 점', '강사님의 도움이 가장 컸습니다. 오류가 생겼을 때 성심껏 답해주셨고, 개발자로서 어떻게 살아갈지에 대한 인생 조언도 큰 도움이 됐습니다.'],
      ['지금의 나', '교육을 통해 개발 기본기를 탄탄히 다졌고, 실제 개발자가 되기 전 마음가짐도 확실히 다질 수 있었습니다.'],
      ['기억에 남는 일', '평소의 모든 일상이 특별했습니다. 훗날 강의실에서의 소소한 일상들이 많이 그리워질 것 같습니다.'],
      ['예비 수강생에게', '무조건 강사님께 많이, 또 많이 물어보세요. 질문을 많이 하는 것이 본인의 개발 능력 향상에도 큰 도움이 됩니다.'],
    ],
  },
  {
    initial: '17',
    by: '17기 수료생', meta: '30대 · 협력사 취업',
    tag: '관심과 성실함이면 충분',
    quote: '관심과 열정, 성실함이면\n충분히 해낼 수 있습니다.',
    excerpt: '파이썬에 관심이 있어 시작했습니다. 모르는 게 당연하다는 마음으로 임했고, 실무에 가까운 프로젝트 경험을 쌓아 협력사에 취업했습니다.',
    body: [
      ['참여 계기', '파이썬에 관심이 있던 차에, 마침 kt ds에서 무료로 관련 강의를 들을 수 있어 지원했습니다.'],
      ['극복 방법', '관련 책을 구매하고 도서관에서 여러 책을 빌려 강의와 겹치는 부분을 찾아봤습니다. "모르는 게 당연하다"는 사실을 받아들인 것도 도움이 됐습니다.'],
      ['가장 도움이 된 점', '프로그래밍 이론뿐 아니라, 강사·담당자님이 들려주신 취업 연계와 현업에서 겪는 일, 그 어려움을 극복하는 실질적인 팁을 얻을 수 있었습니다.'],
      ['기억에 남는 일', '프로젝트 기간 팀원 모두가 열정적으로 참여해 할 일을 나누고 토론하며 개선 방향을 논의했던 점이 기억에 남습니다. 실무에 가까운 경험이었습니다.'],
      ['수료 소감', '가장 피부에 와닿는 경험을 해볼 수 있는 귀중한 교육이었습니다. 함께한 동료들과 강사·담당자님께 감사드립니다.'],
      ['예비 수강생에게', '서포트와 강의 환경이 모두 좋습니다. 프로그래밍에 대한 관심·열정·성실함만 준비되면 성공적으로 이수할 수 있습니다.'],
    ],
  },
  {
    initial: '23',
    by: '23기 수료생', meta: '현직 SW 엔지니어',
    tag: '팀 프로젝트 경험을 더하다',
    quote: '지금은 SW 엔지니어로\n현업에서 일하고 있습니다.',
    excerpt: '개인 프로젝트 경험은 있었지만 팀 프로젝트가 부족해 참여했습니다. 일일 회의로 팀을 이끌었고, 수강 중 정보처리기사 자격증까지 취득했습니다.',
    body: [
      ['참여 계기', 'Spring Boot·JPA로 개인 프로젝트 경험은 있었지만, 팀 프로젝트 경험이 부족해 참여하게 되었습니다.'],
      ['어려움과 극복', '팀원 간 코딩 경험 차이를 해결하는 게 과제였습니다. 매일 5~10분 회의로 각자의 진행 상황을 공유하고, 서로 도움을 주고받도록 이끌었습니다.'],
      ['가장 도움이 된 점', '강사님의 지식 덕분에 교육과정 밖에서 궁금했던 부분까지 채울 수 있었고, 담당자분들이 학습 공간을 제공해주셔서 수강 기간에 정보처리기사 자격증도 취득했습니다.'],
      ['처음과 지금', '새 기능 개발이나 처음 접하는 기술을 적용할 때의 두려움이 사라졌습니다. 문제가 생겨도 해결하면 된다는 마음을 갖게 됐습니다.'],
      ['예비 수강생에게', '의욕을 가지고 끝까지 한다면 IT 업계 취업은 문제없다고 생각합니다. 두려워 말고 계속 질문하며 부족한 점을 채우면 단기간에 크게 발전할 수 있습니다.'],
      ['수료 소감', 'kt ds 채용예정자과정 덕분에 많은 것을 배워갈 수 있었습니다. 감사합니다.'],
    ],
  },
  {
    initial: '24',
    by: '24기 수료생', meta: '프론트에서 풀스택으로',
    tag: '진정한 웹 풀스택 지식',
    quote: '프론트만 알던 제가,\n진짜 풀스택이 됐습니다.',
    excerpt: '이전 캠프에서 부족함을 느껴 더 공부하고자 왔습니다. 자바부터 다시 시작해, 프론트엔드뿐 아니라 백엔드·DB·AWS까지 풀스택 지식을 얻었습니다.',
    body: [
      ['참여 계기', '이전 부트캠프에서 웹 개발을 공부했지만 부족하다고 느껴, 좀 더 깊이 공부하고 싶어 지원했습니다.'],
      ['어려움과 극복', '이전 캠프에선 프론트엔드 위주여서 백엔드는 거의 몰랐는데, 자바부터 다시 시작하니 처음엔 힘들었습니다. 꾹 참고 다니며 모르는 건 팀원·강사님께 질문했습니다.'],
      ['가장 도움이 된 점', '취업 기회를 제공받은 점, 그리고 프로젝트 기간 매일 밤 10시까지 팀원들과 함께 고생하며 완성해낸 경험입니다.'],
      ['반 분위기', '서로 도움을 주고받으며 화목하고 좋았습니다.'],
      ['처음과 지금', '프론트엔드뿐 아니라 백엔드·DB·AWS까지, 진정한 웹 풀스택 지식을 얻었습니다.'],
      ['수료 소감', '모든 분들께 감사하고, 정말 잊지 못할 추억을 쌓고 갑니다.'],
    ],
  },
  {
    initial: '25',
    by: '25기 수료생', meta: '실무 능력을 키우러',
    tag: '실력적·인격적으로 성장',
    quote: '실력에 확신이 없었지만,\n실무도 마음가짐도 성장했습니다.',
    excerpt: '전공자였지만 실력에 확신이 없어 실무 능력을 키우고자 지원했습니다. 5개월간 실력과 인격 모두 성장한 소중한 시간이었습니다.',
    body: [
      ['참여 계기', '웹·모바일 전공으로 졸업했지만 제 실력에 확신이 없어 실무 능력을 키우고 싶었습니다. 취업을 주선해준다는 점도 매력적이었습니다.'],
      ['어려움과 극복', '대학에서 배운 적 없는 Spring을 시작할 때 힘들었습니다. 수업 후 집에서 자료를 보며 복습하고, 흐름을 익히기 위해 코드를 계속 뜯어봤습니다.'],
      ['기억에 남는 일', '프로젝트 때 수업이 끝나고도 그룹 모두 강의실에 남아 밤늦게까지 힘들어도 즐겁게 개발했던 게 가장 기억에 남습니다.'],
      ['반 분위기', '다들 친근했고 서로 도와가며 으쌰으쌰하는 분위기였습니다.'],
      ['처음과 지금', '마음가짐부터 많이 달라졌고, 스스로 자만하지 않게 되었습니다.'],
      ['수료 소감', '5개월의 교육 기간 동안 실력적으로도 인격적으로도 성장할 수 있는 계기가 된, 저에게는 아깝지 않은 소중한 시간이었습니다.'],
    ],
  },
];

function buildVoices() {
  const grid = document.getElementById('voicesGrid');
  if (!grid) return;

  grid.innerHTML = VOICES.map((v, i) => `
    <article class="voice-card${v.accent ? ' feat' : ''}" data-i="${i}" tabindex="0" role="button">
      <span class="vq-mark">“</span>
      <p class="vq-quote">${v.quote.replace(/\n/g, '<br>')}</p>
      <p class="vq-excerpt">${v.excerpt}</p>
      <div class="vq-foot">
        <span class="vq-avatar">${v.initial}</span>
        <div class="vq-by"><b>${v.by}</b><span>${v.meta}</span></div>
        <span class="vq-more">전체 보기 →</span>
      </div>
    </article>`).join('') + `
    <a class="voice-cta" href="https://edu.ktdsuniversity.com/customer/notice_view.action?board_id=241" target="_blank" rel="noopener">
      <span class="vc-kicker">Your story is next</span>
      <span class="vc-title">다음 후기의 주인공은<br>바로 당신입니다.</span>
      <span class="vc-sub">제28기에서 전공 · 입문자 모두, 현업 개발자로.</span>
      <span class="vc-btn">지원하기 →</span>
    </a>`;

  const modal = document.getElementById('vmodal');
  const open = (i) => {
    const v = VOICES[i];
    document.getElementById('vmAvatar').textContent = v.initial;
    document.getElementById('vmBy').textContent = v.by;
    document.getElementById('vmTag').textContent = v.meta + ' · ' + v.tag;
    document.getElementById('vmQuote').innerHTML = v.quote.replace(/\n/g, '<br>');
    document.getElementById('vmBody').innerHTML = v.body.map(([q, a]) =>
      `<div class="vm-qa"><div class="vm-q">${q}</div><p class="vm-a">${a}</p></div>`).join('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  grid.querySelectorAll('.voice-card').forEach(card => {
    const i = +card.dataset.i;
    card.addEventListener('click', () => open(i));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); } });
  });
  document.getElementById('vmClose').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
}

/* ---------- Init ---------- */
function __init28() {
  buildModules();
  buildVoices();
  updateCountdown();
  setInterval(updateCountdown, 60 * 1000);
  initHeader();
  initReveal();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __init28);
} else {
  __init28();
}
