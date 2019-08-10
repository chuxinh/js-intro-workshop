// Level 3

/*
    Introduction
    ============

    WooHoo, you got so far on your first day! Great!

    But we still have more things for you. First of all, open index.html, and
    replace our script from level2.js to our current file — level3.js.

    P.S. If you want to use multiple js files simultaneously, simply add more
    script tags.
*/

/*
    Lets talk a little more about HTML, CSS, and how we can interact with them
    in JavaScript.


    Hypertext Markup Language (HTML)
    --------------------------------
    As you noticed, HTML is divided into elements that look like this:

    <header></header>
    <p></p>
    etc

    We call these "tags". Each element on the page has an opening and closing
    tag. (NOTE: Some tags are self-closing like <img>.)

    The outermost tag in every HTML file is <html>.

    Inside the <html> tag you will find a <head> and <body> tag.

    In <head> we keep meta information, the page title and links to css files.
    <body> contains our actual content.

    For a full list of HTML tags, you can refer to this listing:
    http://htmldog.com/references/html/tags/

    HTML tags may contain attributes:
    <div class="settings"></div>

    This div has an attribute named class that has a value: 'settings'.


    Cascading Style Sheets (CSS)
    ----------------------------
    CSS describes how HTML elements look.

    CSS files are comprised of 'declaration blocks'. Each declaration block is
    composed of a selector and a set of visual style rules. A declaration looks
    like this:

    [selector] {
      style-name: value;
      style-name: value;
      style-name: value;
    }

    Selectors specify which elements the visual styles are applied to.

    The most basic selectors refer to elements by their tag-name. They look
    like this:

    body {
      background-color: white;
    }

    Selectors can also refer to elements by their class attribute like this:

    .settings {
      margin: 0;
    }

    or IDs, like this:

    #logo {
      text-align: center;
    }

    The list of css properties is huge, you can read more here, if you're
    interested:
    https://www.w3.org/TR/CSS21/propidx.html

    Don't worry, you don't need to remember all of this immediately!
*/

/*
    Phew, lots of new things. Let's come back to javaScript and see how we can
    interact with HTML.
*/


/*
    Accessing Elements
    ==================

    Document Object Model (DOM)
    ---------------------------
    The DOM is the javascript representation of the active HTML file. The DOM
    is available under a special global variable called 'document'. We can get
    specific nodes (page elements) with the DOM method: 'querySelector'.

    Let's get our twitter link from the page.

    Example:

    const ourTwitter = document.querySelector('.twitter');
    // We can store page elements in variables, just like any other value!
    // However, note that a page element is an object, which is a "reference
    // type" just like arrays (see level 2).  That means you can change
    // attributes and properties of the element, but not the variable itself.
    // You will see this in action in this section.
*/

// TODO: Now it's your turn — get the h1 tag from the page and store it into a
// variable named ourTitle.
// console.log it and see what you get!
const ourTitle = document.querySelector("h1");









/*
    Getting Similar Elements
    ========================

    We also can get all elements with the same tag. In our footer, we have an
    unordered list (<ul>), with three list items (<li>) inside. Let's get all
    of them as an array of page elements.

    Example:

    // Will get all <li> from the page
    const mediaLinks = document.querySelectorAll('li');
*/


// TODO: Get all <li> elements from the page in a variable named mediaLinks.
const mediaLinks = document.querySelectorAll("li");



// TODO: Now console.log mediaLinks.length




// TODO: Do you remember loops from level 2? Using this knowledge, iterate
// through each mediaLinks item and console.log it.

for (let i = 0; i < mediaLinks.length; i++) {
  console.log(mediaLinks[i]);
}








/*
    Ok, so far so good. But what if we want only the text from our 'h1' tag?
    Page elements have another property for this: '.textContent'

    Example:

    ourTwitter.textContent;
    // We will get text 'Twitter: @NodeGirlsSydney @NodeGirlsMelb'
*/


// TODO: Get the content of 'h1' element and console.log it.
console.log(ourTitle.textContent);









/*
    Editing Page Content
    ====================

    We can change the content of the tags using the same .textContent property.

    Example:

    ourTwitter.textContent = '@ButenkoMe';
    console.log(ourTwitter.textContent);
    // guess what we will see on the page and in the console?
*/


