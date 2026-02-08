var btnNo = document.getElementById('btnNo');
var messageOverlay = document.getElementById('messageOverlay');
var messageOverlayText = document.getElementById('messageOverlayText');
var messageOverlayClose = document.getElementById('messageOverlayClose');

function showBigMessage(text) {
    messageOverlayText.textContent = text;
    messageOverlay.classList.add('show');
}

messageOverlayClose.addEventListener('click', function () {
    messageOverlay.classList.remove('show');
});

messageOverlay.addEventListener('click', function (e) {
    if (e.target === messageOverlay) {
        messageOverlay.classList.remove('show');
    }
});

btnNo.addEventListener('mouseenter', function () {
    var x = (Math.random() - 0.5) * 200;
    var y = (Math.random() - 0.5) * 120;
    btnNo.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});

btnNo.addEventListener('click', function (e) {
    e.preventDefault();
    showBigMessage('Say Yes! ♥');
});

document.querySelector('.btn-yes').addEventListener('click', function () {
    showBigMessage('I love you too! ♥♥♥');
});
