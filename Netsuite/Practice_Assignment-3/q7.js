function transformSalesOrder() {
    var invoice = nlapiTransformRecord("salesorder", 197006, "invoice");
    invoice.removeLineItem("item", 2);
    nlapiSubmitRecord(invoice);
}