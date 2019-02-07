(function(){
    let minHand = document.querySelector('.min-hand'),
        hourHand = document.querySelector('.hour-hand'),
        secHand = document.querySelector('.second-hand'), 
        setTime;

    setTime = () => {
        let date = new Date(),
            secondDegree = (date.getSeconds()/60) * 360 + 90,
            minDegree = (date.getMinutes()/60) * 360 + 90,
            hourDegree = (date.getHours()/60) * 360 + 90;

        secHand.style.transform = `rotate(${secondDegree}deg)`;
        minHand.style.transform = `rotate(${minDegree}deg)`;
        hourHand.style.transform = `rotate(${hourDegree}deg)`;
    };

    setInterval(setTime, 1000);
})();
