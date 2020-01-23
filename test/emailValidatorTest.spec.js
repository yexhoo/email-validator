var expect = require("chai").expect;
var emailsUnicos = require("../src/emailValidator").emailsUnicos

describe('EmailValidatorTest', ()=>{

    it('1. Input parameter is not a list', ()=>{
        expect(emailsUnicos().length).to.equal(0);
    });

    it('2. Input parameter is not a list', ()=>{
        expect(emailsUnicos(123).length).to.equal(0);
    });

    it('3. Input parameter is an empty list', ()=>{
        expect(emailsUnicos([]).length).to.equal(0);
    });

    it('4. Input parameter can not contains valid emails', ()=>{
        const emails = [null,"", " ", "@", " @ ","aa.11.bbbb+", "aa.bb+cc@"];
        expect(emailsUnicos(emails).length).to.equal(0)
    });

    it('5. Removing duplicates', ()=>{
        
        const emails = [
            "josue.nolasco@gmail.com",
            "JOSUE.nolasco@gmail.com",
            "jOsue.NolAscO@GMAIL.com"];

        expect(emailsUnicos(emails).length).to.equal(1)
    });

    it('6. Removing dots', ()=>{
        
        const emails = [
            "pe.dro@kavak.com",
            "josue.nolasco.miranda@kavak.com",
            "a.b.c@ka.vak.com"];
        
        expect(emailsUnicos(emails).length).to.equal(3)
        expect(emailsUnicos(emails)[0]).to.equal("pedro@kavak.com")
        expect(emailsUnicos(emails)[1]).to.equal("josuenolascomiranda@kavak.com")
        expect(emailsUnicos(emails)[2]).to.equal("abc@ka.vak.com")
    });

    it('7. Removing chars after plus', ()=>{
        
        const emails = [
            "pedro+perez@kavak.com",
            "p+edro.perez@kavak.com",
            "+pedro.perez@kavak.com"];
        
        expect(emailsUnicos(emails).length).to.equal(2)
        expect(emailsUnicos(emails)[0]).to.equal("pedro@kavak.com")
        expect(emailsUnicos(emails)[1]).to.equal("p@kavak.com")
    });

});