// list of words
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
        words: ['سیب', 'شلیل', 'هلو', 'انار', 'پرتقال', 'طالبی', 'نارنگی', 'بلوبری', 'انبه', 'گیلاس', 'هندوانه', 'خربزه', 'انجیر', 'انگور', 'زردالو', 'زرشک', 'سنجد', 'الو', 'خیار', 'خرما', 'توت', 'تمشک', 'پسته', 'کیوی', 'لیمو', 'موز', 'مویز', 'نارگیل']
    },
    {
        category: 'مکان',
        words: ['رستوران', 'گلخانه', 'موزه', 'مدرسه', 'دانشگاه', 'سینما', 'مزرعه', 'پارک', 'استخر', 'پارکینگ', 'بیمارستان', 'بانک', 'فرودگاه', 'هتل', 'کلیسا', 'کارخانه', 'داروخانه', 'کتابخانه', 'نانوایی', 'کافه', 'درمانگاه', 'ساحل', 'قبرستان']
    },
    {
        category: 'شهر های ایران',
        words: ['مشهد', 'تهران', 'شیراز', 'اصفهان', 'همدان', 'اهواز', 'خوزستان', 'یزد', 'گرمسار', 'تبریز', 'اردبیل', 'گرگان', 'ساری', 'بابل', 'بابلسر', 'کرمان', 'کرمانشاه', 'خرمشهر', 'گیلان', 'قزوین', 'زنجان', 'لرستان', 'بوشهر', 'فارسی', 'سمنان', 'ایلام']
    },
    {
        category: 'اعضای بدن',
        words: ['دندان', 'زبان', 'حلق', 'مری', 'معده', 'روده', 'کبد', 'کلیه', 'نای', 'حنجره', 'شش', 'قلب', 'رگ', 'مویرگ', 'مغز', 'طحال', 'مخچه', 'چشم', 'گوش', 'دست', 'پا', 'ناخن', 'مژه', 'مو', 'انگشت', 'پوست']
    },
    {
        category: 'اسم کشور',
        words: ['افغانستان', 'ایران', 'البانی', 'الجزایر', 'اسپانیا', 'ایرلند', 'اردن', 'امریکا', 'پاکستان', 'پاناما', 'پرتغال', 'تاجیکستان', 'ترکمنستان', 'چین', 'ژاپن', 'روسیه', 'دانمارک', 'صربستان', 'عراق', 'عمان', 'قبرس', 'گرجستان', 'قطر', 'فیلیپین', 'فلسطین', 'لبنان', 'مصر', 'مجارستان', 'لهستان', 'هندوستان', 'هلند', 'یمن', 'یونان', 'برزیل', ]
    },
]

// background images that use for body
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

// choose a random background url for body
let randomNumberBgImage = Math.floor(Math.random() * imagesources.length)
document.body.style.backgroundImage = 'url(' + imagesources[randomNumberBgImage] + ')'

// variables that are used in DOM
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
let notificationBar = document.querySelector('.notifications-bar')


// game needed variables
let playerName
let playerIncorrectCounter = 8
let playerScore = 0
let playerCorrectWords = 0
let playerShownWords = []
let numberOfGuessedLetters = []
let mainSecretWord
let isHintNumberOneUsed = false
let isHintTwoUsed = false
let isHintThreeUsed = false
let hintNumberThereCounter = false



// Start game btn --> when clicked! name input show up
function startGameBtnHandler() {
    getPlayerName.style.visibility = 'visible'
}

// cancel btn --> when clicked! input will become empty and input display become none
function cancelGameStartHandler() {
    getPlayerName.style.visibility = 'hidden'
    playerNameInput.classList.remove('valid-input')
    playerNameInput.classList.remove('invalid-input')
    validationNameMessage.innerHTML = 'نام بازیکن را وارد کنید'
    playerNameInput.value = ''
}

