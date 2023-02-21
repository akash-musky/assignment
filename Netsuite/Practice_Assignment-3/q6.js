function loadSalesOrder()
{
   var record = nlapiLoadRecord('salesorder',197006);
  //editing second item
   record.setLineItemValue('item', 'quantity', 2, 5);
   id = nlapiSubmitRecord(record, true);
   alert(id);
}