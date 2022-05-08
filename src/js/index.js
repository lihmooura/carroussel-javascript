import carousel from '../components/carousel'
main()

var AllCourses

function renderCourses() {
    console.log(AllCourses)
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

function fetchCourses() {
    fetch('http://localhost:4401/courses')
  .then(response => response.json())
  .then((data) => {
    AllCourses = data
    renderCourses(AllCourses)
  });
}

// $('.scrollto').click(function() {
//   $('#container').animate( { scrollLeft: '-=500' }, 1000, 'easeOutQuad' );
// });

function main() {
    fetchCourses()
}