/*添加時間*/
let btnShow = document.querySelector('button');
let output = document.querySelector('span');

btnShow.addEventListener('click', () => {/*若按下show time button，則show time*/ 
    let today = new Date();
   

    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
 
    let current_time = `${hours}:${minutes}:${seconds}`
    output.innerText = current_time;
});

function addZero(num) {
    return num < 10 ? `0${num}` : num;
}