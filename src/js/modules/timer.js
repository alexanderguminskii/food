function timer() {

    const deadLine = new Date('02-28-2021');

    function makeZero(num) {
        if(num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getTimeRemains(endTime) {
        const total = endTime - (new Date()),
              days = Math.round(total / 1000 / 60 / 60 / 24),
              hours = Math.round((total / 1000 / 60 / 60) % 24),
              minutes = Math.round((total / 1000 / 60) % 60),
              seconds = Math.round((total / 1000) % 60);
        
        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setTimer(endTime) {
        const days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeId = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemains(endTime);

            days.textContent = makeZero(t.days);
            hours.textContent = makeZero(t.hours);
            minutes.textContent = makeZero(t.minutes);
            seconds.textContent = makeZero(t.seconds);

            if(t.total <= 0){
                clearInterval(timeId);
            }
        }

        updateClock();
    }

    setTimer(deadLine);
}

module.exports = timer;