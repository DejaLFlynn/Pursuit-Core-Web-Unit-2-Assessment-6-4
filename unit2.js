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
                option.value = film.title
                option.value = film.description;
                select.appendChild(option)
                selected.appendChild(option)

            })

        } catch (err) {
            console.log("error")

        }
    }
    // const getTitle = async (url) => {
    //     try {
    //         let res = await axios.get(url)
    //         let titles = res.data;
    //         titles.forEach(title => {
    //             let section = document.querySelector("section")
    //             if (section) {
    //                 section.parentNode.removeChild(section)
    //             }
    //             section = document.createElement("section")
    //             let h1 = document.createElement("h1")
    //             h1.innerText = title.film
    //             let p = document.createElement("p")
    //             p.innerText = url
    //             document.body.appendChild(section)
    //             section.appendChild(h1)
    //             section.appendChild(p)

    //         })


    //     } catch (err) {
    //         console.log("err")
    //     }
    // }
    const getDescription = async(url)=>{
        console.log(url)

        let section = document.querySelector("select")

        if(section){
            section.parentNode.removeChild(section)
        }
        // let title = document.createElement("h3")
        // title.innerText = url.title
        let p = document.createElement("p")
        p.innerText = url
        document.body.appendChild(p)
        let title = document.createElement('h3')
        title.innerText = url.title;
        let year = document.createElement('p')
        year.innerText = url.release_date
    }
    select.addEventListener("change", (event) => {
        getDescription(event.target.value)
        getTitle(event.target.value)
    })
    getMovies()
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let li = document.createElement("li")
        let input = document.querySelector("input")
        li.innerText = `User Review: ${input.value}`
        ul.appendChild(li)
        input.value = ""
        button.addEventListener("click", () => {
            ul.removeChild(li)
        })
    })
})