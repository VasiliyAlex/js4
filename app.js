//    1 задание
   
    let imya = prompt('Введите своё имя');
    let age = +prompt('Введите год своего рождения');
    let year = +prompt('Введите какой сейчас год');
    let myAge = year - age;
    function primer( a = imya, b = ', ваш возраст - ', c = myAge) {
    let answer = a + b + c;
    return answer}
    console.log(primer())
    
    // 2 задание

    function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min)  + min ) 
}
let number = +prompt('Введите количество задач');

for(let i = 1; i <= number; i++) {
    let one = rand(1,10);
    let two = rand(1,10);
    let three = rand(1,4);
    if (three == 1) {znak = ' + '; primer = one + two ;}
    else if (three == 2) {znak = ' - '; primer = one - two ;}
    else if (three == 3) {znak = ' * '; primer = one * two ;}
    else {znak = ' / '; primer = one / two };
    let zadacha = +prompt(one + znak + two + ' =');
    let word = zadacha == primer ? 'верный : ' : 'не верный : '+ zadacha + '. Правильный ответ : ';
    alert( ' Ваш ответ ' + word + primer)
}