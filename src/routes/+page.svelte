<script>
  import words from './Wordlist.svelte'; // vscode runner tregt når man har en lang linje med kode åpen;

  
  const betterWords = ["HADDE","ETTER","ELLER","DETTE","KUNNE","ANDRE","HENNE","DENNE","VILLE","IGJEN","MANGE","INGEN","UNDER","SIDEN","MÅTTE","STORE","ALDRI","BLITT","SAMME","GJØRE","DISSE","SISTE","RUNDT","FLERE","FORDI","ANNET","KOMME","NORGE","GAMLE","LANGT","ANNEN","FØRST","MENER","LENGE","BLANT","NORSK","GJORT","DERES","IKKJE","TIDEN","LITEN","HOLDT","BEDRE","MEGET","HVERT","GRUNN","LIVET","NESTE","EFTER","BEGGE","FINNE","FORAN","DAGEN","HODET","SAKEN","STORT","PLASS","KVELD","SYNES","BESTE","SATTE","KLART","HOLDE","DAGER","MULIG","SLIKE","VISER","HØRTE","MDASH","ALTSÅ","BORTE","KUNDE","SNART","SVÆRT","TENKE","FAREN","LILLE","SLUTT","LAGET","ALENE","JOHAN","HUSET","FØLTE","MINST","VEIEN","SEIER","KJENT","SLAGS","FRODE","STUND","LANGE","REKKE","VILDE","BURDE","VISST","SETTE","HJELP","LØPET","METER","MENTE","FØLGE","VISTE","ÅRENE","TENKT","SLIKT","MOREN","HELST","BRUKE","DØREN","BETYR","MÅTEN","LEGGE"];
  
  /* MÅ GJØRES (PIL NED)

  HA NOE SOM KOMMER OPP NÅR MAN VINNER ELLER TAPER 
  HA NOE SOM KOMMER OPP OM ORDET MAN GJETTER IKKE ER I ORDLISTEN 
  RYDDE OPP I KODEN (FIKSE HTML INLINE CSS TIL Å VÆRE CLASSES MED CONDITIONS ISTEDET)
  TASTATUR UNDER SPILLEBRETTET (FARGE PÅ BOKSTAVENE I TASTATURET)
  INSTRUKSJONER PÅ HVORDAN MAN SPILLER SPILLET (POPUP/SPØRSMÅLSTEGN I TOPPEN AV HJØRNET)
  KOMPATIBILITET FOR SÅNN BLINDE FOLK OG SÅNT (SÅNN DERE TTS GREIE SOM BLINDE FOLK HAR KOMPATIBILITET)
  NÅR MAN SKRIVER EN BOKSTAV SÅ POPPER BOKSTAVEN FRAM I SÅNN ET HALVT SEKUND (SJEKK VANLIG WORDLE NETTSIDEN)(POPPEEFFEKT SKAL IKKE SKJE NÅR MAN BACKSPACER BTW)
  STATISTIKKER??????
  
  */
  
  

  import random from "random"
  import seedrandom from "seedrandom"

  // let set = new Set(words);
  let word = ""; 
  let numRows = 6; 
  let placeholder = "";
  let currentRow = 0;
  // let correctWord = "VINNE";
 
  let currentDate = new Date();
  let cestDate = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000);
  let day = Math.ceil(cestDate.getTime() / (1000 * 60 * 60 * 24));
  console.log(day)
  random.use(seedrandom(day))
  const correctWordIdx = random.int(0, betterWords.length - 1);
  let correctWord = betterWords[correctWordIdx]

  let rowTexts = Array.from({ length: numRows }, () => "");
  let isCorrect = false;
  let correctRow = [];
  const delay = 5000; // animation-duration * 5
  const offsetDelay = delay - 2000;

  let rowLetterColors = Array.from({ length: numRows }, () => Array.from({ length: 5 }, () => ''));

  let isFlipped = false;

  function flipLetters() {
    isFlipped = true;

    setTimeout(() => {
      isFlipped = false;
    }, offsetDelay); 
  }




  let animDelay = false;

  function compareWords() {
    animDelay = true;

    setTimeout(() => {
      animDelay = false;
    }, offsetDelay)

    const trimmedWord1 = word.trim().toUpperCase();
    const trimmedWord2 = correctWord.trim().toUpperCase();


    rowLetterColors[currentRow] = Array.from({ length: 5 }, () => '#787c7e');

    let grin = [];
    let yello = [];

    const count = {};
    
    for (let i = 0; i < trimmedWord1.length; i++) {
     count[trimmedWord2[i]] = (count[trimmedWord2[i]] || 0) + 1;
    }
    console.log(grin)


    for (let i = 0; i < trimmedWord1.length; i++) {
      if (trimmedWord1[i] === trimmedWord2[i]) {
        grin.push(trimmedWord1[i])
        rowLetterColors[currentRow][i] = '#6AAA64';
        count[trimmedWord1[i]]--;
      } 
    }
    

    for (let i = 0; i < trimmedWord1.length; i++) {
      if (trimmedWord1[i] !== trimmedWord2[i] && count[trimmedWord1[i]] > 0 && !grin.includes(trimmedWord1[i])) {
        yello.push(trimmedWord1[i]) 
        rowLetterColors[currentRow][i] = '#C9B458';
        count[trimmedWord1[i]]--; 
      } else if (trimmedWord1[i] !== trimmedWord2[i] && count[trimmedWord1[i]] > 0 && !yello.includes(trimmedWord1[i])) {
        yello.push(trimmedWord1[i]) 
        rowLetterColors[currentRow][i] = '#C9B458';
      }
    }


    isCorrect = trimmedWord1 === trimmedWord2;

    if (isCorrect) {
      correctRow.push(currentRow);
    }
  }


  let keyboardBlocked = false;

  window.addEventListener('keydown', event => {
    if (keyboardBlocked) {
      return;
    }

    if (isCorrect) {
      return;
    }

    if (event.key.length === 1 && /^[a-æøåA-ÆØÅ]+$/.test(event.key) && word.length < 5) {
      word += event.key.toUpperCase();
      rowTexts[currentRow] = word;
    } else if (event.key === "Backspace") {
      word = word.slice(0, -1);
      rowTexts[currentRow] = word;
    } else if (event.key === "Enter" && word.length === 5 && Array.from(words).includes(word)) {
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
  <h1 class="title">Norsk Wordle</h1>
</div>

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
