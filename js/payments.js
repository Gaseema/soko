//Enable Payments
$('#paymentsToggle').click(function () {
    deliveryListener();
    if (JSON.parse(localStorage.getItem('soko-store-id-' + localStorage.getItem('soko-active-store'))).phone == "") {
        $('#paymentsToggle').sideNav('hide');
        $('#editStoreModal').modal('open');
        Materialize.toast('Please add your phone number', 3000);
    } else {
        $('#deliveriesToggle').sideNav('hide');
        $('#confirmContact').modal('open');
        var value = document.getElementById("paymentsToggle").checked
        doFetch({
            action: 'togglePayments',
            value: value
        }).then(function (e) {
            if (e.status == 'ok') {

            } else {

            }
        });
    }
});


//Payments on/off
var paymentOnOff = JJSON.parse(localStorage.getItem('soko-store-id-' + localStorage.getItem('soko-active-store'))).payments;
if (paymentOnOff == "1") {
    document.getElementById("paymentsToggle").checked = true;
}
