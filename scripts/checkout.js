let qustionTags = document.querySelectorAll('.toggle_info a')

qustionTags.forEach(qustionTag =>{
    qustionTag.addEventListener('click', () =>{
       let contentId = qustionTag.getAttribute('data-name')
       document.querySelector(`#${contentId}`).classList.toggle('show')
    })
})