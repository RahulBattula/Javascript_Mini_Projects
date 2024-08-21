const imageOne = document.getElementById('img1');
const imageTwo = document.getElementById('img2');
const imageThree = document.getElementById('img3');
const imageFour = document.getElementById('img4');
const imageFive = document.getElementById('img5');
const fullImg = document.getElementById('fullImg');

imageOne.onclick = function() {
    fullImg.src = './images/Uzui Tengen.jpg';
}

imageTwo.onclick = function() {
    fullImg.src = './images/Zenitsu.jpg';
}

imageThree.onclick = function() {
    fullImg.src = './images/𝐑𝐞𝐧𝐠𝐨𝐤𝐮 • 𝐊𝐢𝐦𝐞𝐭𝐬𝐮 𝐧𝐨 𝐘𝐚𝐢𝐛𝐚.jpg';
}

imageFour.onclick = function() {
    fullImg.src = './images/𝑶𝒃𝒂𝒏𝒂𝒊 𝑰𝒈𝒖𝒓𝒐.jpeg';
}

imageFive.onclick = function() {
    fullImg.src = './images/𝗬𝗘𝗔𝗚𝗫𝗥𝗥✰.jpeg';
}

