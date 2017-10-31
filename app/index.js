import component from './component';
import 'font-awesome/scss/font-awesome.scss';
import './app.scss';

// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import './scripts/home.js';

document.body.appendChild(component().element);

let finalVal = 2*component().mathVal;


console.log('****************');
console.log(component().mathVal);
console.log(finalVal);