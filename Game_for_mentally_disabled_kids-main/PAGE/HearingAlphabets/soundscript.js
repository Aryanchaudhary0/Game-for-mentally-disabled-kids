document.addEventListener('DOMContentLoaded', function () {
    const alphabetSounds = {
        'A': 'sounds/a.mp3',
        'B': 'sounds/b.mp3',
        'C': 'sounds/c.mp3',
        'D': 'sounds/d.mp3',
        'E': 'sounds/e.mp3',
        'F': 'sounds/f.mp3',
        'G': 'sounds/g.mp3',
        'H': 'sounds/h.mp3',
        'I': 'sounds/i.mp3',
        'J': 'sounds/j.mp3',
        'K': 'sounds/k.mp3',
        'L': 'sounds/l.mp3',
        'M': 'sounds/m.mp3',
        'N': 'sounds/n.mp3',
        'O': 'sounds/o.mp3',
        'P': 'sounds/p.mp3',
        'Q': 'sounds/q.mp3',
        'R': 'sounds/r.mp3',
        'S': 'sounds/s.mp3',
        'T': 'sounds/t.mp3',
        'U': 'sounds/u.mp3',
        'V': 'sounds/v.mp3',
        'W': 'sounds/w.mp3',
        'X': 'sounds/x.mp3',
        'Y': 'sounds/y.mp3',
        'Z': 'sounds/z.mp3',
    };

    const playButton = document.getElementById('playButton');
    const letterContainer = document.getElementById('letter-container');
    const scoreElement = document.getElementById('score-value');
    const resultElement = document.getElementById('result');
    let score = 0;
    let rounds = 0;

    playButton.addEventListener('click', playRandomAlphabet);

    function playSound(letter) {
        const audio = new Audio(alphabetSounds[letter]);
        audio.play();
    }

    function playRandomAlphabet() {
        if (rounds < 10) {
            rounds++;
            const alphabetKeys = Object.keys(alphabetSounds);
            const randomAlphabet = alphabetKeys[Math.floor(Math.random() * alphabetKeys.length)];
            playSound(randomAlphabet);
            letterContainer.textContent = ''; 
            setTimeout(() => {
                letterContainer.textContent = randomAlphabet;
            }, 1500);

        } else {
            displayFinalScore();
        }
    }

    function displayFinalScore() {
        resultElement.textContent = `Game Over! Your final score is ${score}.`;
        playButton.disabled = true;
    }

    document.addEventListener('keydown', function (event) {
        const keyPressed = event.key.toUpperCase();
        if (Object.keys(alphabetSounds).includes(keyPressed)) {
            if (keyPressed === letterContainer.textContent) {
                score++;
                scoreElement.textContent = score;
            }
            
            playRandomAlphabet();
        }
    });
});
