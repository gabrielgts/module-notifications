define(['jquery'], function ($) {
    'use strict'
    return function (target) {
        return target.extend({
            defaults: {
                template: 'Gtstudio_Notifications/messages',
                selector: '[data-role=checkout-messages]',
                isHidden: false,
                hideTimeout: 5000,
                hideSpeed: 500,
                listens: {
                    isHidden: 'onHiddenChange'
                }
            },
            onHiddenChange (isHidden) {
                if (!isHidden) return

                setTimeout(() => {
                    $(this.selector).hide('blind', {}, 500)
                }, 30000)
            }
        })
    }
})