// check if player name is valid or not to show validation to player
function playerNameValidation() {
    // check length of name input --> if valid , validation happened
    if (playerNameInput.value.trim().length < 2) {
        playerNameInput.classList.remove('valid-input')
        playerNameInput.classList.add('invalid-input')
        validationNameMessage.innerHTML = 'اسم شما باید بیش از 3 کاراکتر باشد'
        validationNameMessage.style.color = '#C2185B'

        // check length of name input --> if invalid , invalidation happened
    } else if (playerNameInput.value.trim().length > 2) {
        playerNameInput.classList.remove('invalid-input')
        playerNameInput.classList.add('valid-input')
        validationNameMessage.innerHTML = 'اسم شما قابل قبول میباشد'
        validationNameMessage.style.color = '#2E7D32'
    }
}

// confirm name btn --> when clicked! game starts
function confirmNameBtnHandler() {
    // if name length is more than 3 , game starts
    if (playerNameInput.value.length >= 3) {
        playerName = playerNameInput.value

        gameFirstPage.style.display = 'none'
        gameSection.style.display = 'flex'

        // these variables refer to chooseWord function to choose a random word for game
        let [secretWord, wordCategory] = chooseWord()

        // create containers that hold letter in game div
        createSecretWordContainer(secretWord, wordCategory)

        // timer starts
        countdownTimer(true)
    }
}

// this function will choose a random word from the word list
function chooseWord() {
    // the first variable will define length of word list and the second one will make a random number based on
    // the available length
    let numberOfCategories = words.length
    let chooseCategory = Math.floor(Math.random() * numberOfCategories)

    // the first variable will define number of words in category and the second one will make a random number based on
    // the available length
    let numberOfWord = words[chooseCategory].words.length
    let chooseWord = Math.floor(Math.random() * numberOfWord)

    // this line will refer the random numbers to list and save the chosen word to mainSecretWord variable
    mainSecretWord = words[chooseCategory].words[chooseWord]

    // this variable saves the chosen category
    let mainCategory = words[chooseCategory].category

    // this line saves the word that shows each round
    playerShownWords.push(mainSecretWord)

    // function return mainWord and mainCategory of the round
    return [mainSecretWord, mainCategory]
}

// this function create divs based on word length to start playing
function createSecretWordContainer(word, category) {

    console.log(word)

    // make the secret word container empty ane ready for new word
    secretWordContainer.innerHTML = ''

    // this loop will generate the empty boxes that holds letter based on word length
    for (let letterCounter of mainSecretWord) {
        secretWordContainer.insertAdjacentHTML('beforeend', '<div class="letter-container">\n' +
            '                    <img class="box" src="svg/check_box_outline_blank_24dp_5F6368_FILL0_wght200_GRAD-25_opsz24.svg">\n' +
            '                    <span class="letter"></span>\n' +
            '                </div>')
    }

    // show word category to player
    wordCategoryDiv.innerHTML = category
}

// game timer
function countdownTimer(start) {

    // start:true get the if statement permission to start counting
    if (start) {

        // default time is 100 seconds
        let countTime = 1000000


        let timer = setInterval(function () {
            timeLeft.innerHTML = countTime
            countTime -= 1
            timeDuration.after.width -= 6


            if (countTime < 0) {
                finishGame()
                clearInterval(timer)
            }

        }, 1000)


    }
}

// this function finish game and show score board to player
function finishGame() {
    // these lines refer information to score board
    finishPagePlayerName.innerHTML = playerName
    finishPagePlayerScore.innerHTML = playerScore
    finishPagePlayerGuessedWords.innerHTML = playerCorrectWords
    shownWords.innerHTML = `${playerShownWords}`


    gameSection.style.display = 'none'
    finishGameSection.style.display = 'flex'
}

