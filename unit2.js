document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select")
    let form = document.querySelector("form")
    let ul = document.querySelector("ul")

    const getMovies = async () => {
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films")
            let films = res.data;
            // debugger
            films.forEach(film => {
                let option = document.createElement("option")
                let selected = document.querySelector("select")
                option.innerText = film.title;
                option.value = film.url
                // option.value = film.description;
                select.appendChild(option)
                selected.appendChild(option)
                // debugger
            })

        } catch (err) {
            console.log("error")

        }
    }

    const getDescription = async(url)=>{
   try{
       let response = await axios.get(url)
       let title = response.data.title
       let date = response.data.release_date
       let description = response.data.description
       let section = document.querySelector("#form")
       let filmName = document.createElement('h3')
       let p = document.createElement("p")
       let year = document.createElement('h4')
       section.innerHTML = ""
       section.appendChild(filmName)
       filmName.innerText = title
       year.innerText = date
       section.appendChild(year)
       p.innerText = description
       section.appendChild(p)

   }catch(err){
       console.log("error")
   }

      


    }
    select.addEventListener("change", (event) => {
        getDescription(event.target.value)
      
    })
    getMovies()
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let li = document.createElement("li")
        let input = document.querySelector("input")
        li.innerText = `User Review: ${input.value}`
        ul.appendChild(li)
        event.input.value = ""

    })
})
