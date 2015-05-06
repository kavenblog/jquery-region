
;jQuery.extend({
    regionSelector: {
        reset: function() {
            jQuery('select[data-region-src="state"]')
                .empty();

            jQuery('select[data-region-src="country"]')
                .empty()
                .append('<option value=""></option>');
        },
        bind: function() {
            this.reset();

            for (var i in jQRegionSelectorData) {
                jQuery('select[data-region-src="country"]')
                    .append('<option>' + jQRegionSelectorData[i].name + '</option>');
            }

            jQuery('select[data-region-src="country"]')
                .unbind('change')
                .on('change', function(e) {
                    jQuery('select[data-region-src="state"]').empty();

                    var idx = jQuery(this).prop('selectedIndex');
                    if (idx === 0) {
                        return;
                    }

                    var data = jQRegionSelectorData[idx - 1];
                    if (data.divider === true) {
                        return;
                    }

                    for (var i in data.states) {
                        jQuery('select[data-region-src="state"]')
                            .append('<option>' + states[i] + '</option>');
                    }
                });
        }
    }
});

jQuery(function() {
    jQuery.regionSelector.bind();
});
