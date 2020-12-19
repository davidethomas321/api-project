const baseURL = "https://picsum.photos/200/300?random=1";
let url;

const generatePic = document.querySelector(".generatePic");
const picture = document.getElementById('sketchpic')
const quote = document.getElementById('quote')

generatePic.addEventListener("click", fetchResults);

function fetchResults ()
{
    fetch(baseURL) 
    .then(function (result) {
      console.log(result);
      picture.src=result.url
    })

}

