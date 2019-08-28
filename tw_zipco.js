var $ = jQuery.noConflict();

$(document).ready(function () {

    function updateValue(b) { $("#" + b + "_state").val($(".woocommerce-" + b + "-fields select[name=\'county\']").val()); $("#" + b + "_city").val($(".woocommerce-" + b + "-fields select[name=\'district\']").val()); $("#" + b + "_postcode").val($(".woocommerce-" + b + "-fields input[name=\'zipcode\']").val()); if (b == "billing") { var a = ["county", "district", "zipcode"]; a.forEach(function (d) { var c = $(".woocommerce-" + b + "-fields select[name=\'" + d + "\']").val(); if (c != "" || c != "undefined" || c != "zipcode") { _delCookie(d); _setCookie(d, c, 1) } }) } };


    function updateField(field) {

        $(".woocommerce-" + field + "-fields select[name='county']").appendTo($("#" + field + "_state_field"));
        $(".woocommerce-" + field + "-fields select[name='district']").appendTo($("#" + field + "_city_field"));
        $(".woocommerce-" + field + "-fields input[name='zipcode']").appendTo($("#" + field + "_postcode_field"));
    }

    function _setCookie(b, f, c) { var e = new Date(); e.setTime(e.getTime() + (c * 24 * 60 * 60 * 1000)); var a = "expires=" + e.toGMTString(); document.cookie = b + "=" + f + "; " + a };
    function _delCookie(a) { document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" };

    function _getCookie(cname) {

        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    //////////////////////////////////////////////
    //////////////////////////////////////////////    
    var twzipcode_config = {
        "countySel": _getCookie("county") == "" ? "" : _getCookie("county"),
        "districtSel": _getCookie("district") == "" ? "" : _getCookie("district"),
        "detect": function (coords) {
            updateValue("billing");
            updateValue("shipping");
        }
    };
    //////////////////////////////////////////////
    $(".woocommerce-billing-fields,.woocommerce-shipping-fields").twzipcode(twzipcode_config);
    //////////////////////////////////////////////
    updateField("billing");
    updateField("shipping");
    //////////////////////////////////////////////
    $("select[name='county'],select[name='district']").change(function () {
        updateValue("billing");
        updateValue("shipping");
    })
    //////////////////////////////////////////////
    $("input[name=\'zipcode\']").keyup(function () {
        updateValue("billing");
        updateValue("shipping");
    })
    //////////////////////////////////////////////
    $("#billing_postcode,#billing_state,#billing_city,#shipping_state,#shipping_city,#shipping_postcode").hide();

})                
