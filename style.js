const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(()=>{

    let currenTime = new Date();

hrs.innerHTML = (currenTime.getHours()<10 ?"0":"") + currenTime.getHours();
min.innerHTML =(currenTime.getMinutes()<10 ?"0":"") + currenTime.getMinutes();;
sec.innerHTML = (currenTime.getSeconds()<10 ?"0":"") + currenTime.getSeconds();;
},1000)