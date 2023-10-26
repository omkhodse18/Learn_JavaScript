// ----------------------------- Performance ------------------------------------
/* 
    Performance
        => Measure speed of code
        => How to write efficient and & performing code => minimum reflow, repaint
        => Event loop
*/

/*
    1. Standard way to measure how long your code taken to run ==> preformance.now(); 

    Go through this =>
        1. reflow
        2. repaint
*/

/*
    The Call stack
    => JS is single threaded language (Runs one command at a time)
    =>
*/

// +++++++++++++++++++++++++++  EVENT LOOP ++++++++++++++++++++++++++++++++++++++++++
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
// https://www.javascripttutorial.net/javascript-event-loop/
/*
    => philip robert = http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

    => https://www.youtube.com/watch?v=8aGhZQkoFbQ
*/

/*
    A bit more .:
    1. Async code Event loop ke dwara hi execute hota hain  (setTimeout, event listners)
    2. Any async is handle by browser
    3. When async code is ready to be executed, it moves to the queue where it waits until call stack is empty
    4. Whenever call stack is empty, the code moves from queue to callstack and gets executed.  
 */

//  ++++++++++++++++++++++++++++++ setTimeout ++++++++++++++++++++++++++++++++

setTimeout(function () {
  console.log("Hi");
}, 4000);

/*
    4000 are milli-seconds(4sec)

    Is this print "HI" after 4 seconds?
    =>  There is no gurantee. 4 seconds is minimum time but it will executes after call stack becomes empty as it is async code

*/
