
// Exercises: Level 1

// 01 : Declare empty array
function declareEmptyArray() {
    let arr = [];

    return arr;
}

// 02 : Declare an array with more than 5 number of elements
function declareArrayWithElements() {
    let arr = [1, 2, 3, 4, 5];   
    return arr;
}


// 03  : Find the length of your array
function findArrayLength(arr) {
    return arr.length;
}

// 04 : Get the first item, the middle item and the last item of the array
function getFirstMiddleLast(arr) {
    let firstItem = arr[0];
    let middleItem = arr[Math.floor((arr.length - 1) / 2)];
    let lastItem = arr[arr.length - 1];
    return [firstItem, middleItem, lastItem];
}

// 05 : Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
function declareMixedDataTypesArray() {
    let mixedDatatTypes = [
        1,
        2,
        'three',
        true,
        { name: 'John' },
        [1, 2, 3]
    ];
    return mixedDatatTypes;
}

// 06 : Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
function declareITCompaniesArray() {
    let itCompanies = [
        'Facebook',
        'Google',
        'Microsoft',
        'Apple',
        'IBM',
        'Oracle', 
        'Amazon'
    ]
    return itCompanies;

}

// 07 : Print the array using console.log() 
function printITCompaniesArray() {
    let itCompanies = declareITCompaniesArray();
    console.log(itCompanies);
}


// 08 : Print the number of companies in the array
function printNumberOfITCompanies() {
    let itCompanies = declareITCompaniesArray();
    return itCompanies.length;
}


// 09 : Print the first company, middle and last company
function printFirstMiddleLastITCompanies() {
    let itCompanies = declareITCompaniesArray();
    return getFirstMiddleLast(itCompanies);
}


// 10 : Print out each company
function printEachITCompany() {
    let itCompanies = declareITCompaniesArray();
    itCompanies.forEach(company => console.log(company));
}

// 11 : Change each company name to uppercase one by one and print them out
function printEachITCompanyUppercase() {
    let itCompanies = declareITCompaniesArray();
    itCompanies.forEach(company =>  console.log(company.toUpperCase()));
}


// 12 : Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
function printITCompaniesAsSentence() {
    let itCompanies = declareITCompaniesArray();
    let lstCompany = itCompanies.pop();
    let sentence = itCompanies.join(', ') + ' and ' + lstCompany  + ' are big IT companies.';
    return sentence;
};


console.log(
   printITCompaniesAsSentence()
);