function wordSearch () {
    var cons = ""
    var lib = ""

    if (
      (
        document.documentElement.textContent || document.documentElement.innerText  
      ) .indexOf("freedom") > -1 
    ) {
        cons++;
    }
    if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("socialism") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("socialist") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("socialists") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("marxism") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("marxist") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("marxists") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("china") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("nation") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("God") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("Hunter Biden") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("Hillary") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("benghazi") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("antifa") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("blm") > -1 
    ) {
        cons++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("fascism") > -1 
    ) {
        lib++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("fascist") > -1 
    ) {
        lib++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("fascists") > -1 
    ) {
        lib++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("racism") > -1 
    ) {
        lib++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("racist") > -1 
    ) {
        lib++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("racists") > -1 
    ) {
        lib++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("lgbtq") > -1 
    ) {
        lib++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("ableism") > -1 
    ) {
        lib++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("Jan 6th") > -1 
    ) {
        lib++;
    }
        if (
      (
       document.documentElement.textContent || document.documentElement.innerText
      ).indexOf("insurrection") > -1 
    ) {
        lib++;
    }

    if (cons >= lib + 6) {
       return "Heavily Conservative";
    } else if (cons >= lib + 3) {
        return "Conservative";
    } else if (cons >= lib + 1) {
        return "Slightly Conservative";
    } else if (cons == lib) {
        return "Moderate";
    } else if (lib >= cons + 6) {
        return "Heavily Liberal";
    } else if (lib >= cons + 3) {
        return "Liberal";
    } else if (lib >= cons + 1) {
        return "Slightly Liberal";
    }
}

wordSearch();