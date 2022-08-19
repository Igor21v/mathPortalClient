export default (string) => {
    let dateTime = new Date(string)
    dateTime = String(dateTime.getFullYear()) + '-' + String(dateTime.getMonth()) + '-' + String(dateTime.getDate()) + ' ' + String(dateTime.getHours()) + ':' + String(dateTime.getMinutes()) 
    /* dateTime = `${dateTime.getHours()} ${dateTime.getHours()}` */
    return dateTime
}