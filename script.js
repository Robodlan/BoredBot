const stars = ['☆', '✩','✡','✯']
const main = document.getElementById('main')
const btn = document.getElementById('btn')
const title = document.getElementById('title')
const placeholder = document.getElementById('placeholder')
const url = "https://www.boredapi.com/api/activity"


btn.addEventListener('click',()=> {
    fetch(url)
     .then(res => res.json())
     .then(data => {
        placeholder.innerHTML = data.activity;
        title.textContent = "🔥 Don't be Bored 🔥"
        document.body.classList.add('royal')
    })
})


