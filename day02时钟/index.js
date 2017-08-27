//获取时分秒指针元素
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//在这里改变时分秒指针元素的旋转角度
function setDate() {
    const now = new Date();
    //获取当前秒数
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    //设置秒针元素旋转角度
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //获取当前分钟数
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    //设置分钟元素旋转角度
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    //获取当前小时数
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    //真是时针元素旋转角度
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

//定时器 1秒执行上面方法一次
setInterval(setDate, 1000);

setDate();