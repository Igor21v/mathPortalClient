export default (array, element) => {
    let indexForDelete
    array.find((value, index) => {
        if (value == element) {
            indexForDelete = index
        }
    })
    array.splice(indexForDelete, 1)
    return array
}