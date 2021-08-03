function wordSearch() {
    var cons = ""
    var lib = ""

    switch (words) {
        case "freedom":
        case "socialism":
        case "socialist":
        case "socialists":
        case "marxist":
        case "marxism":
        case "china":
        case "nation":
        case "God":
        case "Hunter Biden":
        case "Benghazi":
        case "antifa":
        case "Hillary":
        case "blm":
            cons++;
            break;
        case "fascist":
        case "fascists":
        case "fascism":
        case "lgbtq":
        case "racist":
        case "racists":
        case "racism":
        case "ableism":
        case "Jan 6th":
        case "insurrection":
            lib++;
            break;
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