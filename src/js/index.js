import carousel from '../components/carousel';

fetchCourses()

var AllCourses

function fetchCourses() {
  fetch('http://localhost:4401/courses')
.then(response => response.json())
.then((data) => {
  AllCourses = data
  renderCourses()
});
}

function renderCourses() {
    AllCourses.map((elem) => { 
      let carouselList = document.getElementById("carousel-scroll");
      let htmlInsert = `
      <carousel-component
        title="${elem.title}"
        time="${elem.time}"   
      />`

      carouselList.insertAdjacentHTML('beforeend', htmlInsert);  
    })
}