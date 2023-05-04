const form1 = document.getElementById('DictionaryForm');
const resultDiv = document.querySelector('.result');

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form1.elements[0].value);
});


const getWordInfo = async(word) => {
    try {

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        let definitions = data[0].meanings[0].definitions[0];

        resultDiv.innerHTML = `<h2><strong>Word: </strong>${data[0].word}</h2>
    <p class="pos"><strong>Parts of Speech: </strong>${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Definition: </strong>${definitions.definition === undefined ? "Not Found" : definitions.definition}</p>
    <p><strong>Example: </strong>${definitions.example === undefined ? "Not Found" : definitions.example}</p>
    <p><strong>Synonyms:</strong> ${data[0].meanings[0].synonyms.slice(0,3)}</p>
    <p><strong>Antonyms:</strong> ${data[0].meanings[0].antonyms.slice(0,3)}</p>
    `

        /*if (definitions.synonyms.length === 0) {
            resultDiv.innerHTML += `<span> Not Found </span>`;
        } else {
            for (let i = 0; i < definitions.synonyms.length; i++) {
                resultDiv.innerHTML += `<li>${definitions.synonyms.slice(0,3)}</li>`
            }
        }


        if (definitions.antonyms.length === 0) {
            resultDiv.innerHTML += `<span> Not Found </span>`;
        } else {
            for (let i = 0; i < definitions.antonyms.length; i++) {
                resultDiv.innerHTML += `<li>${definitions.antonyms.slice(0,3)}</li>`
            }
        }*/


        resultDiv.innerHTML += `<a href="${data[0].sourceUrls}" target="_blank">Know More...</a>`

        console.log(data);

    } catch (error) {
        resultDiv.innerHTML = `<p>Please Enter Correct Word...</p>`
    }

}