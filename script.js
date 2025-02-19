
let calculation = localStorage.getItem('calculation') || '';
answer();

console.log(localStorage.getItem('calculation'));

      function updateCalculation(value) {
        calculation += String(value);
        console.log(calculation);
   
        localStorage.setItem('calculation',calculation);
        answer();
      };
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
        answer();
      };
      function answer(){
        document.querySelector('.js-ans')
         .innerHTML = `Answer: ${calculation}`;
      };