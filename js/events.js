function setEventImg() {
    date = new Date();
    month = date.getMonth()+1;
    day = date.getDate();
    if (month == 3 && day == 15) {
        document.getElementById('event-img').src = "images/events/0315.png";
        document.getElementById('event-img').setAttribute('alt', '1848–49-es forradalom és szabadságharc');
        document.getElementById('event-img').setAttribute('title', '1848–49-es forradalom és szabadságharc');
    } else if (month == 8 && day == 20) {
        document.getElementById('event-img').src = "images/events/0820.png";
        document.getElementById('event-img').setAttribute('alt', 'Államalapítás ünnepe');
        document.getElementById('event-img').setAttribute('title', 'Államalapítás ünnepe');
    } else if (month == 10 && day == 23) {
        document.getElementById('event-img').src = "images/events/1023.png";
        document.getElementById('event-img').setAttribute('alt', '1956-os forradalom és szabadságharc');
        document.getElementById('event-img').setAttribute('title', '1956-os forradalom és szabadságharc');
    } else if (month == 12 && (day == 24 || day == 25 || day == 26) ) {
        document.getElementById('event-img').src = "images/events/xmas.png";
        document.getElementById('event-img').setAttribute('alt', 'Kellemes karácsonyi ünnepeket!');
        document.getElementById('event-img').setAttribute('title', 'Kellemes karácsonyi ünnepeket!');
    } else if ( (month == 12 && day == 31) || (month == 1 && day == 1) ){
        document.getElementById('event-img').src = "images/events/newyear.png";
        document.getElementById('event-img').setAttribute('alt', 'Boldog új évet!');
        document.getElementById('event-img').setAttribute('title', 'Boldog új évet!');
    }
}