// TODO: Make up a new title! Change the content of our 'h1' to anything you
// like.
ourTitle.textContent = 'Next place to visit!';
console.log(ourTitle.textContent);

const oursubTitle = document.querySelector("h2");
oursubTitle.textContent = "Singapore, San Francisco, Tokyo 🙋";





/*
    Editing Attributes
    ==================

    We can also change and set attributes on our elements.

    Example:

    const ourTwitter = document.querySelector('.twitter');
    ourTwitter.id = "surprise";
*/


// TODO: Update the value of the 'src' attribute of our img tag to
// "img/kittens.jpeg"
// const ourImg = document.querySelector("img");
// ourImg.src = "img/singapore.jpg";



/*
    Editing Styles
    ==============

    Let's change some styles. Page elements have a '.style' property. We can
    assign styles to the style property using the same names as in CSS files.

    (If a CSS property name has '-' in the name — like font-size — then the
    hyphen will be deleted and the next word starts with a capital instead —
    fontSize.  This pattern of naming is called CamelCase.)

    Example:

    const ourTwitter = document.querySelector('.twitter');
    ourTwitter.style.backgroundColor = 'white';
*/


// TODO: Get any element on the page and change some styles for it.
// ourImg.style.maxWidth = '100rem';






/*
    Creating New Nodes (Elements)
    =============================

    The document object also provides ways to create nodes from scratch:

    document.createElement(tagName); --> create the element
    document.createTextNode(text); --> what text it should contain
    document.appendChild(node); --> append it to the document

    Example:

    const pageNode = document.querySelector('body');
    const newParagraph = document.createElement('p');
    const paragraphText = document.createTextNode('Squee!');
    newParagraph.appendChild(paragraphText);
    pageNode.appendChild(newParagraph);
*/


// TODO: Well, do you still have kittens on your screen? I like both logo and
// kittens. Let's create a new image that sources our original logo file, and
// put it into a header.
//
// P.S. You also can give styles to the new node that you create.

/*

Self exercise: Try adding a rotating banner at the bottom of the page
*/

var rotatingSeconds = 2; //number often in seconds to rotate
var currentCnt = 0; //start the counter at 0

// place your images, text, etc in the array elements here
var itemsLink = new Array();


// itemsLink.push("img/agathe-marty-651082-unsplash.jpg");

// itemsLink.push("img/braden-collum-1288400-unsplash.jpg");
// itemsLink.push("img/chen-hu-656089-unsplash.jpg");
itemsLink.push("img/singapore.jpg");
itemsLink.push("img/alex-knight-760570-unsplash.jpg");
// itemsLink.push("img/hardik-pandya-535344-unsplash.jpg");
// itemsLink.push("img/benjamin-hung-340383-unsplash.jpg");
// itemsLink.push("img/jezael-melgoza-1127048-unsplash.jpg");
// itemsLink.push("img/louie-martinez-482218-unsplash.jpg");
itemsLink.push("img/joseph-barrientos-49318-unsplash.jpg");
itemsLink.push("img/logo_muses_color.svg");


function rotater() {
    console.log("in rotater");
    document.querySelector(".rotate").innerHTML = "<img src='" + itemsLink[currentCnt] + "' height='400' border='0'/>";
    console.log(document.querySelector(".rotate").innerHTML);
    currentCnt = (currentCnt == itemsLink.length - 1) ? 0 : currentCnt + 1;
    setTimeout("rotater()", rotatingSeconds * 1000);
}

function rotater1() {
    if (document.layers) {
        document.rotatorLayer.document.write("<img src='" + itemsLink[currentCnt] + ">");
        document.rotatorLayer.document.close();
        alert("In layers");
    }
    if (document.all) {
        alert("Complete loading");
        rotator.innerHTML = "<img src='" + itemsLink[currentCnt] + ">";
    }

    currentCnt = (currentCnt == itemsLink.length - 1) ? 0 : currentCnt + 1; //increment or reset
    setTimeout("rotater()", rotatingSeconds * 1000);
}
window.onload = rotater1;



















////////////////////////////////////////////////////////////////////////
// Congratulations! You have finished Part 3 of JavaScript Basics!    //
// Stand up, stretch your legs, and celebrate your achievement.       //
// I believe you deserve some sweets today!                           //
////////////////////////////////////////////////////////////////////////
