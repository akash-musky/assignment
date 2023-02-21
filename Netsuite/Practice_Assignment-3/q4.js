//It will return the id of the company.
function companyInternalId(company){
    var filters=new Array();
     filters[0]=new nlobjSearchFilter('companyname',null ,'is',company)
    
     //defining columns.
     var columns=new Array();
     columns[0]=new nlobjSearchColumn('companyname', null, null)
     columns[1]=new nlobjSearchColumn('internalid', null, null)
     //id is set to null.
     var searchResults=nlapiSearchRecord('customer',null, filters, columns);
     return searchResults[0].getId()
}

function createCustomerContact()
{
   //finding my company Id.
   var companyId=companyInternalId('Test-Ak')
   var record = nlapiCreateRecord('contact');
   record.setFieldValue('entityid','Akash123')
   record.setFieldValue( 'company', companyId);
   record.setFieldValue( 'email', 'akash.kumar@celigo.com');
   record.setFieldValue( 'subsidiary', 3);
   record.setFieldValue('mobilephone', "8709936236")
   id = nlapiSubmitRecord(record, true);
} 
