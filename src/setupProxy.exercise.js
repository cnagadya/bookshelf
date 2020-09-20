function proxy(app) {
    // add the redirect handler here
    app.get('/', (request, response)=>{
        response.redirect('/discover')
    })
  }
  
  module.exports = proxy
