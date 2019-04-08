module.exports = function(array, findMapper){
    var result,
        index = 0;

    while(!result && index < array.length){
        result = findMapper(array[index], index, array);
        index++;
    }

    return result || undefined;
};