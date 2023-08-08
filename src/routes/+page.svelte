<script>
  let word = ""; // Your 5-letter word
  let numRows = 6;    // Number of rows
  let placeholder = "";
  let currentRow = 0;
  let rowTexts = Array.from({ length: numRows }, () => "");

  window.addEventListener('keydown', event => {
    if (event.key.length === 1 && /^[a-æøåA-ÆØÅ]+$/.test(event.key) && word.length < 5) {
      word += event.key;
      rowTexts[currentRow] = word;
    } else if (event.key === "Backspace") {
      word = word.slice(0, -1);
      rowTexts[currentRow] = word;
    } else if (event.key === "Enter") {
      currentRow = (currentRow + 1) % numRows;
      word = rowTexts[currentRow] || "";
    }
  });
</script>

<div class="header">
  <h1 class="title">NORSK WORDLE</h1>
</div>

<div class="center">
  <div class="grid">
    {#each Array.from({ length: numRows }) as _, rowIndex}
      <div class="row">
        {#each Array.from({ length: 5 }) as _, boxIndex}
          <div class="box">
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
