exports.emailsUnicos = (emails) => {

    let emailsUnicos = []

    if(Array.isArray(emails) && emails.length) {
        
        const preparedEmails = emails
            .filter(email=> isValidEmail(email))
            .map(email => {return email.toLowerCase()})

        emailsUnicos = removeDuplicates(preparedEmails)
            .map(e => {return applyFormat(e, dotFormat)} )
            .map(e => {return applyFormat(e, plusFormat)} )
            .filter(email=> isValidEmail(email));    
    }

    return emailsUnicos;
}

const removeDuplicates = (array) => {
    return array.filter((a, b) => array.indexOf(a) === b)
};

const isValidEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && re.test(String(email).toLowerCase());
}

const applyFormat = (email, formatFunction) => {
    const split = email.split('@');
    split[0] = formatFunction.call(this, split[0])
    return split.join("@")
}

const dotFormat = (localName) => {
    return localName.replace(/\./g,'');
}

const plusFormat = (localName) => {

    if( localName.indexOf('+') !== -1){
        return localName.substring(0, localName.indexOf('+'))
    }

    return localName
}