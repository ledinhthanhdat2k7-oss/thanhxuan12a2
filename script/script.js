// Lời chào theo giờ
const now = new Date();
const hour = now.getHours();
let greeting;

if(hour < 12){
    greeting = "Chào buổi sáng, lớp 12A2!";
}else if(hour < 18){
    greeting = "Chào buổi chiều, lớp 12A2!";
}else{
    greeting = "Chào buổi tối, lớp 12A2!";
}

document.getElementById("greeting").textContent = greeting;