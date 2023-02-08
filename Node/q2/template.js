module.exports={
    'template':`<products>{{#each products}}
    <product>
     <baseId>{{baseId}}</baseId>
     <isActive>{{isActive}}</isActive>
     <contentType>
     {{#each contentType}}
     <contentTypeValue>{{value}}</contentTypeValue>
     {{/each}}
     </contentType>
     <features>
       {{#each feature}}
       <feature>{{this}}</feature>
       {{/each}}
     </features>
     {{#if searchTerms}}
     <searchTerms>
     {{#each searchTerms}}
     <searchTermValue>{{this}}</searchTermValue>
     {{/each}}
   </searchTerms>
   {{/if}}
   <childProducts>
        {{#each childProducts}}
              <childProduct>
                  <baseId>{{baseId}}</baseId>
                  <isActive>{{isActive}}</isActive>
                  {{#if feature}}
                  <features>
                      {{#each feature}}
                      <feature>{{this}}</feature>
                      {{/each}}
                  </features>
                 {{/if}}
              {{#if searchTerms}}
                  <searchTerms>
                   {{#each searchTerms}}
                      <searchTermValue>{{this}}</searchTermValue>
                   {{/each}}
                  </searchTerms>
              {{/if}}
              </childProduct>
         {{/each}}
          </childProducts>
   </product>
    {{/each}}
    </products>`
}
