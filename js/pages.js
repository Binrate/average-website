function hideAllPages(ignore){
  document.querySelectorAll('.page').forEach(page => {
    if(page.classList.contains(ignore)) return;
    page.classList.toggle('hidden')
  })
}

function toggle(className) {
  document.querySelector(`.${className}`).classList.toggle('hidden')
}

