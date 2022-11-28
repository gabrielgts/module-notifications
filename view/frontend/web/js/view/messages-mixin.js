define([
    'jquery',
    'Magento_Customer/js/customer-data'
], function ($, customerData) {
    'use strict'
    return function (target) {
        return target.extend({
            initialize () {
                this._super()

                if (!this.enable) return

                this.addFloatingMessages(this.time_out)

                this.messages.subscribe(messages => {
                    if (messages.messages?.length <= 0) return

                    setTimeout(() => {
                        customerData.set('messages', {})
                    }, this.time_out)
                })
            },
            closeMessage (message, event) {
                $(event.currentTarget.parentElement).fadeOut('slow')

                $.mage.cookies.set('mage-messages', '', {
                    samesite: 'strict',
                    domain: ''
                })
            },

            /* Because Magento\Framework\Message\MessageInterface\Messages case */
            addFloatingMessages (timeout) {
                const $container = $('.messages > .message:not(.float)')
                if (!$container) return

                $container.addClass('float')
                $container.append(
                    `<div class="message-close" onclick="jQuery(this.parentElement).fadeOut('slow')" class="hide">
                        <img src="${require.toUrl('Caravel_Notifications/images/close.svg')}" alt="close message">
                    </div>`
                )

                setTimeout(() => $container.fadeOut('slow'), timeout)
            }
        })
    }
})
