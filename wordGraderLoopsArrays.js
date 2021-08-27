function wordSearch () {
    var cons = "";
    var lib = "";

    const consWords = ["freedom", "socialism", "socialist", "socialists", "marxism", "marxist", "marxists", "China", "nation", "God", "Hunter Biden", "Hillary", "Benghazi", "antifa", "blm"];
    let consSpread;
    consSpread = [...consWords];
    const libWords = ["fascism", "fascist", "fascists", "racism", "racist", "racists", "lgbtq", "ableism", "ableist", "ableists", "insurrection", "January 6th", "Jan 6th", "Jan. 6th"];
    let libSpread;
    libSpread = [...libWords];

    if (
      (
        document.documentElement.textContent || document.documentElement.innerText  
      ) .indexOf(consSpread) > -1 
    ) {
        cons++;
    }
    if (
      (
        document.documentElement.textContent || document.documentElement.innerText  
      ) .indexOf(libSpread) > -1 
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

console.log(wordSearch());