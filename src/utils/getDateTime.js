export default (string) => {
    const dateTime = new Date(string)
    const date = String(dateTime.getFullYear()) + '-' + String(dateTime.getMonth()) + '-' + String(dateTime.getDate())
    const time = String(dateTime.getHours()) + ':' + String(dateTime.getMinutes())
    return (date + ' ' + time)
}