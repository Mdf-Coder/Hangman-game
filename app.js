let words = [
    {
        category: 'خوراک و غذا',
        words: ['برنج', 'قیمه', 'سوپ', 'اش', 'بادمجان', 'کدو', 'فلافل', 'کالباس', 'ابگوشت', 'کوکو', 'دلمه', 'کباب', 'مرغ', 'سمبوسه', 'شیربرنج', 'عدسی', 'کتلت', 'فسنجان', 'املت', 'شیشلیک', 'الویه', 'پیراشکی', 'پیتزا']
    },
    {
        category: 'شغل',
        words: ['قصاب', 'خیاط', 'معلم', 'فروشنده', 'راننده', 'مکانیک', 'خلبان', 'ناخدا', 'حسابدار', 'منشی', 'مشاور', 'نانوا', 'نجاری', 'وکیل', 'پلیس', 'قاضی', 'خبرنگار', 'گذارشگر', 'مترجم', 'گوینده', 'پرستار', 'پستچی', 'داروساز', 'بازیگر']
    },
    {
        category: 'میوه و سبزی',
        words: ['سیب', 'شلیل', 'هلو', 'انار', 'پرتغال', 'طالبی', 'نارنگی', 'بلوبری', 'انبه', 'گیلاس', 'هندوانه', 'خربزه', 'انجیر', 'انگور', 'زردالو', 'زرشک', 'سنجد', 'الو', 'خیار', 'خرما', 'توت', 'تمشک', 'پسته', 'کیوی', 'لیمو', 'موز', 'مویز', 'نارگیل']
    },
    {
        category: 'مکان',
        words: ['رستوران', 'گلخانه', 'موزه', 'موزه', 'فروشگاه', 'مدرسه', 'دانشگاه', 'اداره', 'سینما', 'مزرعه', 'پارک', 'استخر', 'پل', 'پارکینگ', 'زیرگذر', 'میدان', 'بیمارستان', 'خیابان', 'جاده', 'کوچه', 'بانک', 'فرودگاه', 'هتل', 'کلیسا', 'کارخانه', 'داروخانه', 'کتابخانه', 'کتابفروشی', 'نانوایی', 'کافه', 'بازار', 'درمانگاه', 'ساحل', 'قبرستان']
    },
    {
        category: 'شهر های ایران ',
        words: ['مشهد', 'تهران', 'شیراز', 'اصفهان', 'همدان', 'اهواز', 'خوزستان', 'یزد', 'گرمسار', 'تبریز', 'اردبیل', 'گرگان', 'ساری', 'بابل', 'بابلسر', 'کرمان', 'کرمانشاه', 'خرمشهر', 'گیلان', 'قزوین', 'زنجان', 'لرستان', 'بوشهر', 'فارسی', 'سمنان', 'ایلام']
    },
]

let imagesources = [
    'photo/alexis-antoine-kXMe4hugFA4-unsplash.jpg',
    'photo/denys-nevozhai-dq93aNzsrH0-unsplash.jpg',
    'photo/matthew-buchanan-g-0dp2ycCw0-unsplash.jpg',
    'photo/ryan-lum-1ak3Z7ZmtQA-unsplash.jpg',
    'photo/pexels-apasaric-325185.jpg',
    'photo/pexels-dmitry-demidov-515774-3784221.jpg',
    'photo/pexels-eberhardgross-691668.jpg',
    'photo/pexels-iriser-1379636.jpg',
    'photo/pexels-iriser-1408221.jpg',
    'photo/pexels-iriser-2781760.jpg',
    'photo/pexels-jovana-nesic-188639-593655.jpg',
    'photo/pexels-luisdelrio-15286.jpg',
    'photo/pexels-nicole-avagliano-1132392-2749481.jpg',
    'photo/pexels-pixabay-33545.jpg',
    'photo/pexels-rachel-xiao-253850-772429.jpg',
    'photo/pexels-rostislav-10458835.jpg',
    'photo/pexels-rpnickson-2559941.jpg',
    'photo/pexels-rpnickson-2775196.jpg',
    'photo/pexels-stywo-1261728.jpg',
]

let randomNumberBgImage = Math.floor(Math.random() * imagesources.length)
document.body.style.backgroundImage = 'url(' + imagesources[randomNumberBgImage] + ')'

