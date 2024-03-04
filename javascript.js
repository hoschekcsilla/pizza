let currentIndex = 0;
const foodImages = [
  'food1.jpg',
  'food2.jpg',
  'food3.jpg',
  'food4.jpg',
  'food5.jpg',
  'food6.jpg'
];

function changePlateImage() {
  currentIndex = (currentIndex + 1) % foodImages.length;
  const plateImage = document.getElementById('plateImage');
  plateImage.src = foodImages[currentIndex];
}

setInterval(changePlateImage, 4000);

// Kezdéskor beállítjuk az első képet
changePlateImage();

let kosarka=document.querySelector('#kosar')
let kosarkam=document.querySelector('.kosarr')
let zaroKosarka=document.querySelector('#zaro')

kosarka.onclick= () =>{
  kosarkam.classList.add("active");
};

zaroKosarka.onclick= () =>{
  kosarkam.classList.remove("active");
};

