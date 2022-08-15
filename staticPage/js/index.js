const nose = document.getElementById('nose');

const eyes = document.querySelectorAll('circle');

document.body.addEventListener('mousemove', (e) => {
    // 获取鼠标当前位置
    let x = e.clientX;
    let y = e.clientY;
    // 计算鼠标位置距离眼睛的长度值
    let ex = x - (window.innerWidth - 600) / 2 - 220;
    let ey = y - (window.innerHeight - 453) / 2 - 240;

    // 眼珠子可以转动的半径为20
    let angle = ex / ey;
    let sy = ey > 0 ? Math.cos(Math.atan(angle)) * 20 : -Math.cos(Math.atan(angle)) * 20;
    let sx = ey > 0 ? Math.sin(Math.atan(angle)) * 20 : -Math.sin(Math.atan(angle)) * 20;
    eyes[0].setAttribute('transform', `translate(${sx + 270}, ${sy + 290})`);
    eyes[1].setAttribute('transform', `translate(${sx + 462}, ${sy + 290})`);
    // 鼻子幅度小一点
    nose.setAttribute('transform', `translate(${sx / 5}, ${sy / 5})`);
})