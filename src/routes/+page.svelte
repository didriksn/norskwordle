<script>
  import { words } from './Wordlist.svelte'; // vscode runner tregt når man har en lang linje med kode åpen;
  
  
  
  /* MÅ GJØRES (PIL NED) */
  /* INDEXED DB TIL Å VELGE NYTT ORD HVER DAG FRA EN LISTE MED VALGTE ORD */
  /* HA NOE SOM KOMMER OPP NÅR MAN VINNER ELLER TAPER */
  /* HA NOE SOM KOMMER OPP OM ORDET MAN GJETTER IKKE ER I ORDLISTEN */
  /* RYDDE OPP I KODEN (OM DU LESER DETTE SÅ VET JEG AT KODEN KAN OPTIMALISERES MEN JEG HAR IKKE GIDDET Å GJØRE DET ENDA) */




  const set = new Set(words);
  let word = ""; 
  let numRows = 6; 
  let placeholder = "";
  let currentRow = 0;
  let correctWord = "VINNE";
  let rowTexts = Array.from({ length: numRows }, () => "");
  let isCorrect = false;
  let correctRow = [];
  const delay = 5000;
  const offsetDelay = delay - 2000;

  let rowLetterColors = Array.from({ length: numRows }, () => Array.from({ length: 5 }, () => ''));

  let isFlipped = false;

  function flipLetters() {
    isFlipped = true;

    setTimeout(() => {
      isFlipped = false;
    }, offsetDelay); 
  }





function createCharCountObject(inputString) {
  const charCount = {};
  const trimmed = inputString.trim();

  for (const char of trimmed) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

const charCountObject = createCharCountObject(correctWord);

console.log(charCountObject);




  let animDelay = false;

  function compareWords() {
    animDelay = true;

    setTimeout(() => {
      animDelay = false;
    }, offsetDelay)

    const trimmedWord1 = word.trim().toUpperCase();
    const trimmedWord2 = correctWord.trim().toUpperCase();


    rowLetterColors[currentRow] = Array.from({ length: 5 }, () => '#787c7e');

    let lettersFound = [];
    for (let i = 0; i < trimmedWord1.length; i++) {
      let count = charCountObject[trimmedWord1[i]] || 0;

      console.log(count)

      if (count == 1 && !lettersFound.includes(trimmedWord1[i]) && trimmedWord1[i] === trimmedWord2[i]) {
        lettersFound.push(trimmedWord1[i]);
      }
    }
    console.log(lettersFound)
    for (let i = 0; i < trimmedWord1.length; i++) {

      if (trimmedWord1[i] === trimmedWord2[i]) {
        rowLetterColors[currentRow][i] = '#6AAA64';

      } else if (trimmedWord2.includes(trimmedWord1[i]) && !lettersFound.includes(trimmedWord1[i])) {
        rowLetterColors[currentRow][i] = '#C9B458';
      } 
    }
    

    isCorrect = true; 

    for (let i = 0; i < trimmedWord1.length; i++) {
      if (trimmedWord1[i] !== trimmedWord2[i]) {
        isCorrect = false;
        break; 
      }
    }

    if (isCorrect) {
      correctRow.push(currentRow);
    }
  }


  let keyboardBlocked = false;

  window.addEventListener('keydown', event => {
    if (keyboardBlocked) {
      return;
    }

    if (event.key.length === 1 && /^[a-æøåA-ÆØÅ]+$/.test(event.key) && word.length < 5) {
      word += event.key.toUpperCase();
      rowTexts[currentRow] = word;
    } else if (event.key === "Backspace") {
      word = word.slice(0, -1);
      rowTexts[currentRow] = word;
    } else if (event.key === "Enter" && word.length === 5 && set.has(word)) {
      flipLetters();
      compareWords();
      keyboardBlocked = true;
      setTimeout(() => {
        keyboardBlocked = false;
        currentRow += 1;
        // currentRow > 6 ?
        word = rowTexts[currentRow] || "";
      }, offsetDelay); 
    }
  });
</script>

<div class="header">
  <h1 class="title">NORSK WORDLE</h1>
</div>

<!-- <div class="center">
  <div class="grid">
    {#each Array.from({ length: numRows }) as _, rowIndex}
      <div class="row">
        {#each Array.from({ length: 5 }) as _, boxIndex}
        <div
  class:correct={isCorrect && correctRow.includes(rowIndex)}
  class="box {rowTexts[rowIndex] && boxIndex < rowTexts[rowIndex].length ? 'filled' : ''}"
  style="background-color: {rowLetterColors[rowIndex][boxIndex]}; border-color: {rowTexts[rowIndex] && boxIndex < rowTexts[rowIndex].length ? rowLetterColors[rowIndex][boxIndex] : '#d3d6da'}; color: {rowLetterColors[rowIndex][boxIndex] !== '' ? 'white' : 'black'};"
>
  {#if rowTexts[rowIndex] && boxIndex < rowTexts[rowIndex].length}
    {rowTexts[rowIndex][boxIndex].toUpperCase()}
  {:else}
    {placeholder}
  {/if}
</div>
        {/each}
      </div>
    {/each}
  </div>
</div> -->

<div class="center">
  <div class="grid">
    {#each Array.from({ length: numRows }) as _, rowIndex}
      <div class="row">
        {#each Array.from({ length: 5 }) as _, boxIndex}
          <div
            class:correct={isCorrect && correctRow.includes(rowIndex)}
            class="box {rowTexts[rowIndex] && boxIndex < rowTexts[rowIndex].length ? 'filled' : ''} {isFlipped && rowTexts[rowIndex] && rowIndex == currentRow && boxIndex < rowTexts[rowIndex].length ? 'flipping' : ''}" 
            style="transition-delay: {animDelay ? (boxIndex * (delay / 10) + delay / 10) : 0}ms; transition-property: background-color, border, color; background-color: {rowLetterColors[rowIndex][boxIndex]}; border-color: {rowTexts[rowIndex] && boxIndex < rowTexts[rowIndex].length ? rowLetterColors[rowIndex][boxIndex] : '#d3d6da'}; color: {rowLetterColors[rowIndex][boxIndex] !== '' ? 'white' : 'black'}; animation-delay: {boxIndex * (delay / 10)}ms;"
          >
            {#if rowTexts[rowIndex] && boxIndex < rowTexts[rowIndex].length}
              {rowTexts[rowIndex][boxIndex].toUpperCase()}
            {:else}
              {placeholder}
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div> 
