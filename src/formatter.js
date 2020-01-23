
exports.execute = (email, formatFunction) => {
    const split = email.split('@');
    split[0] = formatFunction.call(this, split[0])
    return split.join("@")
}

exports.dot = (localName) => {
    return localName.replace(/\./g,'');
}

exports.plus = (localName) => {
    if( localName.indexOf('+') !== -1){
        return localName.substring(0, localName.indexOf('+'))
    }

    return localName
}

exports.removeDuplicates = (array) => {
    return array.filter((a, b) => array.indexOf(a) === b)
}