main()

var AllCourses

function renderCourses() {
    console.log(AllCourses)
}

function fetchCourses() {
    fetch('http://localhost:4401/courses')
  .then(response => response.json())
  .then((data) => {
    AllCourses = data
    renderCourses(AllCourses)
  });
}

function main() {
    fetchCourses()
}