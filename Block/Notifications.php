<?php
/**
 * Copyright © Gtstudio All rights reserved.
 * See COPYING.txt for license details.
 */

declare(strict_types=1);

namespace Gtstudio\Notifications\Block;

use Magento\Framework\{
    View\Element\Messages
};

use Magento\Store\Model\ScopeInterface;

class Notifications extends Messages
{
    /**
     * Retriever admin config for given subpart
     * @param $path
     * @return string|array|int|null
     */
    public function getConfig($path): array|int|string|null
    {
        return $this->_scopeConfig->getValue(
            "notifications/general/$path",
            ScopeInterface::SCOPE_STORE
        );
    }
}