let startGameBtn = document.querySelector('.start-game')
let getPlayerName = document.querySelector('.get-player-name')
let cancelGameStart = document.querySelector('.cancel-game-start')
let playerNameInput = document.querySelector('.player-name-input')
let validationNameMessage = document.querySelector('.validation-name')
let confirmNameBtn = document.querySelector('.confirm-name-btn')
let gameFirstPage = document.querySelector('.game-first-page')
let gameSection = document.querySelector('.game-section')
let kSpanList = document.querySelectorAll('.k-span')
let secretWordContainer = document.querySelector('.secret-word')
let wordCategoryDiv = document.querySelector('.word-category')
let timeLeft = document.querySelector('.left-time')
let finishGameSection = document.querySelector('.finish-game')
let finishPagePlayerName = document.querySelector('.player-name')
let finishPagePlayerScore = document.querySelector('.score')
let finishPagePlayerGuessedWords = document.querySelector('.correct-guessed-words')
let replayBtn = document.querySelector('.replay-game')
let playerIncorrectCounterDiv = document.querySelector('#incorrectCounter')
let shownWords = document.querySelector('.shown-words')
let timeDuration = document.querySelector('.time-duration')
let playerScoreDiv = document.querySelector('.player-score')
let playerGuessedWords = document.querySelector('.player-guessed-words')
let hintNumberOne = document.querySelector('.hint-number-one')
let hintNumberTwo = document.querySelector('.hint-number-two')
let hintNumberThere = document.querySelector('.hint-number-there')
let changeScoreValueDiv = document.querySelector('.change-score-value')
let changeGuessedWordsValueDiv = document.querySelector('.change-guessed-words-value')
let hintNumberTwoSelectIndexDiv = document.querySelector('.hint-number-two-div')
let showAvailableOptions = document.querySelector('.show-available-options')

gameSection.style.height = screen.height + 'px'
gameFirstPage.style.height = screen.height + 'px'
finishGameSection.style.height = screen.height + 'px'

let playerName
let playerIncorrectCounter = 8
let playerScore = 0
let playerCorrectWords = 0
let playerShownWords = []
let numberOfGuessedLetters = []
let mainSecretWord
let hintNumberOneCounter = 0
let hintNumberTwoCounter = 0
let hintNumberThereCounter = 0

function startGameBtnHandler(event) {
    getPlayerName.style.display = 'flex'
    getPlayerName.style.animation = 'show_name_div 300ms 1'
    getPlayerName.addEventListener('animationend', function () {
        getPlayerName.style.animation = ''
    })
}

function cancelGameStartHandler() {
    getPlayerName.style.display = 'none'
    playerNameInput.classList.remove('valid-input')
    playerNameInput.classList.remove('invalid-input')
    validationNameMessage.innerHTML = 'نام بازیکن را وارد کنید'
    playerNameInput.value = ''
}

function playerNameValidation() {
    if (playerNameInput.value.trim().length < 2) {
        playerNameInput.classList.remove('valid-input')
        playerNameInput.classList.add('invalid-input')
        validationNameMessage.innerHTML = 'اسم شما باید بیش از 3 کاراکتر باشد'
        validationNameMessage.style.color = '#C2185B'

    } else if (playerNameInput.value.trim().length > 2) {
        playerNameInput.classList.remove('invalid-input')
        playerNameInput.classList.add('valid-input')
        validationNameMessage.innerHTML = 'اسم شما قابل قبول میباشد'
        validationNameMessage.style.color = '#2E7D32'
    }
}

function confirmNameBtnHandler() {
    if (playerNameInput.value.length >= 3) {
        playerName = playerNameInput.value

        gameFirstPage.style.display = 'none'
        gameSection.style.display = 'flex'

        let [secretWord, wordCategory, catNum, wordNum] = chooseWord()
        createSecretWordContainer(secretWord, wordCategory)
        countdownTimer(true)
    }
}

function chooseWord() {
    let numberOfCategories = words.length
    let numberOfWord = words[0].words.length

    let chooseCategory = Math.floor(Math.random() * numberOfCategories)
    let chooseWord = Math.floor(Math.random() * words[chooseCategory].words.length)

    mainSecretWord = words[chooseCategory].words[chooseWord]

    let mainWord = words[chooseCategory].words[chooseWord]
    let mainCategory = words[chooseCategory].category

    return [mainWord, mainCategory]
}

