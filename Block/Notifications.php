<?php
/**
 * Copyright © Gtstudio All rights reserved.
 * See COPYING.txt for license details.
 */

declare(strict_types=1);

namespace Gtstudio\Notifications\Block;

use Magento\Store\Model\ScopeInterface;

use \Magento\Framework\{
    View\Element\Template\Context,
    App\Config\ScopeConfigInterface,
    View\Element\Messages,
    Message\Factory,
    Message\CollectionFactory,
    Message\ManagerInterface,
    View\Element\Message\InterpretationStrategyInterface
};

class Notifications extends Messages
{

    /**
     * Constructor
     *
     * @param Context  $context
     * @param ScopeConfigInterface $scopeConfig
     * @param array $data
     */
    public function __construct(
        Context $context,
        ScopeConfigInterface $scopeConfig,
        Factory $messageFactory,
        CollectionFactory $collectionFactory,
        ManagerInterface $messageManager,
        InterpretationStrategyInterface $interpretationStrategy,
        array $data = []
    ) {
        $this->scopeConfig = $scopeConfig;
        parent::__construct(
            $context,
            $messageFactory,
            $collectionFactory,
            $messageManager,
            $interpretationStrategy,
            $data
        );
    }

    /**
     * Retriever admin config for given subpath
     * @return string|array|int|null
     */
    public function getConfig($path)
    {
        return $this->scopeConfig->getValue(
            "notifications/general/$path",
            ScopeInterface::SCOPE_STORE
        );
    }
}
