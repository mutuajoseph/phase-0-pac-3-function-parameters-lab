function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language) {

    if (language || !language) {
        language = "JavaScript"
    }

    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}