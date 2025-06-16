// 타로카드 js
const Tarots = [{
        id: 0,
        title: "THE FOOL 바보",
        keyword: "새로운 시작 • 순수함 • 모험",
        description: "바보 카드는 무한한 가능성의 시작을 의미합니다.\n경험보다 직관을 따라가는 순수한 에너지이며, 미지의 세계로의 도전을 상징합니다.\n지금은 계획보다 용기가 필요한 시점입니다.\n실패를 두려워하지 말고 발걸음을 내딛으세요.\n이 카드가 나타날 때는, 우주의 흐름에 자신을 맡겨보는 것도 좋습니다."
    },
    {
        id: 1,
        title: "THE MAGICIAN 마법사",
        keyword: "의지 • 창조 • 자원 활용",
        description: "마법사는 내 안의 잠재력과 창조성을 상징합니다.\n원하는 것을 현실로 바꿀 수 있는 힘이 당신에게 있다는 뜻입니다.\n지금은 자신감을 가지고 행동할 때입니다.\n도구는 이미 당신의 손에 있습니다.\n중요한 것은 그것을 믿고 활용하는 능력입니다."
    },
    {
        id: 2,
        title: "THE HIGH PRIESTESS 여사제",
        keyword: "직관 • 잠재의식 • 신비",
        description: "여사제는 내면의 깊은 지혜와 직관을 상징합니다.\n지금은 겉으로 드러난 사실보다 감춰진 진실에 집중해야 할 때입니다.\n직감이 강하게 작용하는 시기이며, 무언가를 기다려야 할 수도 있습니다.\n신중함과 침묵 속에 답이 있습니다.\n속단하지 말고, 안에서 울리는 소리를 들어보세요."
    },
    {
        id: 3,
        title: "THE EMPRESS 여제",
        keyword: "풍요 • 모성 • 창조성",
        description: "여제 카드는 풍요와 생명의 에너지를 상징합니다.\n자연, 창조, 사랑, 보호 같은 따뜻한 힘이 작용하는 시기입니다.\n새로운 아이디어나 프로젝트가 성장할 수 있는 좋은 시기입니다.\n감성을 믿고 타인에게 따뜻함을 나누세요.\n풍요는 마음에서부터 시작됩니다."
    },
    {
        id: 4,
        title: "THE EMPEROR 황제",
        keyword: "권위 • 안정 • 질서",
        description: "황제는 구조와 권위, 책임을 상징합니다.\n혼란 속에서도 질서를 세우고 통제할 수 있는 능력을 뜻합니다.\n당신은 지금 강한 결단력과 리더십이 필요한 시점입니다.\n감정보다는 이성을 통해 방향을 설정하세요.\n신뢰와 규칙을 기반으로 행동하면 안정이 찾아옵니다."
    },
    {
        id: 5,
        title: "THE HIEROPHANT 교황",
        keyword: "전통 • 신념 • 조언",
        description: "교황 카드는 전통적 가치와 정신적인 가르침을 상징합니다.\n지식이나 조언을 구하거나, 누군가에게 가르침을 줄 때입니다.\n사회적인 규범이나 공동체 안에서 조화롭게 살아가는 방법을 제시합니다.\n혼자가 아닌, 시스템 안에서의 역할에 집중하세요.\n스스로의 신념을 점검하고 조율할 필요가 있습니다."
    },
    {
        id: 6,
        title: "THE LOVERS 연인",
        keyword: "사랑 • 선택 • 조화",
        description: "연인 카드는 관계, 그리고 중요한 선택을 의미합니다.\n진실된 사랑과 조화로운 관계의 가능성이 열려 있습니다.\n하지만 동시에 삶에서 갈림길에 놓인 순간일 수도 있습니다.\n감정과 책임 사이에서 균형이 필요합니다.\n무엇이 진심인지 깊이 생각한 후 결정을 내려야 합니다."
    },
    {
        id: 7,
        title: "THE CHARIOT 전차",
        keyword: "승리 • 의지 • 추진력",
        description: "전차는 강한 의지와 집중력을 상징합니다.\n혼란을 뚫고 나아가는 용기와 결단이 필요한 시점입니다.\n감정에 휘둘리지 말고, 목표를 명확히 설정하세요.\n당신은 지금 강력한 추진력을 얻고 있습니다.\n성공은 통제력과 인내심에 달려 있습니다."
    },
    {
        id: 8,
        title: "STRENGTH 힘",
        keyword: "용기 • 인내 • 내면의 힘",
        description: "힘 카드는 외적인 힘보다 내면의 강인함을 상징합니다.\n부드러운 태도와 인내가 문제를 해결할 열쇠입니다.\n지금 당신은 충분히 강합니다, 단지 방식을 선택해야 할 뿐입니다.\n감정을 억누르기보다, 조화롭게 다스려야 합니다.\n참된 용기는 온화함 속에서 피어납니다."
    },
    {
        id: 9,
        title: "THE HERMIT 은둔자",
        keyword: "탐구 • 내면 • 고독",
        description: "은둔자는 내면을 향한 여행을 상징합니다.\n외부보다 내부에서 답을 찾아야 할 시기입니다.\n고독은 회피가 아니라 성찰의 기회입니다.\n급하게 결정하기보다, 시간을 가지고 자신을 들여다보세요.\n진정한 길은 침묵 속에서 보입니다."
    },
    {
        id: 10,
        title: "WHEEL OF FORTUNE 운명의 수레바퀴",
        keyword: "변화 • 운명 • 순환",
        description: "운명의 수레바퀴는 삶의 예측 불가능한 흐름을 상징합니다.\n운이 오르락내리락하는 시기이며, 상황이 빠르게 바뀔 수 있습니다.\n변화를 거부하기보다 받아들이는 태도가 필요합니다.\n모든 것은 지나가며, 다시 돌아옵니다.\n중요한 것은 중심을 지키는 일입니다."
    },
    {
        id: 11,
        title: "JUSTICE 정의",
        keyword: "균형 • 진실 • 책임",
        description: "정의 카드는 공정성과 균형을 상징합니다.\n지금은 냉철한 판단과 도덕적 책임이 요구되는 시기입니다.\n모든 행동에는 결과가 따르며, 과거의 선택이 현재를 이끕니다.\n감정보다 사실을 기준으로 삼으세요.\n진실을 마주하는 용기가 필요합니다."
    },
    {
        id: 12,
        title: "THE HANGED MAN 매달린 사람",
        keyword: "희생 • 관점 전환 • 수용",
        description: "이 카드는 멈춤과 관점의 전환을 상징합니다.\n지금은 능동적으로 나아가기보다 받아들이고 기다릴 때입니다.\n익숙한 방식에서 벗어나 새로운 시각이 필요합니다.\n희생처럼 느껴질 수 있지만, 이는 성장의 일부입니다.\n일시적인 정체가 결국 큰 변화를 이끌 것입니다."
    },
    {
        id: 13,
        title: "DEATH 죽음",
        keyword: "종말 • 변화 • 재생",
        description: "죽음 카드는 끝과 새로운 시작을 상징합니다.\n무언가를 내려놓아야 새로운 것이 들어올 수 있습니다.\n두려움보다 해방의 기회로 받아들여야 할 변화입니다.\n오래된 습관이나 관계, 생각을 정리할 때입니다.\n진정한 전환의 순간에 와 있습니다."
    },
    {
        id: 14,
        title: "TEMPERANCE 절제",
        keyword: "조화 • 균형 • 인내",
        description: "절제는 조화와 균형의 에너지를 전합니다.\n지금은 극단보다는 중용의 태도가 필요합니다.\n다른 요소들을 조화롭게 섞어 새로운 것을 창조하는 시기입니다.\n감정의 균형을 유지하고, 서두르지 마세요.\n시간이 당신 편이 되어줄 것입니다."
    },
    {
        id: 15,
        title: "THE DEVIL 악마",
        keyword: "욕망 • 집착 • 유혹",
        description: "악마 카드는 얽매임과 집착을 의미합니다.\n겉보기에는 매혹적이지만, 그 이면에는 통제가 숨어 있습니다.\n욕망, 중독, 반복되는 패턴에서 벗어날 필요가 있습니다.\n자신을 구속하는 것이 무엇인지 직시하세요.\n그것을 인식하는 순간 자유의 길이 열립니다."


    },
    {
        id: 16,
        title: "THE TOWER 탑",
        keyword: "붕괴 • 충격 • 해방",
        description: "탑 카드는 갑작스러운 붕괴와 진실의 드러남을 상징합니다.\n기반이 허약한 구조는 결국 무너지게 되어 있습니다.\n지금의 충격은 오히려 재건의 기회를 줍니다.\n기존의 틀을 깨고 새로운 관점을 받아들여야 합니다.\n혼돈 속에서 진실이 드러납니다."
    },
    {
        id: 17,
        title: "THE STAR 별",
        keyword: "희망 • 영감 • 치유",
        description: "별 카드는 희망과 회복을 상징합니다.\n어둠을 지나온 당신에게 빛이 비추고 있습니다.\n새로운 가능성과 영감이 떠오르는 시기입니다.\n자연과의 연결, 마음의 평온을 되찾으세요.\n별처럼 당신도 누군가에게 빛이 될 수 있습니다."
    },
    {
        id: 18,
        title: "THE MOON 달",
        keyword: "불확실 • 꿈 • 감정",
        description: "달 카드는 불확실성과 무의식을 상징합니다.\n모든 것이 명확하지 않지만, 감정은 깊이 움직이고 있습니다.\n지금은 진실보다 상상이 커질 수 있는 시기입니다.\n스스로의 두려움과 마주해야 합니다.\n감정의 안개 너머에 답이 있습니다."
    },
    {
        id: 19,
        title: "THE SUN 태양",
        keyword: "행복 • 명확성 • 성공",
        description: "태양 카드는 기쁨, 성공, 명확함을 의미합니다.\n지금 당신은 밝은 에너지 속에 있습니다.\n자신을 있는 그대로 표현해도 되는 시기입니다.\n노력의 결실이 맺히며, 좋은 결과가 따릅니다.\n아이처럼 순수하게 세상을 마주하세요."
    },
    {
        id: 20,
        title: "JUDGEMENT 심판",
        keyword: "각성 • 평가 • 재탄생",
        description: "심판 카드는 각성과 부름을 의미합니다.\n과거를 돌아보고, 진정한 자아를 깨달아야 할 시기입니다.\n스스로를 평가하며 새로운 삶으로 전환할 기회입니다.\n용서와 화해가 중요한 키워드입니다.\n새로운 가능성이 당신을 기다리고 있습니다."
    },
    {
        id: 21,
        title: "THE WORLD 세계",
        keyword: "완성 • 통합 • 성취",
        description: "세계 카드는 완성과 통합을 상징합니다.\n당신은 지금 중요한 사이클의 끝에 와 있습니다.\n그동안의 여정이 결실을 맺는 순간입니다.\n모든 것이 조화롭게 연결되어 있음을 느끼게 됩니다.\n이제 다음 단계로 나아갈 준비가 되었습니다."
    }
];

