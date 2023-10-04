const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');
let score = 0;

function movePlayer(event) {
    if (event.key === 'ArrowLeft') {
        const leftPosition = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
        if (leftPosition > 0) {
            player.style.left = leftPosition - 10 + 'px';
        }
    } else if (event.key === 'ArrowRight') {
        const leftPosition = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
        if (leftPosition < 250) {
            player.style.left = leftPosition + 10 + 'px';
        }
    }
}

function moveObstacle() {
    let obstaclePosition = 400;
    obstacle.style.bottom = obstaclePosition + 'px';

    const moveInterval = setInterval(() => {
        obstaclePosition -= 10;
        obstacle.style.bottom = obstaclePosition + 'px';

        if (obstaclePosition < 0) {
            obstaclePosition = 400;
            obstacle.style.left = Math.floor(Math.random() * 250) + 'px';
            score++;
        }

        if (
            obstaclePosition < 50 &&
            obstaclePosition > 0 &&
            parseInt(player.style.left) > parseInt(obstacle.style.left) - 30 &&
            parseInt(player.style.left) < parseInt(obstacle.style.left) + 30
        ) {
            clearInterval(moveInterval);
            alert('Game over! Your score: ' + score);
            location.reload();
        }
    }, 50);
}

document.addEventListener('keydown', movePlayer);
moveObstacle();
