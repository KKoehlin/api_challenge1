baseUrl = "https://ghibliapi.herokuapp.com"

const charactersNamesEl = document.getElementById("characterNames")
function displayCharacters(name, age) {
   list = document.createElement("li")
   list.innerText = name + ', ' + age
   charactersNamesEl.appendChild(list)
}


const getAndDisplayCharacters = () => {
   const url = "https://ghibliapi.herokuapp.com/people"
   fetch(url)
      .then(res => res.json())
      .then(json => {
         //console.log(json)
         for (let i = 0; i < json.length; i++) {
            // console.log(json[i].name) 
            //  console.log(json[i].gender) 
            if (json[i].gender == "Female") {
               //  console.log(json[i].name)
               //console.log(json[i].age)
               displayCharacters(json[i].name, json[i].age)
            }
         }
      })
}

let onClickButton = document.getElementById('testing-onclick')
onClickButton.onclick = getAndDisplayCharacters