let selectedCardId = null;
let userQuestion = "";

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('StartT');
    const questionInput = document.querySelector('.questionT');

    if (startBtn) {
        startBtn.addEventListener('click', startTarotReading);
    }
});

function startTarotReading() {
    userQuestion = document.querySelector('.questionT').value.trim();

    if (!userQuestion) {
        alert('질문을 입력해주세요.');
        return;
    }

    document.querySelector('.layoutTarot').style.display = 'none';
    const selectSection = document.querySelector('.cardSelectSection');
    selectSection.style.display = 'block';
    document.querySelector('.cardSelectSection .questionDisplay').textContent = `Q. ${userQuestion}`;

    createShuffledCards();
}

function createShuffledCards() {
    const shuffledContainer = document.querySelector('.shuffledCards');
    shuffledContainer.innerHTML = '';

    const shuffledCards = [...Array(22)].map((_, i) => i + 1).sort(() => Math.random() - 0.5);

    shuffledCards.forEach((cardId, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'shuffleCard';
        cardElement.dataset.cardId = cardId;
        cardElement.style.setProperty('--card-index', index);
        cardElement.addEventListener('click', () => selectCard(cardElement, cardId));
        shuffledContainer.appendChild(cardElement);
    });

    setTimeout(() => {
        document.querySelectorAll('.shuffleCard').forEach(card => {
            card.classList.add('spread');
        });
    }, 500);
}

