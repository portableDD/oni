function payWithPaystack() {
let handler = PaystackPop.setup ({
    key:"pk_test_82ce23694563611af6015b7bdfc1dd4a1f044acf",
    email: "emmanueldorcas15@gmail.com",
    amount: 370000,
    metadata: {
        custom_fields:[
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value:document.querySelector('.phone').value,
            }
        ]
    },
    callback: function(response){
        let message = 'Payment complete! Reference: ' + response.reference;
        alert(message);
      },
    onClose: function () {
        alert("Transaction cancelled");
    }
});
   handler.openIframe();
}