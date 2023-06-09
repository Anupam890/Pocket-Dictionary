const input = document.getElementById("inp-word");
const btn = document.getElementById('inp-search');
const para = document.getElementById('word-meaning');
const result = document.getElementById('result');

// api used in the project 

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const input_result = () => {
    fetch(url + input.value)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            result.innerHTML = `<div class="word">
            <h3>${input.value}</h3>
            <button type="submit" style="float: right;"><i class="fa-solid fa-volume"></i></button>
        </div>
        <div class="detail">
            <p>${data[0].meanings[0].partOfSpeech}</p></p>
            <p>${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="word-example">${data[0].meanings[0].definitions[0].example}   </p>`;
        })


}

btn.addEventListener('click', input_result);