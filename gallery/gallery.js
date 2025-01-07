/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Log to check if the function is triggered
    console.log("Mouse over: ", previewPic.alt);
    
    // Change the background image of the div with the id = "image"
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
    
    // Change the text of the div with the id = "image" to the alt text of the preview image
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    // Update the URL for the background image back to the original
    document.getElementById('image').style.backgroundImage = "url('')";
    
    // Change the text of the div back to the original text
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
function upDate(previewPic) {
    if (previewPic && previewPic.src && previewPic.alt) {
        document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
        document.getElementById('image').innerHTML = previewPic.alt;
    }
}
