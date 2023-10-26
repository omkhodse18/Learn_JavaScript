// =============================================== SECTION 1 =========================================================
// ------------------------------------------- DOM ---------------------------------------------------
/*
==> What is Document Object Model (DOM)
https://www.javascripttutorial.net/javascript-dom/document-object-model-in-javascript/
-> The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.
-> Tree like structured


    => Pure ke pure HTML ke code ko javascript object mein convert karde to usse document kehte hain aur document par hum kaam karte usse hum DOM bolte hain.
    => Agar javascipt communicate karti hain browser ke sath to usse hum BOM bolte hain
    => window ye global object hota hain aur ussi mein hi DOM aur BOM aur JS ki core functionalites lie karti hain

*/

/*
=> innerHTML -> get/set inner html
    1) gets an element / all of its decendent html contxt
                        OR
    2) sets an element HTML context

=> .textContent

=> .innerText

check => innerHTML vs textcontent
check => innerTEXT vs textcontent


Do by yourself (HTML)=> 
    Inserting or Creating element
    1) createElement()
    2) appendChild
    3) adding text to upper tags
    4) insertAdjacentHTML() => has to be called with 2 arg.
                            => location / position => Check properties
                            => HTML text / context to be inserted

    // Removing element
    5) removeChild() => opposite to create
                     => You should know its parent element and child element to remove
                     => drawback is you need to know parent always, you can use <child-element>.parent() method
                        and then simply <parent-name>.removeChild(<childElement>)
*/

// =============================================== SECTION 2 =========================================================
/*
    Changing CSS style page content using JS
    1) .style 
    2) .cssText
    3) .setAttribute 
    4) .className
    5) .classList 

*/
