// Visit https://api.prokerala.com/demo/birth-details.php to see the following code in action
const PK_API_CLIENT_ID = '';
(function () {
    function loadScript(cb) {
        var script = document.createElement('script');
        script.src = 'https://client-api.prokerala.com/static/js/location.min.js';
        script.onload = cb;
        script.async = 1;
        document.head.appendChild(script);
    }

    function createInput(name, value) {
        const input = document.createElement('input');
        input.name = name;
        input.type = 'hidden';

        return input;
    }
    function initWidget(input) {
        const form = input.form;
        const inputPrefix = input.dataset.location_input_prefix ? input.dataset.location_input_prefix : '';
        const coordinates = createInput(inputPrefix +'coordinates');
        const timezone = createInput(inputPrefix +'timezone');
        form.appendChild(coordinates);
        form.appendChild(timezone);
        new LocationSearch(input, function (data) {
            coordinates.value = `${data.latitude},${data.longitude}`;
            timezone.value = data.timezone;
            input.setCustomValidity('');
        }, {clientId: PK_API_CLIENT_ID, persistKey: `${inputPrefix}loc`});

        input.addEventListener('change', function (e) {
            input.setCustomValidity('Please select a location from the suggestions list');
        });
    }
    loadScript(function() {
        let location = document.querySelectorAll('.prokerala-location-input');
        Array.from(location).map(initWidget);
    });
})();