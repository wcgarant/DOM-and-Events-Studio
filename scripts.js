// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log('Page loaded.');
    init();
});

function init() {

    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;

    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocket = document.getElementById("rocket");



    takeoff.addEventListener("click", function(event){
    if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
        //flight status should change to shuttle in flight
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + "px";
        flightStatus.innerHTML = "Shuttle in flight.";
        //shuttleBackground should change from green to blue
        shuttleBackground.style.backgroundColor = "blue";
        //shuttle height should increase by 10k miles
        altitude = 10000;
        spaceShuttleHeight.innerHTML = "10000";
    }
    });

    landing.addEventListener("click", function(event){

        window.alert("The shuttle is landing. Landing gear engaged.");

        flightStatus.innerHTML = "The shuttle has landed.";
        resetRocket();
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        spaceShuttleHeight.innerHTML = "0";

    });

    missionAbort.addEventListener("click", function(event){

       if (window.confirm("Confirm that you want to abort the mission.")) {
    
        flightStatus.innerHTML = "Mission aborted";
    
        shuttleBackground.style.backgroundColor = "green";
        resetRocket();
        altitude = 0;
        spaceShuttleHeight.innerHTML = "0";
       }

    });

    document.addEventListener("click", function(event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + "px";
        };

        if (event.target.id === "right" && rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + "px";
        };

        if (event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude
        };

        if (event.target.id === "down" && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude
        };
    })

    function resetRocket() {
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + "px";
        rocket.style.marginBottom = rocketPosY + "px";  
    }

}