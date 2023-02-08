const Handlebars = require("handlebars");
  const products=[
    {
      "baseId": "1",
      "feature": {
        "1": "parent",
        "2": "first entry"
      },
      "contentType": {
        "1": {
          "value": "pure"
        },
        "2": {
          "value": "mix"
        }
      },
      "isActive": true,
      "childProducts": [
        {
          "baseId": "1-1",
          "isActive": true
        },
        {
          "baseId": "1-2",
          "isActive": false
        },
        {
          "baseId": "1-3",
          "isActive": true
        },
        {
          "baseId": "1-4",
          "isActive": true,
          "feature": {
            "1": "parent",
            "2": "first entry"
          },
          "searchTerms": {
            "0": "glue",
            "1": "adhesive",
            "2": "stick"
          }
        }
      ]
    }
    ,

   
    {
      "baseId": "10",
      "isActive": true,
      "searchTerms": {
        "0": "glue",
        "1": "adhesive",
        "2": "stick"
      },
      "childProducts": [
        {
          "baseId": "10-1",
          "isActive": true,
          "searchTerms": {
            "0": "glue"
          }
        },
        {
          "baseId": "10-2",
          "isActive": false
        },
        {
          "baseId": "10-3",
          "isActive": true
        },
        {
          "baseId": "10-4",
          "isActive": true
        }
      ]
    }
  ]

let productTemplate=`baseId: {{baseId}} 
 feature: {{feature}}  
 contentType: {{contentType}} 
 isActive: {{isActive}} 
 childProducts: {{childProducts}}`



const template=Handlebars.compile(productTemplate)

console.log(template({ 
  baseId: products[0].baseId,
  feature: products[0].feature,
  contentType: products[0].contentType,
  isActive: products[0].isActive,
  childProducts: products[0].childProducts
}))

