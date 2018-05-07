 window.onload = function getDate()
{
    var Day = new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");
    var Month = new Array("Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря");
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDay();
    var dayofmonth = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
     if(minutes < 10)
    {
        minutes = '0' + minutes;
        
    }
    window.setTimeout(arguments.callee, 60000);

    //По надобности условие ниже повторить с minutes и hours
    document.getElementById('time').innerHTML = dayofmonth + ' ' + Month[month]+' '+ Day[day] + ' '+hours+ ':' + minutes;
};