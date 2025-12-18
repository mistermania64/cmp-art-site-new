const imageContainer = document.getElementById('image-container');
const fullscreenImage = document.getElementById('fullscreen-image');

let offsetX = 0;
let offsetY = 0;

// Zoomed boolean to dicate image styles
let zoomed = false;

// Get the window dimensions
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const imageWidth = fullscreenImage.width;
const imageHeight = fullscreenImage.height;

//Open fullscreen on any image click
const thumbnailImages = document.querySelectorAll('.thumbnail-image')
thumbnailImages.forEach(image => {
    image.addEventListener('click', function() {
        openFullScreen(this.src); //Pass the clicked image's src
    });
});

//Update image position function
function updateImagePosition(offsetX, offsetY)
{
    // Apply the new offset to move the image
    fullscreenImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Open image in fullscreen
function openFullScreen(imagePath)
{
    fullscreenImage.src=imagePath;
    imageContainer.style.visibility = 'visible'; // Display fullscreen container
    document.body.style.overflow = 'hidden'; //Prevent scrolling on document body
}

function closeFullScreen()
{
    updateImagePosition(0, 0);

    if(zoomed)
        toggleZoom(fullscreenImage);

    imageContainer.style.visibility = 'hidden'; //Hide fullscreen container
    document.body.style.overflow = ''; //Re-enable body scrolling
    fullscreenImage.src = ''; //Clear source to prevent last image from showing on new click
}

function toggleZoom(image)
{
    zoomed = !zoomed; //Toggle boolean first

    if(zoomed)
    {
        image.id = 'fullscreen-image-zoomed'; //Styles for zoomed in
        imageContainer.style.overflow = 'auto';
    }

    else
    {
        updateImagePosition(0, 0);
        image.id = 'fullscreen-image'; //Styles for zoomed out
    }

    console.log(zoomed);
    console.log(image.id);
}

//Add arrow key navigation functionality
document.addEventListener('keydown', function(event)
{
    if (imageContainer.style.visibility === 'visible') {
        const step = 50; // Amount of pixels to move with each key press

        // Arrow keys: left, up, right, down
        if (event.key === 'ArrowLeft' || event.key === "a" || event.key === "A") {
            if (offsetX + step >= windowWidth - imageWidth)
            {
                console.log("offscreen left");
                return;
            }
            offsetX += step;
        } 
        
        else if (event.key === 'ArrowRight' || event.key === "d" || event.key === "D") {
            if (offsetX - step <= 0)
            {
                console.log("offscreen right")
                return;
            }
            offsetX -= step;
        } 
        
        else if (event.key === 'ArrowUp' || event.key === "w" || event.key === "W") {
            if(offsetY + step >= windowHeight - imageHeight) //Prevent moving offscreen
            {
                console.log("offscreen up")
                return;
            }

            offsetY += step;
        } 
        
        else if (event.key === 'ArrowDown' || event.key === "s" || event.key === "S") {
            if(offsetY - step <= 0)
            {
                console.log("offscreen down")
                return;
            }
            offsetY -= step;
        }

        updateImagePosition(offsetX, offsetY); //Update image
    }
});

//Close fullscreen when ESC is presssed
document.addEventListener('keydown', function(event) 
{
    if (event.key === 'Escape') {
        closeFullScreen();
    }
});