
const searchButton = document.getElementById('searchButton');

function fetchMeaning() {

    let searchInputText = document.getElementById('searchInputText');
    let word = searchInputText.value;
    let DataBlocks = document.getElementById('dataBlocks');
    DataBlocks.innerHTML="";

    const data = null;

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;



    xhr.open("GET", `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word.toLowerCase()}`, true);
    xhr.setRequestHeader("x-rapidapi-key", "8ac6314c26msh67727418e81ba30p188ed8jsn71ed7d9ec50c");
    xhr.setRequestHeader("x-rapidapi-host", "mashape-community-urban-dictionary.p.rapidapi.com");

    xhr.onload = function () {
        if (this.status === 200) {
            var meaningObj = JSON.parse(this.responseText);
            let allMeanings = meaningObj.list;
            
            allMeanings.forEach(function(meaning, i){
                let string = meaning.definition;
            console.log(string);
            let example = meaning.example;
            console.log(example);
            string = string.replace(/[^-a-zA-Z.=()0-9'"\r\n|\n|\r? ]/g, "");
            string = string.split("\r\n");
            
            example = example.replace(/[^-a-zA-Z.=()0-9'"\r\n|\n|\r? ]/g, "");
            example = example.split("\r\n");
            let str="";
            let exp = "";
            string.forEach(function(ele){
                str+=`<p id="def">${ele}</p>`
            })
            example.forEach(function(ele){
                exp+=`<p id="def">${ele}</p>`
            })
            DataBlocks.innerHTML += `
                        <div class="data">
                        <p id="word">${i+1} -<span><i class="far fa-thumbs-up">${meaning.thumbs_up}</i><i class="far fa-thumbs-down">${meaning.thumbs_down}</i></span></p>
                        ${str}
                        <p id="ex-head">Example</p>
                        ${exp}
          </div>
            `
            console.log(string);
            })
            

        } else {
            console.log("Some Error Occured");
        }
    }

    xhr.send(data);
}

