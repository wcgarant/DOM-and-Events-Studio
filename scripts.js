// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log('Page loaded.');
    init();
});

function init() {

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
        flightStatus.innerHTML = "Shuttle in flight."
        //shuttleBackground should change from green to blue
        shuttleBackground.style.backgroundColor = "blue"
        //shuttle height should increase by 10k miles
        spaceShuttleHeight.innerHTML = "10000";
    }
    });

    landing.addEventListener("click", function(event){

        window.alert("The shuttle is landing. Landing gear engaged.")

        flightStatus.innerHTML = "The shuttle has landed."

        shuttleBackground.style.backgroundColor = "green"

        spaceShuttleHeight.innerHTML = "0"

    });

    missionAbort.addEventListener("click", function(event){

       if (window.confirm("Confirm that you want to abort the mission.")) {
    
        flightStatus.innerHTML = "Mission aborted"
    
        shuttleBackground.style.backgroundColor = "green"
    
        spaceShuttleHeight.innerHTML = "0"
       }

    });

    // up.addEventListener("click", function(event){
    //     rocket.style.up += "10px";
    //     spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) + 10000);
        

    // })




}