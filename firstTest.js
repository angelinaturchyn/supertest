const superagent = require('superagent').agent();

const foxtrotLogin = async()=> {
    let dashboard = await superagent
    .post('https://staging.api.foxtrotchicago.com/v5/login')
    .send({ email: "aturchyn@foxtrotco.com", password: "1234567" }) // sends a JSON post body
    .set('Contetnt-Type', 'application/json')
    console.log(dashboard.text)

    let userToken = dashboard.body.user.api_token
    console.log(userToken)
    //dashboard gets the whole json body
    //dashboard.text gets only html

    let rewards = await superagent
    .get('https://staging.api.foxtrotchicago.com/v5/rewards/107756/')
    .send(userToken)
    console.log(rewards)
    .then(res => {
        // res.body, res.headers, res.status
     })
     .catch(err => {
        // err.message, err.response
     });
    
}

foxtrotLogin()