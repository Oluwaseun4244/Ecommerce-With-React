

const addCommas = (num) =>{
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// const removeNonNumeric = (num) => {
//     return num.toString().replace(/[^0-9]/g, "");
// }

// const format = (num) =>{
//     const first = removeNonNumeric(num)
//     const second = addCommas(first)
//     return second
// }

export default addCommas;