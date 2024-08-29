// XPath expression to find the element you want to delete
const xpath = '//div[@class="x78zum5 xdt5ytf xdj266r x11i5rnm xod5an3 x169t7cy x1j7kr1c xvbhtw8"]';

// Evaluate the XPath expression
const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// Check if the element exists
if (element) {
    // Remove the element from the DOM
    element.remove();  // Alternatively, you can use: element.parentNode.removeChild(element);
} else {
    console.log("Element not found.");
}