function createSecretWordContainer(word, category) {
    playerShownWords.push(word)
    secretWordContainer.innerHTML = ''
    let wordLength = word.length
    while (wordLength > 0) {
        secretWordContainer.insertAdjacentHTML('beforeend', '<div class="letter-container">\n' +
            '                    <img class="box" src="svg/check_box_outline_blank_24dp_5F6368_FILL0_wght200_GRAD-25_opsz24.svg">\n' +
            '                    <span class="letter"></span>\n' +
            '                </div>')
        wordLength -= 1
    }
    wordCategoryDiv.innerHTML = category
}

function countdownTimer(start) {
    if (start) {

        let countTime = 100
        let timer = setInterval(function () {
            timeLeft.innerHTML = countTime
            countTime -= 1

            if (countTime < 0) {
                finishGame()
                clearInterval(timer)
            }

            if (countTime < 3) {
                timeDuration.style.animation = 'finishTime 1000ms 3'
            }
        }, 1000)


    }
}

function finishGame() {
    let shownWordsString = ''
    playerShownWords.forEach(function (item) {
        shownWordsString += (item + ' ، ')
    })

    document.body.classList.add('body-bg')
    finishPagePlayerName.innerHTML = playerName
    finishPagePlayerScore.innerHTML = playerScore
    finishPagePlayerGuessedWords.innerHTML = playerCorrectWords
    shownWords.innerHTML = shownWordsString.slice(0, -2)
    gameSection.style.display = 'none'
    finishGameSection.style.display = 'flex'
}

function checkLetterInWord(event) {

    if (!event.target.classList.contains('chosen')) {
        event.target.classList.add('chosen')

        let secretWordList = [...mainSecretWord]

        if (mainSecretWord.includes(event.target.innerHTML)) {
            let indexOfLetter = []

            let counter = 0

            secretWordList.forEach(function (item) {
                if (item === event.target.innerHTML) {
                    indexOfLetter.push(counter)

                    if (!numberOfGuessedLetters.includes(counter)) {
                        numberOfGuessedLetters.push(counter)
                    }

                    playerScore++
                    changeScoreValue(1)
                    playerScoreDiv.innerHTML = playerScore
                }
                counter++
            })

            indexOfLetter.forEach(function (index) {
                secretWordContainer.children[index].lastElementChild.innerHTML = event.target.innerHTML
                secretWordContainer.children[index].lastElementChild.classList.add('correct')
            })

            checkForWin()

        } else {
            if (playerIncorrectCounter < 2) {
                finishGame()
            } else {
                playerIncorrectCounter -= 1
                playerIncorrectCounterDiv.innerHTML = playerIncorrectCounter
            }

        }
    }

}

function checkForWin() {
    if (numberOfGuessedLetters.length === mainSecretWord.length) {
        playerScore += 5
        changeScoreValue(5)
        playerCorrectWords += 1
        changeGuessedWordsValue(1)
        playerScoreDiv.innerHTML = playerScore
        playerGuessedWords.innerHTML = playerCorrectWords
        kSpanList.forEach(function (tag) {
            tag.classList.remove('chosen')
        })
        numberOfGuessedLetters.length = 0
        let [secretWord, wordCategory] = chooseWord()
        createSecretWordContainer(secretWord, wordCategory)
    }

}

function changeScoreValue(numValue) {
    if (numValue > 0) {
        changeScoreValueDiv.innerHTML = '+' + numValue
        changeScoreValueDiv.style.backgroundColor = 'rgba(119, 222, 14, 0.38)'
    } else {
        changeScoreValueDiv.innerHTML = numValue
        changeScoreValueDiv.style.backgroundColor = 'rgba(213, 0, 0, 0.5)'
    }

    changeScoreValueDiv.style.animation = 'score-change-value 1500ms 1'
    changeScoreValueDiv.addEventListener('animationend', function () {
        changeScoreValueDiv.style.animation = ''
    })
}

function changeGuessedWordsValue(numValue) {

    changeGuessedWordsValueDiv.innerHTML = '+' + numValue

    changeGuessedWordsValueDiv.style.animation = 'guessed-words-change-value 1500ms 1'
    changeGuessedWordsValueDiv.addEventListener('animationend', function () {
        changeGuessedWordsValueDiv.style.animation = ''
    })
}

