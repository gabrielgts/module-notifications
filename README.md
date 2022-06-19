# Module Gtstudio Notifications

    ``gtstudio/module-notifications``

 - [Main Functionalities](#markdown-header-main-functionalities)
 - [Installation](#markdown-header-installation)
 - [Configuration](#markdown-header-configuration)
 - [Specifications](#markdown-header-specifications)


## Main Functionalities
This module shows magento messages in a clearer and more elegant way

## Installation
\* = in production please use the `--keep-generated` option

### Type 1: Zip file

 - Unzip the zip file in `app/code/Gtstudio`
 - Enable the module by running `php bin/magento module:enable Gtstudio_Notifications`
 - Apply database updates by running `php bin/magento setup:upgrade`\*

### Type 2: Composer

 - Install the module composer by running `composer require gtstudio/module-notifications`
 - enable the module by running `php bin/magento module:enable Gtstudio_Notifications`
 - apply database updates by running `php bin/magento setup:upgrade`\*

## Configuration

 - Enable (notifications/general/enable)

 - Custom Css (notifications/general/custom_css)

 - Message Time Out (notifications/general/time_out)

## Specifications

 - Block
	- Notifications > messages.phtml
