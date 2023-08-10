<script>
  let word = ""; // Your 5-letter word
  let numRows = 6;    // Number of rows
  let placeholder = "";
  let currentRow = 0;
  let correctWord = "CRANE";
  let rowTexts = Array.from({ length: numRows }, () => "");
  let isCorrect = false;
  let correctRow = [];

  let rowLetterColors = Array.from({ length: numRows }, () => Array.from({ length: 5 }, () => ''));

  let isFlipped = false;

  function flipLetters() {
    isFlipped = true;

    // Delay the reset to flip back
    setTimeout(() => {
      isFlipped = false;
    }, 1000); // Adjust this delay as needed
  }

  function compareWords() {
    const trimmedWord1 = word.trim().toUpperCase();
    const trimmedWord2 = correctWord.trim().toUpperCase();

    // Reset letter colors for the current row
    rowLetterColors[currentRow] = Array.from({ length: 5 }, () => '#787c7e');

    for (let i = 0; i < trimmedWord1.length; i++) {
      if (trimmedWord1[i] === trimmedWord2[i]) {
        rowLetterColors[currentRow][i] = '#6AAA64';
      } else if (trimmedWord2.includes(trimmedWord1[i])) {
        rowLetterColors[currentRow][i] = '#C9B458';
      }
    }

    isCorrect = true; // Assume it's correct initially

    for (let i = 0; i < trimmedWord1.length; i++) {
      if (trimmedWord1[i] !== trimmedWord2[i]) {
        isCorrect = false;
        break; // Exit the loop if any character doesn't match
      }
    }

    if (isCorrect) {
      correctRow.push(currentRow);
    }
  }

  window.addEventListener('keydown', event => {
    if (event.key.length === 1 && /^[a-æøåA-ÆØÅ]+$/.test(event.key) && word.length < 5) {
      word += event.key;
      rowTexts[currentRow] = word;
    } else if (event.key === "Backspace") {
      word = word.slice(0, -1);
      rowTexts[currentRow] = word;
    } else if (event.key === "Enter" && word.length === 5) {
      flipLetters();
      compareWords();
      currentRow = (currentRow + 1) % numRows;
      word = rowTexts[currentRow] || "";
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
            class="box {rowTexts[rowIndex] && boxIndex < rowTexts[rowIndex].length ? 'filled' : ''} {isFlipped && rowTexts[rowIndex] && boxIndex < rowTexts[rowIndex].length ? 'flipping' : ''}" 
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
</div>