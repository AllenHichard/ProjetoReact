module.exports = function parseStrAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());

}