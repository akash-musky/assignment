function searchCustomerRecord(){

  //defining filters.
   var filters=new Array();
   filters[0]=new nlobjSearchFilter('companyname',null ,'is','Test-Ak')
   //defining columns.
   var columns=new Array();
   columns[0]=new nlobjSearchColumn('companyname')
   columns[1]=new nlobjSearchColumn('internalid')
   //id is set to null.
   var searchResults=nlapiCreateSearch('customer',filters, columns);
   var searchId=searchResults.saveSearch('Script_Customer_Saved_Search_Akash','customsearch_saved_search_akash')
}