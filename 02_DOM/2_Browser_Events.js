// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
/*
    Points to be know about - 
        -> Events
        -> Respond to events
        -> Data stored in event
        -> Stop an event
        -> Life cycle of events
*/

/* Events are basically are invisible but you can see it on console by monitorEvents() method. */
/* Event Target => https://iq.js.org/questions/javascript/what-is-event-target

=> addEventListner
    <event_target>.addEventListener(<event-to-listen-for>,<function-to-run-when-event-happend>);
        1. <event_target> => component (element,document,p,div,audio,videos)
        2. <event-to-listen-for> (Event type) => click, scroll ......
        3. Funtion  => define what to do when event happens


    => https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    => Example.:
    let content = document.querySelector('h1');
    content.addEventListener('click', () => {
        content.style.color = 'red';
    });


=> removeEventListner()
    => It should have same event target
    => Same event type
    => Same funtion (Functions are objects so it will treat as function differnt objects if they pass in just like addEventListner's function so it is must to pass factory function (just like  C++) )
*/

// ==================================== SECTION 2 ============================================
// -------------------------- Phases of events ------------------------------
/* 
=> https://www.codingninjas.com/studio/library/phases-of-js-event
=> https://www.geeksforgeeks.org/phases-of-javascript-event/

    1. Capturing phase
    2. At target phase
    3. Bubbling Phase (By default)
*/

// ----------------------------- Event Object ----------------------------
/*
    1. When an event occurs, the addEventListener's function got an event object which contains a lot of information about an event
    
    
    try this => on any website or your count app
    
    let content = document.querySelecor('h2');
    content.addEventlistner('click', function(event){
        console.log(event);
    }); 

    => You can use any name rather than event
*/

// ----------------------------- Prevent Default Action ----------------------------
/*
    check out prevent => https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

    let links = document.querySelectorAll('a');
    let thirdLink = links[2];
    
    thirdLink.addEventListner('click',(event) => {
        event.preventDefault();
        console.log("Link removed");
    });

    As 'a' tag open a link which is its default behaviour, but we can prevent its default behaviour by event.preventDefault() method. Make sure event pass to addEventListner's function because we are applying preventDefault() method on event. 
*/

// ==================================== SECTION 3 ============================================
// ------------------------ Avoid to many events ---------------------------
/*
    Check this on websites also watch events
*/
