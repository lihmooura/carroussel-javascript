import carousel from '../components/carousel';

// Função principal
Main()

var AllCourses 

// Função responsável por carregar informações da API
function fetchCourses() {
  fetch('http://localhost:4401/courses')
.then(response => response.json())
.then((data) => {
  AllCourses = data
  renderCourses()
});
}

// Função responsável por mapear o resultado dos cursos da API
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


// Funcoes sendo chamadas 
function Main() { 
   fetchCourses()
}