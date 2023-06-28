// array of numbers from 1 to 100 (shuffled)
const sampleArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,1, 2, 3, 4, 5, 6, 7, 8, 9,10, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 76, 77, 78, 79, 80, 81, 82, 83, 84,55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 100]

const sampleSet = new Set(sampleArray); // creating a set using sampleArray


for(let i=1; i<=100; i++){
    if(sampleSet.has(i) === false){ // checking whether i is present in the sampleSet 
        console.log(i) // output: 99 (99 is missing from 1 to 100)
        break // stopping the loop using break statement
    }
}