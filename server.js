const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.post("/Dialogflow", function(request, response){
var intentName = request.body.queryResult.intent.displayName;
var userQuery = request.body.queryResult.queryText;
  
if (intentName == "ModelosGuitarras"){

  var valor = 0;
  
  if (userQuery.toLowerCase()===("mayones qatsi")){
    response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 29.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones qatsi 7")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 32.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones qatsi 8")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 37.999.90"})
  }

  
  else if (userQuery.toLowerCase()===("mayones durvell ")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 39.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones durvell 7")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 42.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones durvell 8")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 47.999.90"})
  }
    
  
  else if (userQuery.toLowerCase()===("mayones regius")){
    response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 39.999.90"})
  }
   else if (userQuery.toLowerCase()===("mayones regius 7")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 42.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones regius 8")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 47.999.90"})
  }
  
  else if (userQuery.toLowerCase()===("mayones custom shop")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 59.999.90"})
  }

  
}  });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });