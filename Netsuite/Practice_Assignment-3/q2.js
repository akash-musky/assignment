function loadCustomerRecord(){
    var record=nlapiLoadRecord('customer',132757)
    record.setFieldValue( 'companyname', 'Test-Ak');
    record.setFieldValue('email','akash.kumar@celigo.com')
    id = nlapiSubmitRecord(record, true);
}
