//Enable Deliveries
$('#deliveriesToggle').click(function (e) {
    e.preventDefault();
    $('#MobileModal').modal('open');
    $('#deliveriesToggle').sideNav('hide');
    deliveryListener();
    //    $('#mobileVerification').modal({
    //        dismissible: false,
    //    });
    var isValid = true;
    $('#submitPhoneNo').click(function () {
        phoneNo_ = $('#inp-phone').val();
        if (phoneNo_ == '' || phoneNo_ == null && e.status == "ok") {
            $('#MobileModal').modal({
                dismissible: false,
            });
            Materialize.toast('Ooops! Please enter phone number', 3000);
            $('#phoneNumber').css({
                "border-bottom": "1px solid red",
                "background": ""
            });
        } else {
            $('#deliveriesToggle').prop('checked', true);
            Materialize.toast('Phone Number Verified', 3000);
            var value = document.getElementById("deliveriesToggle").checked
            var phone_number = $('#inp-phone').val()
            doFetch({
                action: 'toggleDeliveries',
                value: value,
                id: localStorage.getItem('soko-active-store')
            }).then(function (e) {});
        }
    });
});

//Delivery Members
$('document').ready(function () {
    $('body').on('click', $('#MobileModal ul.autocomplete-content li'), function () {
        var value = $('#delivery-members').val();
        if (value != '') {
            var deliveryMembers = $('#delivery-members').val()
            doFetch({
                action: 'deliveryMembers',
                store: localStorage.getItem('soko-active-store'),
                data: deliveryMembers
            }).then(function (e) {
                if (e.status == 'ok') {} else {}
            });
        }
    });
});
