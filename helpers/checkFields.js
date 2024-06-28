export default function (fields, number){
    const values = Object.values(fields)
    return values.length === number
}