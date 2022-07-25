const superagent = require('superagent').agent();

const foxtrotLogin = async()=> {
    let dashboard = await superagent
    .post('https://staging.api.foxtrotchicago.com/v5/login')
    .send({ email: "aturchyn@foxtrotco.com", password: "1234567" }) // sends a JSON post body
    .set('Contetnt-Type', 'application/json')
    console.log(dashboard.text)
    //dashboard gets the whole json body
    //dashboard.text gets only html
}

foxtrotLogin()