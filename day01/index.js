function removeTransition(e) {
    //这个事件会触发n次，propertyName 为：border-right-color；border-bottom-color；border-top-color；
    //transform；border-left-color；box-shadow
    if (e.propertyName !== 'transform') {
        return;
    }
    //移除playing的css样式 target=key
    e.target.classList.remove('playing');
}

function playSound(e) {
    //keydown对应键值x，找出属性data-key为x的audio标签。
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //keydown对应键值x，找出属性data-key为x的div标签。
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    //如果没有对应键值的audio标签，返回；
    if (!audio) return;
    //div标签添加css样式
    key.classList.add('playing');
    //重置audio时间
    audio.currentTime = 0;
    //播放audio
    audio.play();
}

// 将所有class="key"的元素找出来，添加事件监听，触发removeTransition
const keys = Array.from(document.querySelectorAll('.key'));
//transitionend 该事件在 CSS 完成过渡后触发。
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// 监听页面的keydown事件，触发playAudio函数。keydown事件作为参赛传入playAudio函数
window.addEventListener('keydown', playSound);