// when player click on any letter --> this function checks if secret word contains the letter of not!
function checkLetterInWord(event) {

    // checks if the clicked letter has used before on not!
    if (!event.target.classList.contains('chosen')) {

        // make the pressed letter unusable
        event.target.classList.add('chosen')

        // create a list that has elements based on secret word letters
        let secretWordList = [...mainSecretWord]

        // check if secret word contains the pressed letter or not
        if (mainSecretWord.includes(event.target.innerHTML)) {

            // show user the chosen letter in keyboard is correct
            event.target.classList.add('chosen-true')

            // this variable contains index of guessed letters
            let indexOfLetter = []

            // these few lines define which index of secret word matches the clicked letter
            let counter = 0
            secretWordList.forEach(function (item) {
                if (item === event.target.innerHTML) {
                    // push index of guessed letter to indexOfLetter list
                    indexOfLetter.push(counter)

                    // check if this letter has shown by HELP or not! if not push the index to numberOfGuessedLetters list
                    if (!numberOfGuessedLetters.includes(counter)) {
                        numberOfGuessedLetters.push(counter)
                    }

                    // add one score to player score , and change player score in html
                    playerScore++
                    changeScoreValue(1)
                    playerScoreDiv.innerHTML = playerScore
                }
                counter++
            })


            // these lines add a class to boxes that has letter inside (guessed letter's boxes)
            indexOfLetter.forEach(function (index) {
                secretWordContainer.children[index].lastElementChild.innerHTML = event.target.innerHTML
                secretWordContainer.children[index].lastElementChild.classList.add('correct')
            })

            // check for win here! if YES --> next work show up
            checkForWin()

            // if loop goes here , it means the clicked letter is not in secret word
        } else {
            // show user the chosen letter in keyboard is not correct
            event.target.classList.add('chosen-false')

            // if player lives become 0 , this line finish game
            if (playerIncorrectCounter < 2) {
                finishGame()
                // if not , game continues but player live -= 1
            } else {
                playerIncorrectCounter -= 1
                playerIncorrectCounterDiv.innerHTML = playerIncorrectCounter
            }

        }
    }

}

// this function check if all letters have been guessed or not!
function checkForWin() {

    // this statement checks if number of guessed letters are equal to secret word length of not!
    if (numberOfGuessedLetters.length === mainSecretWord.length) {

        // Show the guessed word to user
        showNotification('کلمه ای که حدس زدید : ' + mainSecretWord)

        // Third hint is Used? if yes, make used in general round
        if (hintNumberThereCounter){
            isHintThreeUsed = true
            playerScore -= 10
            changeScoreValue(-10)
            playerScoreDiv.innerHTML = playerScore
            document.querySelector('#third-hint').innerHTML = 'استفاده شده'
            document.querySelector('#third-hint').style.display = 'inline'
        }

        // player score become 5 more
        playerScore += 5
        changeScoreValue(5)

        // player guessed words become 1 more
        playerCorrectWords += 1
        changeGuessedWordsValue(1)

        // player score and guessed word in html change
        playerScoreDiv.innerHTML = playerScore
        playerGuessedWords.innerHTML = playerCorrectWords

        // this function reset all keyboard letters to normal texture
        kSpanList.forEach(function (tag) {
            tag.classList.remove('chosen')
            tag.classList.remove('chosen-true')
            tag.classList.remove('chosen-false')
        })

        // make the variable ready to count for next word
        numberOfGuessedLetters.length = 0

        // choose a new word to continue the game
        let [secretWord, wordCategory] = chooseWord()

        // create new boxes based on new chosen word
        createSecretWordContainer(secretWord, wordCategory)
    }

}

// this function change the value of in-game score board with animation
function changeScoreValue(numValue) {

    // if player gain score , this statement run
    if (numValue > 0) {
        changeScoreValueDiv.innerHTML = '+' + numValue
        changeScoreValueDiv.style.backgroundColor = 'rgba(119, 222, 14, 0.38)'

        // if player lose score , this statement run
    } else {
        changeScoreValueDiv.innerHTML = numValue
        changeScoreValueDiv.style.backgroundColor = 'rgba(213, 0, 0, 0.5)'
    }

    // animation of gaining or losing score
    changeScoreValueDiv.style.animation = 'score-change-value 1500ms 1'
    changeScoreValueDiv.addEventListener('animationend', function () {
        changeScoreValueDiv.style.animation = ''
    })
}

// this function change the value of in-game guessed words with animation
function changeGuessedWordsValue(numValue) {

    changeGuessedWordsValueDiv.innerHTML = '+' + numValue

    // animation of gaining score in guessing word
    changeGuessedWordsValueDiv.style.animation = 'guessed-words-change-value 1500ms 1'
    changeGuessedWordsValueDiv.addEventListener('animationend', function () {
        changeGuessedWordsValueDiv.style.animation = ''
    })
}

// this function reload page , ready for next player
function replayBtnHandler() {
    location.reload()
}

