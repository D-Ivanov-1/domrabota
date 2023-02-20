get();

setInterval(2000);

function send() 
{
var name = document.getElementById('name').value

var age = parseInt(document.getElementById('age').value)

var sms = document.getElementById('sms').value


document.getElementById('out').value

document.getElementById('sms').value = ""

console.log(`Гость ${name}${age} пишет: ${sms} `)

}

function get() 
{

   (async () => 
   {
      var response = await fetch('chat.txt');
      var answer = await response.text();
      document.getElementById('messages').innerText = answer;
   })

}


function kalkulyator() {
   var rost = parseInt(document.getElementById('rost').value)

   var ves = parseInt(document.getElementById('ves').value)

   var index = ves / (rost ** 2) * 10000

   var res = `Ваш имт = ${index}`



   switch (true) {

       case res < 16: res = 'Выраженный дефицит массы тела!'
           break
       case index >= 16 && index < 18, 5: res = res + ' Недостаточная масса тела!'
           break
       case index >= 18, 5 && index < 25: res = res + ' Нормальная масса тела!'
           break
       case index >= 25 && index < 30: res = res + ' Избыточная масса тела (предожирение)'
           break
       case index >= 30 && index < 35: res = res + ' Ожирение 1-ой степени!'
           break
       case index >= 35 && index < 40: res = res + ' Ожирение 2-ой степени!'
           break
       case index > 40: res = res + ' Ожирение 3-ой степени!'
           break

   }


   document.getElementById('textImt').innerHTML = res

   document.getElementById('imt').nnerHTML = ""
}

function vopros()
        {
         var name = document.getElementById('name').value;

         var age = parseInt(document.getElementById('age').value)

         var str = `Привет ${name}, Вам ${age}! `

         if (age >= 18 && age < 55 ) 
         {
            str = str + 'И Вам всё можно!'   
         };


         document.getElementById('out').innerText = str;
         document.getElementById('name').value = ""
        }


function privetstvie(){
var imy = prompt("Ваше имя")
allert("${imy} Для проверки домашнего задания откройте вкладку <<ДОМАШНЯЯ РАБОТА>>")
}