function selectCard(cardElement, cardId) {
    document.querySelectorAll('.shuffleCard').forEach(card => {
        card.classList.remove('selected');
    });

    cardElement.classList.add('selected');
    selectedCardId = cardId;

    document.querySelector('.confirmSelection').style.display = 'block';
    document.querySelector('.confirmSelection').onclick = showResult;
}

function showResult() {
    const selectedCard = Tarots.find(card => card.id === selectedCardId);

    document.querySelector('.cardSelectSection').style.display = 'none';
    const resultSection = document.querySelector('.resultSection');
    resultSection.style.display = 'block';

    document.querySelector('.resultSection .questionDisplay').textContent = `Q. ${userQuestion}`;


    document.querySelector('.selectedCardImage').style.backgroundImage = `url('img/card/Tarot${(selectedCardId + 1) .toString().padStart(2, '0')}.png')`;
    document.querySelector('.cardTitle').textContent = selectedCard.title;
    document.querySelector('.cardKeyword').textContent = selectedCard.keyword;
    document.querySelector('.cardDescription').textContent = selectedCard.description;


    document.querySelector('.restartBtn').onclick = restart;
}

function restart() {
    document.querySelector('.cardSelectSection').style.display = 'none';
    document.querySelector('.resultSection').style.display = 'none';


    document.querySelector('.layoutTarot').style.display = 'flex';


    document.querySelector('.questionT').value = '';
    selectedCardId = null;
    userQuestion = "";
}