// this function control the first hint
function hintNumberOneHandler() {

    // if first hint used before , player can`t use if again
    if (!isHintNumberOneUsed) {

        if (playerScore >= 2) {

            // make the first hint unusable
            isHintNumberOneUsed = true

            // player score become -2 for using this hint
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
        } else {
            showNotification('شما برای استفاده از این مورد به ' + (2 - playerScore) + ' امتیاز دیگر نیاز دارید')
        }

    } else {
        showNotification('شما قبلا از این مورد استفاده کرده اید')
    }

}

function hintNumberTwoHandler(){

    if (!isHintTwoUsed) {

        if (playerScore >= 3) {

            isHintTwoUsed = true

            let emptyLetters = []
            let counter = 0

            while (counter < mainSecretWord.length) {

                if (!(secretWordContainer.children[counter].lastElementChild.className.includes('correct'))) {
                    emptyLetters.push(counter)
                }
                counter++
            }


            emptyLetters.forEach(function (item) {
                secretWordContainer.children[item].style.animation = 'hint-number-two 750ms alternate-reverse infinite'
                secretWordContainer.children[item].style.cursor = 'pointer'
                secretWordContainer.children[item].addEventListener('click', showLetter)
                isHintTwoUsed = false
            })


            let isHintUsed = false

            setTimeout(function (){
                if (!isHintUsed){
                    try {
                        emptyLetters.forEach(function (item) {
                            secretWordContainer.children[item].style.animation = ''
                            secretWordContainer.children[item].style.cursor = 'context-menu'
                            secretWordContainer.children[item].removeEventListener('click', showLetter)
                        })
                        showNotification('از کمک خود در مدت زمان مشخص شده استفاده نکردید ، لذا بعدا میتوانید دوباره از آن استفاده کنید' , 'important')
                    }catch (e){}
                }
            },10000)

            function showLetter(event){

                let itemCounter = 0

                let indexOfGuessedLetter

                while (itemCounter < mainSecretWord.length) {

                    if (secretWordContainer.children[itemCounter].firstElementChild === event.target) {

                        emptyLetters.forEach(function (item) {
                            secretWordContainer.children[item].style.animation = ''
                            secretWordContainer.children[item].style.cursor = 'context-menu'
                            secretWordContainer.children[item].removeEventListener('click', showLetter)
                            indexOfGuessedLetter = itemCounter
                        })

                        secretWordContainer.children[itemCounter].lastElementChild.innerHTML = mainSecretWord[itemCounter]
                        secretWordContainer.children[itemCounter].lastElementChild.classList.add('correct')
                    }
                    itemCounter++
                }


                numberOfGuessedLetters.push(indexOfGuessedLetter)
                playerScore -= 3
                changeScoreValue(-3)
                playerScoreDiv.innerHTML = playerScore
                document.querySelector('#second-hint').style.display = 'inline'
                document.querySelector('#second-hint').innerHTML = 'استفاده شده'
                isHintUsed = true

                checkForWin()
            }

        } else {
            showNotification('شما برای استفاده از این مورد به ' + (3 - playerScore) + ' امتیاز دیگر نیاز دارید')
        }
    } else {
        showNotification('شما قبلا از این مورد استفاده کرده اید')
    }
}

function hintNumberThereHandler() {

    if (!isHintThreeUsed) {

        if (playerScore >= 10) {

            hintNumberThereCounter = true

            showNotification('امتیاز این کمک پس از تکمیل کلمه لحاظ میشود')
            showNotification('کلمه : ' + mainSecretWord , 'important')

            setTimeout(function () {
                document.querySelector('.hint-number-there-div').style.display = 'none'
            }, 7000)

            document.querySelector('.ok-hint-there').addEventListener('click', function () {
                document.querySelector('.hint-number-there-div').style.display = 'none'
            })
        } else {
            showNotification('شما برای استفاده از این مورد به ' + (10 - playerScore) + ' امتیاز دیگر نیاز دارید')
        }

    } else {
        showNotification('شما قبلا از این مورد استفاده کرده اید')
    }
}

function showNotification(message, messageClassType='') {
    let messageText = '<p class="notification ' + messageClassType + '">' + message + '</p>'
    notificationBar.insertAdjacentHTML('afterbegin', messageText)
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