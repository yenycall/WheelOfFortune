let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // 아래로 스크롤 - 헤더 숨기기
        header.classList.add('hidden');
        header.classList.remove('visible');
    } else {
        // 위로 스크롤 - 헤더 보이기
        header.classList.add('visible');
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

// GAME

document.addEventListener('DOMContentLoaded', function () {
    const introSection = document.getElementById('intro');
    const howToPlaySection = document.getElementById('how-to-play');
    const gameStageSection = document.getElementById('game-stage');

    const startButton = document.getElementById('start-button');
    const playButton = document.getElementById('play-button');

    // 요소들이 존재하는지 확인 후 이벤트 리스너 추가
    if (startButton) {
        startButton.addEventListener('click', HowToPlay);
    }

    if (playButton) {
        playButton.addEventListener('click', startGame);
    }

    // How to Play 화면 보여주기
    function HowToPlay() {
        if (introSection) introSection.classList.add('hidden');
        if (howToPlaySection) howToPlaySection.classList.remove('hidden');
        if (gameStageSection) gameStageSection.classList.add('hidden');
    }

    // 게임 시작
    function startGame() {
        if (introSection) introSection.classList.add('hidden');
        if (howToPlaySection) howToPlaySection.classList.add('hidden');
        if (gameStageSection) gameStageSection.classList.remove('hidden');

        gameState = {
            currentStage: 0,
            selectedCards: [],
            selectedActions: [],
        };
        loadStage(0);
    }
});





const tarotCards = [{
        id: 0,
        name: "THE FOOL 바보",
        symbol: "🃏",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 1,
        name: "THE MAGICIAN 마법사",
        symbol: "✨",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 2,
        name: "THE HIGH PRIESTESS 여사제",
        symbol: "🌙",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 3,
        name: " THE EMPRESS 여황제",
        symbol: "👑",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 4,
        name: "THE EMPEROR 황제",
        symbol: "⚔️",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 5,
        name: "THE HIEROPHANT 교황",
        symbol: "📜",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 6,
        name: "THE LOVERS 연인들",
        symbol: "❤️",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 7,
        name: "THE CHARIOT 전차",
        symbol: "🏆",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 8,
        name: "STRENGTH 힘",
        symbol: "💪",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 9,
        name: "THE HERMIT 은둔자",
        symbol: "🔦",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 10,
        name: "WHEEL OF FORTUNE 운명의 수레바퀴",
        symbol: "🎡",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 11,
        name: "JUSTICE 정의",
        symbol: "⚖️",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 12,
        name: "THE HANGED MAN 매달린 사람",
        symbol: "🙃",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 13,
        name: "DEATH 죽음",
        symbol: "💀",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 14,
        name: "TEMPERANCE 절제",
        symbol: "🍵",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 15,
        name: "THE DEVIL 악마",
        symbol: "😈",
        frontImage: "img/card/tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 16,
        name: "THE TOWER 탑",
        symbol: "🗼",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 17,
        name: "THE STAR 별",
        symbol: "⭐",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 18,
        name: "THE MOON 달",
        symbol: "🌕",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 19,
        name: "THE SUN 태양",
        symbol: "☀️",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 20,
        name: "JUDGEMENT 심판",
        symbol: "📯",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    },
    {
        id: 21,
        name: "THE WORLD 세계",
        symbol: "🌍",
        frontImage: "img/card/Tarot.png",
        backImage: "img/card/tarotBack.svg"
    }
];

// 스테이지 정의 (행동 선택지 추가)
const stages = [{
        title: "img/stage1.svg",
        description: `
        타이타닉 호의 침몰 예언 후 항구로 뛰어간 당신! <br>
        당신은 출항 직전의 배를 발견한 후 선장을 찾아 달려갑니다. <br>
        선장에게 어떤 말을 할까요?`,
        image: "img/movie01.jpg",
        cards: [0, 1, 2, 18],
        stories: {
            0: "THE FOOL : 직감적 • 감정적 • 순수함 • 무모함",
            1: "THE MAGICIAN : 능동적 • 논리적 • 자신감",
            2: "THE HIGH PRIESTESS : 신중한 통찰 • 내면의 지혜 • 신비한 접근",
            18: "THE MOON : 환상 • 불안 • 내면의 혼란"
        },
        // 각 카드에 대한 행동 선택지 추가
        actions: {
            0: [{
                    text: "이 배는 침몰해요! 이유는 몰라도... 그냥 확실해요! 믿어주세요!",
                },
                {
                    text: "너무 불안해요. 제발 지금 출항하지 말아 주세요. 부탁이에요.",
                },
                {
                    text: "왜 이 배를 꼭 타야 해요? 다른 방법은 없을까요?",
                }
            ],
            1: [{
                    text: "저에겐 이 상황을 바꿀 방법이 있어요. 절 믿고 잠시만 멈춰주세요.",
                },
                {
                    text: "이건 단순한 추측이 아닙니다. 패턴과 징후를 분석한 결과예요.",
                },
                {
                    text: "배를 멈춰야 해요. 저는 그 이유를 압니다.",
                }
            ],
            2: [{
                    text: "조용히 제 말을 들어보세요. 뭔가 흐름이 잘못되고 있어요.",
                },
                {
                    text: "신께서 말했어요. 이 항해는 예정되어 있지 않던 길이에요.",
                },
                {
                    text: "당신도 느끼지 않나요? 이 배는 나쁜 쪽으로 이끌리고 있어요.",
                }
            ],
            18: [{
                    text: "현실인지 꿈인지 모르겠지만 절대 이대로 가면 안 돼요.",
                },
                {
                    text: "꿈에서 이 장면을 봤어요. 사람들이 물속에 빠져 죽게 될 거에요.",
                },
                {
                    text: "이 배가 실존하는 게 확실한가요?",
                }
            ]
        }
    }, {
        title: "img/stage2.svg",
        description: `선장은 당신의 말을 믿지 않았습니다. <br>
    당신은 기자를 찾아가 타이타닉의 침몰 예언을 알리기로 결심합니다. <br>
    기자까지 당신을 믿지 않는다면 당신은 배에 직접 탑승해 타이타닉 침몰을 막을 계획입니다.
    `,
        image: "img/movie02.webp",
        cards: [3, 4, 5, 14, 15],
        stories: {
            3: "THE EMPRESS : 포용 • 설득 • 공감",
            4: "THE EMPEROR : 권위 • 통제 • 책임감",
            5: "THE HIEROPHANT : 전통 • 신념 • 도덕성",
            14: "THE TEMPERANCE : 조화 • 중재 • 신중함",
            15: "THE DEVIL : 유혹 • 통제 • 진실의 왜곡"

        },
        actions: {
            3: [{
                    text: "기자님, 이건 모두를 위한 일이에요. 사람들을 살릴 수 있어요."
                },
                {
                    text: "당신도 사람이 죽는 건 바라지 않잖아요. 제 마음을 이해해주세요."
                },
                {
                    text: "당신의 말 한 마디가 세상을 바꿀 수 있어요. 함께 해주세요."
                }
            ],
            4: [{
                    text: "이건 명백한 위협입니다. 책임지고 보도해야 합니다."
                },
                {
                    text: "혼란을 막으려면 지금 조치해야 합니다. 시간이 없습니다."
                },
                {
                    text: "제 말을 무시하면 당신도 이 일에 책임을 지셔야 할 겁니다."
                }
            ],
            5: [{
                    text: "진실은 반드시 드러나야 합니다. 당신의 역할은 그 진실을 전하는 거예요."
                },
                {
                    text: "얼마나 많은 생명이 달려있는지 생각해보세요. 그냥 지나칠 수는 없잖아요."
                },
                {
                    text: "기자로서의 사명감, 그걸 따르신다면 도와주셔야 합니다."
                }
            ],
            14: [{
                    text: "혼란스러울 수 있어요. 하지만 제 말을 믿어서 나쁠 것도 없지 않나요?"
                },
                {
                    text: "당장 믿기 어렵다면, 최소한 조사만이라도 해 주세요."
                },
                {
                    text: "제 말을 믿지 않아도 좋아요. 다만, 이 경고를 전해만 주세요."
                }
            ],
            15: [{
                    text: "이건 특종이 될 거에요. 당신만 알고 있는 진실, 끌리지 않나요?"
                },
                {
                    text: "정보를 듣고 당신은 배 밖에서 어떤 일이 일어나는지 지켜보기만 하면 돼요."
                },
                {
                    text: "기회는 지금뿐이에요. 안 믿으면 후회하게 될 겁니다."
                }
            ]
        }
    },
    {
        title: "img/stage3.svg",
        description: `기자는 기사를 썼지만 당신을 조롱하는 내용 뿐이었습니다. <br>
    배 밖에서 할 수 있는 일을 모두 한 당신은 배에 탑승할 것인지에 대해 카드를 뽑아보려 합니다. <br>
    카드에 당신의 운명이 달려 있습니다. 침몰하는 배에 탑승해 뭔가를 바꾸거나, 아무것도 바꾸지 못하거나!
    `,
        image: "img/movie03.jpg",
        cards: [8, 9, 12, 13, 16],
        stories: {
            8: "STRENGTH : 내면의 용기 • 인내 • 온화한 의지",
            9: "THE HERMIT : 고독 • 내면 탐구 • 조용한 통찰",
            12: "THE HANGED MAN : 희생 • 관점의 전환 • 수용",
            13: "DEATH : 변화 • 종말 • 새로운 출발",
            16: "THE TOWER : 붕괴 • 충격 • 진실"

        },
        actions: {
            8: [{
                    text: "두렵지만, 배에 탑승하는 것이 내가 해야 할 일이야."
                },
                {
                    text: "지금 필요한 건 누군가의 용기예요. 제가 그걸 할게요."
                },
                {
                    text: "이건 타이타닉만의 문제가 아니에요. 제 예언을 증명하는 일이기도 해요."
                }
            ],
            9: [{
                    text: "누군가는 이 진실을 끝까지 지켜봐야 하니까요."
                },
                {
                    text: "세상이 믿어주지 않아도 조용히 움직일 거에요."
                },
                {
                    text: "이 길은 제 운명이에요. 끝까지 그 길을 가보려 합니다."
                }
            ],
            12: [{
                    text: "누군가는 남고, 누군가는 가야 하죠. 그게 저라도요."
                },
                {
                    text: "이젠 받아들일 때예요. 내가 뭘 바꿀 수 있을지 모르지만…"
                },
                {
                    text: "어떤 결과가 있더라도 끝까지 눈을 감지는 않겠어요."
                }
            ],
            13: [{
                    text: "이건 마지막 여정이에요. 그래도 끝은, 새로운 시작이 될 수 있어요."
                },
                {
                    text: "정리되지 않은 이야기가 있어요. 끝내야 해요."
                },
                {
                    text: "이대로 가면 다 끝이야. 내 목숨과 바꿔서라도 운명을 바꿀 거야."
                }
            ],
            16: [{
                    text: "모두가 외면한 진실을, 난 끝까지 밝혀낼 겁니다."
                },
                {
                    text: "붕괴는 피할 수 없어요. 그렇다면 안에서 시작되어야 하죠."
                },
                {
                    text: "모두가 떨어질 때, 나 혼자 살아남을 순 없어요."
                }
            ]
        }
    },
    {
        title: "img/stage4.svg",
        description: `당신은 타이타닉호에 탑승했습니다. <br>
    배 안에서 어떤 행동을 실행할 지 선택해봅시다. <br>
    타이타닉에 탑승한 인물들 혹은 잭과 로즈를 찾아보는 것도 좋겠어요!
    `,
        image: "img/movie04.avif",
        cards: [6, 7, 11, 17],
        stories: {
            6: "THE LOVERS : 사랑 • 잭과 로즈를 만나다.",
            7: "THE CHARIOT : 목표 지향 • 배의 선장을 만나다.",
            11: "JUSTICE : 책임 • 로즈의 약혼자 칼을 만나다.",
            17: "THE STAR : 희망 • 승객을 만나 구조 방법을 찾다."

        },
        actions: {
            6: [{
                    text: "당신들이 꼭 살아남아야 해요. 서로를 위해서라도요."
                },
                {
                    text: "이 배는 침몰해요. 함께 탈출할 방법을 찾아야 해요."
                },
                {
                    text: "사랑은 강하죠. 그 힘이 이 위기를 버티게 할 거예요."
                }
            ],
            7: [{
                    text: "아직 늦지 않았어요. 무언가 할 수 있어요, 지금이라도."
                },
                {
                    text: "이번엔 듣게 될 거예요. 듣지 않으면 모두 위험하니까요."
                },
                {
                    text: "제가 안내할게요. 지금부터는 제가 이 배의 방향을 정하겠습니다."
                }
            ],
            11: [{
                    text: "당신을 위해서 하는 말이에요. 로즈와 당신을 위해서라도 막아야해요."
                },
                {
                    text: "당신이 사랑이라 믿은 것이 진심이었다면, 지금이라도 올바른 선택을 하세요."
                },
                {
                    text: "당신의 지위를 이용해 구조 요청을 보내게 해주세요."
                }
            ],
            17: [{
                    text: "지금이라도 빙산이 나타나기 전에 배의 방향을 바꾸면 괜찮을지도 몰라요."
                },
                {
                    text: "미리 구명보트를 찾아봐요."
                },
                {
                    text: "근처를 지나가는 다른 배를 알고 있나요? 구조 요청을 보내봐요."
                }
            ]
        }
    },
    {
        title: "img/stage5.svg",
        description: `사람들을 설득하는 데 성공한 당신! <br>
    구명보트의 위치를 파악했습니다. <br>
    근처 선박 'SS 캘리포니안'에 구조요청을 보내고 모든 일이 순조롭게 흘러가는 것 같은데...
    `,
        image: "img/movie05.jpg",
        cards: [10, 19, 20, 21],
        stories: {
            10: "WHEEL OF FORTUNE : 예측 불가한 전환점",
            19: "THE WORLD : 종결",
            20: "THE SUN : 생명력",
            21: "JUDGEMENT : 최후의 심판"

        },
        actions: {
            10: [{
                    text: "구명 보트의 수가 모자라요. 탈 수 있는 사람이라도 타야 해요."
                },
                {
                    text: "구조 요청 신호에 응답이 없어요! 다른 배에라도 구조 요청을 보내야해요."
                },
                {
                    text: "이제 물이 새고 있어요. 배가 침몰하는 것은 운명이었어요."
                }
            ],
            19: [{
                    text: "여기가 마지막이라면 나 역시 함께 있을게요."
                },
                {
                    text: "기록을 남길게요. 누군가는 진실을 알 수 있도록."
                },
                {
                    text: "우리가 할 수 있는 건 다 했어요. 이제 받아들일 시간이에요."
                }
            ],
            20: [{
                    text: "물이 점점 차고 있어요! 빨리 배를 빙산과 반대로 돌려요!"
                },
                {
                    text: "아이들이라도 보트에 태워야 해요! 어서!"
                },
                {
                    text: "햇빛 한 점 없이 어두운 밤이에요. 이미 끝났어요."
                }
            ],
            21: [{
                    text: "항구에서라도, 기사가 났을 때라도 제 말을 믿었어야 했어요."
                },
                {
                    text: "누군가는 남아야 해요. 침몰을 막지 못한 제가 남을게요."
                },
                {
                    text: "우리가 해온 선택들이 맞았던 걸까요?"
                }
            ]
        }
    }
];

const ending = {

};


// 기본 게임 상태
let gameState = {
    currentStage: 0,
    selectedCards: [],
    selectedActions: [],
    storyPath: [],
    actionPath: []
};

// DOM 요소
const introSection = document.getElementById('intro');
const gameStageSection = document.getElementById('game-stage');
const endingSection = document.getElementById('ending');
const stageTitle = document.getElementById('stage-title');
const stageDescription = document.getElementById('stage-description');
const cardsContainer = document.getElementById('cards-container');
const storyText = document.getElementById('story-text');
const actionChoices = document.getElementById('action-choices');
const actionResult = document.getElementById('action-result');
const nextButton = document.getElementById('next-button');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const endingText = document.getElementById('ending-text');
const gameContent = document.getElementById('game-content');

// 게임 시작
// DOM 요소 선언 부분 아래에 추가
if (nextButton) {
    nextButton.addEventListener('click', goToNextStage);
}

if (restartButton) {
    restartButton.addEventListener('click', restartGame);
}

function startGame() {
    gameState = {
        currentStage: 0,
        selectedCards: [],
        selectedActions: [],
    };

    introSection.classList.add('hidden');
    gameStageSection.classList.remove('hidden');
    endingSection.classList.add('hidden');

    loadStage(gameState.currentStage);
}

function loadStage(stageIndex) {
    const stage = stages[stageIndex];

    const imgContainer = document.querySelector('.img-container img');
    if (imgContainer) {
        imgContainer.src = stage.image;
    }

    stageTitle.innerHTML = `<img src="${stage.title}">`;
    stageDescription.innerHTML = stage.description;

    // 초기 상태 설정
    storyText.classList.add('hidden');
    actionChoices.classList.add('hidden');
    gameContent.classList.remove('show');
    cardsContainer.classList.remove('selected-state');
    nextButton.disabled = true;

    // 카드 생성
    createCards(stage.cards);

}

function createCards(cardIds) {
    cardsContainer.innerHTML = '';

    cardIds.forEach(cardId => {
        const card = tarotCards.find(c => c.id === cardId);
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.cardId = card.id;

        cardElement.innerHTML = `
            <div class="card-inner">
            <div class="card-back">
                <img src="${card.backImage}" alt="카드 뒷면">
            </div>
            <div class="card-front">
                <img src="${card.frontImage}" alt="${card.name}">
            </div>
        </div>
            `;

        cardElement.addEventListener('click', () => selectCard(cardElement, card.id));
        cardsContainer.appendChild(cardElement);
    });
}



function selectCard(cardElement, cardId) {
    // 이미 선택된 카드가 있으면 무시
    if (cardsContainer.querySelector('.card.selected')) {
        return;
    }

    // 카드 뒤집기 애니메이션
    cardElement.classList.add('flipped');
    cardElement.classList.add('selected');

    // 다른 카드들 완전히 숨기기
    const allCards = cardsContainer.querySelectorAll('.card');
    allCards.forEach(card => {
        if (card !== cardElement) {
            setTimeout(() => {
                card.classList.add('hidden');
            }, 200); // 뒤집기 애니메이션 후 숨김
        }
    });

    // 레이아웃 변경
    setTimeout(() => {
        cardsContainer.classList.add('selected-state');
        showStoryAndActions(cardId);
    }, 600);

    // 게임 상태 업데이트
    gameState.selectedCards[gameState.currentStage] = cardId;
}

function showStoryAndActions(cardId) {
    const stage = stages[gameState.currentStage];

    // 스토리 텍스트 표시
    storyText.textContent = stage.stories[cardId];
    storyText.classList.remove('hidden');

    // 행동 선택지 생성
    actionChoices.innerHTML = '';
    const actions = stage.actions[cardId];

    actions.forEach((action, index) => {
        const actionElement = document.createElement('div');
        actionElement.className = 'action-choice';
        actionElement.textContent = action.text;

        actionElement.addEventListener('click', () => selectAction(actionElement, cardId, index));
        actionChoices.appendChild(actionElement);
    });

    actionChoices.classList.remove('hidden');
    gameContent.classList.add('show');
}

function selectAction(actionElement, cardId, actionIndex) {
    // 이미 선택된 행동이 있으면 선택 해제
    const selectedAction = actionChoices.querySelector('.action-choice.selected');
    if (selectedAction) {
        selectedAction.classList.remove('selected');
    }

    // 새 행동 선택
    actionElement.classList.add('selected');

    // 다음 버튼 활성화
    nextButton.disabled = false;

    // 게임 상태 업데이트
    gameState.selectedActions[gameState.currentStage] = actionIndex;
}

function goToNextStage() {
    gameState.currentStage++;

    if (gameState.currentStage < stages.length) {
        loadStage(gameState.currentStage);
    } else {
        showEnding();
    }
}


function showEnding() {
    gameStageSection.classList.add('hidden');
    endingSection.classList.remove('hidden');

    // 간단한 엔딩 메시지
    endingText.innerHTML = `타이타닉이 침몰했습니다.<br>
    타로카드로 한 예측은 사람들에게 신뢰를 얻지 못했을 뿐만 아니라 결국 미래조차 바꾸지 못했습니다.<br>
    당신이 바꿀 수 있었던 것은 배에 탑승하는 것, 구명보트와 구조요청할 선박을 찾는 것, 당신의 행동들로 이루어진 것들 뿐입니다. <br>
    오로지 자신에게 의지해 미래를 헤쳐나가시길 바랍니다. <br><br>
    SELECTED TAROTS <br> ${gameState.selectedCards.map(id => tarotCards.find(c => c.id === id)?.name).join(' • ')}
    `;
}

function restartGame() {
    endingSection.classList.add('hidden');
    introSection.classList.remove('hidden');
    gameStageSection.classList.add('hidden');
}




document.addEventListener('DOMContentLoaded', function() {
    const bgmAudio = document.getElementById('bgm-audio');
    const bgmToggle = document.getElementById('bgm-toggle');
    let isPlaying = false;

    // 볼륨 설정 (0.0 ~ 1.0)
    bgmAudio.volume = 0.3;

    bgmToggle.addEventListener('click', function() {
        if (isPlaying) {
            // 음악 일시정지
            bgmAudio.pause();
            bgmToggle.classList.remove('pause');
            bgmToggle.classList.add('play');
            isPlaying = false;
        } else {
            // 음악 재생
            bgmAudio.play().catch(function(error) {
                console.log('오디오 재생 실패:', error);
                // 일부 브라우저에서 사용자 상호작용 없이는 오디오 재생이 불가능할 수 있습니다
            });
            bgmToggle.classList.remove('play');
            bgmToggle.classList.add('pause');
            isPlaying = true;
        }
    });

    // 음악이 끝나면 자동으로 다시 시작 (loop 속성으로 이미 처리됨)
    bgmAudio.addEventListener('ended', function() {
        // loop 속성이 있어서 자동으로 반복되지만, 추가적인 처리가 필요하면 여기에
    });

    // 음악 로드 에러 처리
    bgmAudio.addEventListener('error', function() {
        console.log('오디오 파일을 불러올 수 없습니다.');
        // 에러 발생시 버튼 비활성화 등의 처리
    });
});