const superagent = require('superagent').agent();

let userToken;
let userID;

const foxtrotLogin = async()=> {
    let response = await superagent
    .post('https://staging.api.foxtrotchicago.com/v5/login')
    .send({ email: "aturchyn@foxtrotco.com", password: "1234567" }) // sends a JSON post body
    .set('Contetnt-Type', 'application/json')
    console.log(response.text)

    userToken = response.body.user.api_token
    userID = response.body.user.id
    console.log(userToken)
    console.log(userID)
    //dashboard gets the whole json body
    //dashboard.text gets only html

    let perks = await superagent
    .get(`https://staging.api.foxtrotchicago.com/v5/rewards/${userID}/`)
    .set('Authorization', 'Bearer 58380|w9yMhLYtniLFYWIQJxyGIY0OKYGXKbAbOTVuJirX')
    console.log(perks.text)
    
    let rewardsBalance = perks.body.rewards.balance;
    console.log(rewardsBalance)
    
}

foxtrotLogin()