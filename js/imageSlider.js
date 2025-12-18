class ImageSlider
{
    constructor(containerID, imgID, imgArray)
    {
        this.container = document.getElementById(containerID); //Unique identifier?
        this.imgArray = imgArray; //Array to hold images to view
        this.currIndex = 0; //Set current index to 0

        //Create image element and append it to container
        this.imgElement = document.getElementById(imgID);
        // this.updateImage();
    }

    prevImage() // decrement index by 1, then update
    {
        this.currIndex = (this.currIndex === 0) ? this.imgArray.length - 1 : this.currIndex - 1;
        this.updateImage();
    } 

    nextImage() //increment index by 1, then update
    {
        this.currIndex = (this.currIndex === this.imgArray.length - 1) ? 0 : this.currIndex + 1;
        this.updateImage();
    }

    //Class methods
    updateImage() 
    {
        this.imgElement.src = this.imgArray[this.currIndex]; //Update source of image to fill container
    }
}

const goodMorningArr = [
    "img/Illustration/good-morning-neon.JPG", 
    "img/Illustration/good-morning-purple.JPG", 
    "img/Illustration/good-morning-red.JPG"
];

const catArr = [
    "img/3D/cat_front.jpg",
    "img/3D/cat_back.jpg",
    "img/3D/cat_side.jpg"
];

const shipArr = [
    "img/3D/ship_front.jpg",
    "img/3D/ship_side.jpg",
    "img/3D/ship_flat.jpg"
]

// const goodMorningSlider = new ImageSlider('goodMorningSlider', goodMorningArr, goodMorningImg);
// const catSlider = new ImageSlider('catSlider', catArr, catImg);
// const shipSlider = new ImageSlider('shipSlider', shipArr, shipImg);
