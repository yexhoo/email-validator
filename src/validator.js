var formatter = require('./formatter')
var rule = require('./rule')

exports.emailsUnicos = (emails) => {

    let emailsUnicos = []

    if(Array.isArray(emails) && emails.length) {
        
        const preparedEmails = emails
            .filter(email=> rule.isValid(email))
            .map(email => {return email.toLowerCase()})

        emailsUnicos = formatter.removeDuplicates(preparedEmails)
            .map(e => {return formatter.execute(e, formatter.dot)} )
            .map(e => {return formatter.execute(e, formatter.plus)} )
            .filter(email=> rule.isValid(email));    
    }

    return emailsUnicos;
}