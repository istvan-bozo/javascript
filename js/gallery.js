/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    
    //y = document.getElementById('image').textContent; // Need to save the original text. It works in this case, but it’s not an elegant solution.

    console.log('Alt text check on upDate: ' + previewPic.alt); // Checking the function working
    x = document.getElementById('image');
    x.innerHTML = previewPic.alt;
    x.style.backgroundColor = '#8e68ff'; // if the picture url is broken
    x.style.backgroundImage = 'url('+previewPic.src+')';
    }

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    console.log('unDo check'); // Checking the function working
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundColor = '#8e68ff'; // if the picture url is broken
    document.getElementById('image').style.backgroundImage = 'url("")';

    //document.getElementById('image').innerHTML = y; // Put back the original text. It works in this case, but it’s not an elegant solution.
	//document.getElementById('image').style.backgroundImage = null;
    }
