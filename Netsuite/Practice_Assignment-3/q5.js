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

function createSalesOrder()
{
   //finding my company Id.
   var companyId=companyInternalId('Test-Ak')
   var record = nlapiCreateRecord('salesorder');
   record.setFieldValue('entity',companyId)
   record.setFieldValue('email', 'akash.kumar@celigo.com');
   //now setting the line item value.
   //adding first item
   record.insertLineItem('item', 1);
   record.setLineItemValue('item', 'item', 1, 3336);
   record.setLineItemValue('item', 'quantity', 1, 13);
   record.setLineItemValue('item','currency',1,1);
   record.setLineItemValue('item','amount',1,1000);
  //adding second item
   record.insertLineItem('item', 2);
   record.setLineItemValue('item', 'item', 2, 3337);
   record.setLineItemValue('item', 'quantity', 2, 7);
   record.setLineItemValue('item','currency',2,1);
   record.setLineItemValue('item','amount',2,1500);
   id = nlapiSubmitRecord(record, true);
   alert(id);
}