function replayBtnHandler() {
    document.body.classList.remove('body-bg')
    location.reload()
}

function hintNumberOneHandler() {

    if (!hintNumberOneCounter) {
        hintNumberOneCounter++

        playerScore -= 2
        changeScoreValue(-2)
        playerScoreDiv.innerHTML = playerScore

        let emptyLetters = []
        let counter = 0

        while (counter < mainSecretWord.length) {

            if (!(secretWordContainer.children[counter].lastElementChild.className.includes('correct'))) {
                emptyLetters.push(counter)
            }
            counter++
        }

        let randomIndex = Math.floor(Math.random() * emptyLetters.length)

        secretWordContainer.children[emptyLetters[randomIndex]].lastElementChild.innerHTML = mainSecretWord[emptyLetters[randomIndex]]
        secretWordContainer.children[emptyLetters[randomIndex]].lastElementChild.classList.add('correct')

        numberOfGuessedLetters.push(emptyLetters[randomIndex])

        document.querySelector('#first-hint').style.display = 'inline'
        document.querySelector('#first-hint').innerHTML = 'استفاده شده'

        checkForWin()
    }

}

function hintNumberTwoHandler() {

    if (!hintNumberTwoCounter) {
        hintNumberTwoCounter++

        let emptyLetters = []
        let counter = 0

        while (counter < mainSecretWord.length) {

            if (!(secretWordContainer.children[counter].lastElementChild.className.includes('correct'))) {
                emptyLetters.push(counter)
            }
            counter++
        }

        emptyLetters.forEach(function (item) {
            showAvailableOptions.insertAdjacentHTML('beforeend', '<option value="' + item + '">' + (item + 1) + '</option>')
        })

        hintNumberTwoSelectIndexDiv.style.display = 'flex'

        document.querySelector('.cancel-hint-number-two').addEventListener('click', function () {
            hintNumberTwoCounter = 0
            showAvailableOptions.innerHTML = '<option selected disabled value="undefined">شماره حرف انتخابی</option>'
            hintNumberTwoSelectIndexDiv.style.display = 'none'
        })

        document.querySelector('#show-letter-btn').addEventListener('click', function () {
            console.log(showAvailableOptions.value)

            if (showAvailableOptions.value !== 'undefined') {
                hintNumberTwoSelectIndexDiv.style.display = 'none'
                secretWordContainer.children[showAvailableOptions.value].lastElementChild.innerHTML = mainSecretWord[showAvailableOptions.value]
                secretWordContainer.children[showAvailableOptions.value].lastElementChild.classList.add('correct')
                numberOfGuessedLetters.push(Number(showAvailableOptions.value))
                playerScore -= 3
                changeScoreValue(-3)
                playerScoreDiv.innerHTML = playerScore
                document.querySelector('#second-hint').style.display = 'inline'
                document.querySelector('#second-hint').innerHTML = 'استفاده شده'

                checkForWin()
            }
        })
    }
}

function hintNumberThereHandler() {

    if (!hintNumberThereCounter) {
        hintNumberThereCounter++

        playerScore -= 10
        changeScoreValue(-10)
        playerScoreDiv.innerHTML = playerScore

        document.querySelector('#third-hint').innerHTML = 'استفاده شده'
        document.querySelector('#third-hint').style.display = 'inline'
        document.querySelector('.show-word').innerHTML = mainSecretWord
        document.querySelector('.hint-number-there-div').style.display = 'flex'

        setTimeout(function () {
            document.querySelector('.hint-number-there-div').style.display = 'none'
        }, 7000)

        document.querySelector('.ok-hint-there').addEventListener('click', function () {
            document.querySelector('.hint-number-there-div').style.display = 'none'
        })
    }
}

startGameBtn.addEventListener('click', startGameBtnHandler)
cancelGameStart.addEventListener('click', cancelGameStartHandler)
playerNameInput.addEventListener('keyup', playerNameValidation)
confirmNameBtn.addEventListener('click', confirmNameBtnHandler)
replayBtn.addEventListener('click', replayBtnHandler)
kSpanList.forEach(function (item) {
    item.addEventListener('click', checkLetterInWord)
})
hintNumberOne.addEventListener('click', hintNumberOneHandler)
hintNumberTwo.addEventListener('click', hintNumberTwoHandler)
hintNumberThere.addEventListener('click', hintNumberThereHandler)