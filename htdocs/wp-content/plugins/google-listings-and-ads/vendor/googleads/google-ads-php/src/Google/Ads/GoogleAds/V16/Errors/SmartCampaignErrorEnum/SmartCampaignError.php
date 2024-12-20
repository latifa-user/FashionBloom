<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v16/errors/smart_campaign_error.proto

namespace Google\Ads\GoogleAds\V16\Errors\SmartCampaignErrorEnum;

use UnexpectedValueException;

/**
 * Enum describing possible Smart campaign errors.
 *
 * Protobuf type <code>google.ads.googleads.v16.errors.SmartCampaignErrorEnum.SmartCampaignError</code>
 */
class SmartCampaignError
{
    /**
     * Enum unspecified.
     *
     * Generated from protobuf enum <code>UNSPECIFIED = 0;</code>
     */
    const UNSPECIFIED = 0;
    /**
     * The received error code is not known in this version.
     *
     * Generated from protobuf enum <code>UNKNOWN = 1;</code>
     */
    const UNKNOWN = 1;
    /**
     * The business location id is invalid.
     *
     * Generated from protobuf enum <code>INVALID_BUSINESS_LOCATION_ID = 2;</code>
     */
    const INVALID_BUSINESS_LOCATION_ID = 2;
    /**
     * The SmartCampaignSetting resource is only applicable for campaigns
     * with advertising channel type SMART.
     *
     * Generated from protobuf enum <code>INVALID_CAMPAIGN = 3;</code>
     */
    const INVALID_CAMPAIGN = 3;
    /**
     * The business name or business location id is required.
     *
     * Generated from protobuf enum <code>BUSINESS_NAME_OR_BUSINESS_LOCATION_ID_MISSING = 4;</code>
     */
    const BUSINESS_NAME_OR_BUSINESS_LOCATION_ID_MISSING = 4;
    /**
     * A Smart campaign suggestion request field is required.
     *
     * Generated from protobuf enum <code>REQUIRED_SUGGESTION_FIELD_MISSING = 5;</code>
     */
    const REQUIRED_SUGGESTION_FIELD_MISSING = 5;
    /**
     * A location list or proximity is required.
     *
     * Generated from protobuf enum <code>GEO_TARGETS_REQUIRED = 6;</code>
     */
    const GEO_TARGETS_REQUIRED = 6;
    /**
     * The locale could not be determined.
     *
     * Generated from protobuf enum <code>CANNOT_DETERMINE_SUGGESTION_LOCALE = 7;</code>
     */
    const CANNOT_DETERMINE_SUGGESTION_LOCALE = 7;
    /**
     * The final URL could not be crawled.
     *
     * Generated from protobuf enum <code>FINAL_URL_NOT_CRAWLABLE = 8;</code>
     */
    const FINAL_URL_NOT_CRAWLABLE = 8;

    private static $valueToName = [
        self::UNSPECIFIED => 'UNSPECIFIED',
        self::UNKNOWN => 'UNKNOWN',
        self::INVALID_BUSINESS_LOCATION_ID => 'INVALID_BUSINESS_LOCATION_ID',
        self::INVALID_CAMPAIGN => 'INVALID_CAMPAIGN',
        self::BUSINESS_NAME_OR_BUSINESS_LOCATION_ID_MISSING => 'BUSINESS_NAME_OR_BUSINESS_LOCATION_ID_MISSING',
        self::REQUIRED_SUGGESTION_FIELD_MISSING => 'REQUIRED_SUGGESTION_FIELD_MISSING',
        self::GEO_TARGETS_REQUIRED => 'GEO_TARGETS_REQUIRED',
        self::CANNOT_DETERMINE_SUGGESTION_LOCALE => 'CANNOT_DETERMINE_SUGGESTION_LOCALE',
        self::FINAL_URL_NOT_CRAWLABLE => 'FINAL_URL_NOT_CRAWLABLE',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(SmartCampaignError::class, \Google\Ads\GoogleAds\V16\Errors\SmartCampaignErrorEnum_SmartCampaignError::class);

