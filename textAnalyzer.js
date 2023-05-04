//console.log("Machine Starting");
uppercase.addEventListener("click", () => {
    console.log("Changing characters into Uppercase");
    inputText.value = inputText.value.toUpperCase()
})

lowercase.addEventListener("click", () => {
    console.log("Changing characters into Lowercase");
    inputText.value = inputText.value.toLowerCase()
})

extraSpace.addEventListener("click", () => {
    console.log("Removing Extra Spaces");
    inputText.value = inputText.value.replace(/\s+/g, ' ').trim();
})

//https://stackoverflow.com/questions/38698670/removing-blank-lines-from-textarea-with-jquery
extraLine.addEventListener("click", () => {
    console.log("Removing Extra Lines");
    inputText.value = inputText.value.replace(/^\s*$(?:\r\n?|\n)/gm, "");
})

charWordCount.addEventListener("click", () => {
    console.log("New character and word count");
    const characters = inputText.value.length;
    const words = inputText.value.trim().replace(/\s+/gi, ' ').split(" ").length;
    document.getElementById("characterCount").value = characters;
    document.getElementById("wordCount").value = words
})


clearAll.addEventListener("click", () => {
    console.log("Clearing Full Page");
    inputText.value = "";
    document.getElementById("characterCount").value = "";
    document.getElementById("wordCount").value = "";
})



inputText.addEventListener("input", () => {
    console.log("changed");
    const characters = inputText.value.length;
    const words = inputText.value.trim().replace(/\s+/gi, ' ').split(" ").length;
    document.getElementById("characterCount").value = characters;
    document.getElementById("wordCount").value = words
})