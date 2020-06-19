const selectAll = (s) => document.querySelectorAll(s);
let currentLanguage = 'english';
let flagImages = selectAll('.flag');
let englishElements = selectAll('.english');
let portugueseElements = selectAll('.portuguese');
flagImages = [...flagImages]
englishElements = [...englishElements]
portugueseElements = [...portugueseElements]
 
flagImages.map(flag => {
    flag.addEventListener('click', () => {
        if(currentLanguage == 'english') {
            englishElements.map(englishElement => {
                englishElement.classList.add('disabled');
            })
            portugueseElements.map(portugueseElement => {
                portugueseElement.classList.remove('disabled')
            })            
            currentLanguage = 'portuguese'
        } else if(currentLanguage == 'portuguese') {
            englishElements.map(englishElement => {
                englishElement.classList.remove('disabled');
            })
            portugueseElements.map(portugueseElement => {
                portugueseElement.classList.add('disabled')
            })            
            currentLanguage = 'english'            
        }
    })
})