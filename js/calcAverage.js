const template = document.querySelector('.gradeTemplate');
const gradesFlex = document.querySelector('.grades')
const grades = [];
const gradeElements = [];

function addGrade(gradeEl){
  const clone = template.content.cloneNode(true);
  
  const what = clone.querySelector('.what');
  const on = clone.querySelector('.on');
  const id = Math.round(Math.random() * 2000);

  what.classList.add(`what-${id}`)
  on.classList.add(`on-${id}`)

  gradeElements.push(id)

  gradesFlex.append(clone)
}

function calculateTheAverage(){
  let allAverages = []
  
  gradeElements.forEach(id =>{
    const what = document.querySelector(`.what-${id}`)
    const on = document.querySelector(`.on-${id}`)
    let fakeWhat = what.value;

    if(+on.value != bringOnWhat)  fakeWhat = Average.getOnX(`${what.value}/${on.value}`, whatToBringOn)

    allAverages.push(fakeWhat)
  })
  
  const avg = Math.round(Average.average(allAverages));
  toggle('grades')
  toggle('calculateButton')
  toggle('finalAvg')
  toggle('newGrade')
  toggle('averageIs')
  toggle('calcAgain')
  document.querySelector('.finalAvg').textContent = `${avg}/${whatToBringOn}`

}

function calcAgain(){
  toggle('grades')
  toggle('calculateButton')
  toggle('finalAvg')
  toggle('newGrade')
  toggle('averageIs')
  toggle('calcAgain')
  toggle('calc')
  toggle('calc')
}

let whatToBringOn = 20;

const bringOnWhat = document.querySelector('.bringNoteOnWhat');
bringOnWhat.addEventListener('input', ()=>{
  whatToBringOn = +bringOnWhat.value.replace('/', '')
})