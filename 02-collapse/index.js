/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */


const collapsibleContent = document.querySelector('.collapsible__content');
const collapsibleButton = document.querySelector('.collapsible__button')
const collapsibleActionVisible = document.querySelector('.collapsible__action--visible')
const collapsibleActionHidden = document.querySelector('.collapsible__action--hidden')

collapsibleActionHidden.style.display = 'none'
collapsibleButton.style.cursor = 'pointer'


collapsibleButton.addEventListener('click', () => {

    if (collapsibleActionHidden.style.display === 'none') {
        collapsibleContent.style.display = 'none'
        collapsibleActionVisible.style.display = 'none'
        collapsibleActionHidden.style.display = 'block'
    } else {
        collapsibleContent.style.display = 'block'
        collapsibleActionVisible.style.display = 'block'
        collapsibleActionHidden.style.display = 'none'
    }

})


collapsibleContent.animate([
    {
        marginTop: '10px',
    },
    {
        marginTop: '450px',
    },

], {
    duration: 3000,
    iterations: Infinity,
    direction: "alternate",
})




