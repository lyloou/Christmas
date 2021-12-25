window.onload = function () {
  let users = document.createElement('h1');
  let bgg = document.querySelector('.ones');
  let tree = document.querySelector('.twos');
  let toys = document.querySelector('.thirds');
  let audio = document.getElementById('audio')
  let body = document.body
  body.onclick = function () {
    audio.play()
  }
  bgg.classList.add('bgg');
  tree.classList.add('tree');
  toys.classList.add('toys');
  users.classList.add('user_name');
  document.body.appendChild(users);
  // document.body.appendChild(canva)
};
document.getElementById('audio').play()
const canvas = document.querySelector('#snow');
const W = canvas.clientWidth;
const H = canvas.clientHeight;
// 设置canvas画布大小
canvas.setAttribute('width', W);
canvas.setAttribute('height', H);
const ctx = canvas.getContext('2d');
const config = {
  number: 200,
  snowArr: [],
  pic: './img/snow.png',
  speed: 0,
};
let snowImg = new Image();
snowImg.src = config.pic;
for (let i = 0; i < config.number; i++) {
  config.snowArr.push({
    x: Math.random() * W,
    y: Math.random() * H,
    toX: Math.random(),
    toY: Math.random() * 1 + 1,
    size: Math.random() * 20 + 5,
  });
}
console.log(config);
const dropAnimation = () => {
  ctx.clearRect(0, 0, W, H);
  for (let i = 0; i < config.snowArr.length; i++) {
    let snow = config.snowArr[i];
    // ctx.beginPath()
    // ctx.arc(snow.x, snow.y, snow.size, 0, Math.PI * 2, true)
    // ctx.fillStyle = \"#666\"
    // ctx.fill()
    ctx.drawImage(snowImg, snow.x, snow.y, snow.size, snow.size);
    snow.x = snow.x > W ? 0 : snow.x + snow.toX;
    snow.y = snow.y > H ? 0 : snow.y + snow.toY;
  }
  requestAnimationFrame(dropAnimation);
};
requestAnimationFrame(dropAnimation);