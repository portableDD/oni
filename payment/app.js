function payWithPaystack() {
let handler = PaystackPop.setup ({
    key:"pk_test_82ce23694563611af6015b7bdfc1dd4a1f044acf",
    email:"emmanueltemitopedorcas20@gmail.com",
    amount: 370000,
    metadata: {
        custom_fields:[
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value:"+2349078562988",
            }
        ]
    },
    callback: function (response){
        alert("success. transaction ref is" + response);
    },
    onClose: function () {
        alert("Transaction cancelled");
    }
});
   handler.openIframe();
}