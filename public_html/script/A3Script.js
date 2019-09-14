function displayOrder(){
    
    var namefirst = "Customers first name is: " + frmFirst.firstName.value; 
    var namelast = "Customers last name is: " + frmFirst.lastName.value; 
    var cxemail = "Customers email is: " + frmFirst.email.value; 
    
    var prods = "Products ordered: "; 
    for(var sub = 0; sub < frmFirst.product.length; sub++){
        if(frmFirst.product[sub].checked)
            prods+= frmFirst.product[sub].value + " "; 
    }
    
    var paymethod = "Payment method is: " + frmFirst.pay.value;
    
    var shipmethod = "Shipment method is: " + frmFirst.shipmentm.value; 
    
    frmFirst.txtOrder.value = namefirst + "\n" + namelast + "\n" + cxemail 
    + "\n" + prods + "\n" + paymethod + "\n" + shipmethod
   
}