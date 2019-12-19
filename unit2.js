document.addEventListener("DOMContentLoaded",()=>{
    let select = document.querySelector("select")
    let form = document.querySelector("form")
    let ul = document.querySelector("ul")
    const getMovies =async()=>{
        try{
            let res = await axios.get("https://ghibliapi.herokuapp.com/films")
            let films = res.data;
            // debugger
            films.forEach(film=>{
                let option = document.createElement("option")
                option.innerText = film.title;
                option.value = film.title
                option.value = film.description;
                select.appendChild(option)
            })

        }catch(err){
            console.log("error")

        }
    }

    const getDescription = async(url)=>{
        console.log(url)
        let section = document.querySelector("select")
        if(section){
            section.parentNode.removeChild(section)
        }
        let p = document.createElement("p")
        p.innerText = url
        document.body.appendChild(p)
    }
    select.addEventListener("change", (event)=>{
        getDescription(event.target.value)
        // getTitle(event.target.value)
    })
    getMovies()
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        let li = document.createElement("li")
        let input = document.querySelector("input")
        li.innerText = `User Review: ${input.value}`
        ul.appendChild(li)
        input.value = ""
        GamepadButton.addEventListener("click", ()=>{
            ul.removeChild(li)
        })
    })
})