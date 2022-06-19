define([
    'Magento_Customer/js/customer-data'
], function (customerData) {
    'use strict';

    return function (target) {
        return target.extend({
            /**
             * Extends Component object by storage observable messages.
             */
            initialize: function () {
                let self = this;

                if (!self.enable) {
                    return this._super();
                }

                console.log(self.time_out);

                self.messages.subscribe(function(messages) {
                    if (messages.messages) {
                        if (messages.messages.length > 0) {
                            setTimeout(function() {
                                customerData.set('messages', {});
                            }, self.time_out);
                        }
                    }
                });
            },

            closeMessage: (message, event) => {
                event.currentTarget.parentElement.hide();
            }
        });
    }
});
