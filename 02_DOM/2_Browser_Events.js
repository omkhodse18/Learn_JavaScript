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


=> renoveEventListner()
    => It should have same event target
    => Same event type
    => Same funtion (Functions are objects so it will treat as function differnt objects if they pass in just like addEventListner's function so it is must to pass factory function (just like  C++) )
*/
