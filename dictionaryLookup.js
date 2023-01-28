// Look up the key in the passed in dictionary
function dictionaryLookup(key, dict) {
    // Inputs: A string representing the key
    //         A dictionary that can be looked up
    // Outputs: On success, the corresponding value in the dictionary
    //          On failure, the boolean value false
    // The function will fail if the input key is not within the dictionary
    // You may assume that key is always a string
    // You may assume that dict is always a JSON object (dictionary)
    let value = "Not$Found1234";
    value = dict[key];
    if(value == undefined)
    {
        return false;}
    else 
    {
        return value;}
}

module.exports = dictionaryLookup;
