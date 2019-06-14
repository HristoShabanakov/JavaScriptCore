function currency(money) {
    function getCurrencyFormatter(formatter) {
        function dollarFormatter (value) {
            return formatter(',', '$', true, value);
        }
        return dollarFormatter;
    }
    return getCurrencyFormatter(money);
}




