function createCustomerRecord()
{
   var record = nlapiCreateRecord('customer');
   record.setFieldValue( 'companyname', 'NetSuite-Ak');
   record.setFieldValue( 'email', 'akash@test.com');
   record.setFieldValue( 'subsidiary', 3);
   record.setFieldValue('phone', "8709936236")
   record.setFieldValue('comments',"created customer through script file")
   id = nlapiSubmitRecord(record, true);
} 
