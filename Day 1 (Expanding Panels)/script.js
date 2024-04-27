const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => { //this adds an on click event to the panels
        removeActiveClasses() //this calls our function removeActiveClasses
        panel.classList.add('active') //this addes the active tag to the panels
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active') //this removes the active class from the panels
    })
}