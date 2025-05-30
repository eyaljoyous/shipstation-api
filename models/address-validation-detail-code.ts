/* tslint:disable */
/* eslint-disable */
/**
 * ShipStation API v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The detailed error codes that can be returned by the address validation API
 * @export
 * @enum {string}
 */

export const AddressValidationDetailCode = {
    UnsupportedCountry: 'unsupported_country',
    NonSupportedCountry: 'non_supported_country',
    MinimumPostalCodeVerificationFailed: 'minimum_postal_code_verification_failed',
    StreetDoesNotMatchUniqueStreetName: 'street_does_not_match_unique_street_name',
    MultipleDirectionals: 'multiple_directionals',
    MultipleMatches: 'multiple_matches',
    SuiteNotValid: 'suite_not_valid',
    SuiteMissing: 'suite_missing',
    IncompatiblePairedLabels: 'incompatible_paired_labels',
    InvalidHouseNumber: 'invalid_house_number',
    MissingHouseNumber: 'missing_house_number',
    InvalidBoxNumber: 'invalid_box_number',
    InvalidChargeEvent: 'invalid_charge_event',
    MissingBoxNumber: 'missing_box_number',
    MissingCmraOrPrivateMailBoxNumber: 'missing_cmra_or_private_mail_box_number',
    SuiteHasNoSecondaries: 'suite_has_no_secondaries',
    PostalCodeChangedOrAdded: 'postal_code_changed_or_added',
    StateProvinceChangedOrAdded: 'state_province_changed_or_added',
    CityLocalityChangedOrAdded: 'city_locality_changed_or_added',
    UrbanizationChanged: 'urbanization_changed',
    StreetNameSpellingChangedOrAdded: 'street_name_spelling_changed_or_added',
    StreetNameTypeChangedOrAdded: 'street_name_type_changed_or_added',
    StreetDirectionChangedOrAdded: 'street_direction_changed_or_added',
    SuiteTypeChangedOrAdded: 'suite_type_changed_or_added',
    SuiteUnitNumberChangedOrAdded: 'suite_unit_number_changed_or_added',
    DoubleDependentLocalityChangedOrAdded: 'double_dependent_locality_changed_or_added',
    SubadministrativeAreaChangedOrAdded: 'subadministrative_area_changed_or_added',
    SubnationalAreaChangedOrAdded: 'subnational_area_changed_or_added',
    PoBoxChangedOrAdded: 'po_box_changed_or_added',
    PremiseTypeChangedOrAdded: 'premise_type_changed_or_added',
    HouseNumberChanged: 'house_number_changed',
    OrganizationChangedOrAdded: 'organization_changed_or_added',
    PartiallyVerifiedToStateLevel: 'partially_verified_to_state_level',
    PartiallyVerifiedToCityLevel: 'partially_verified_to_city_level',
    PartiallyVerifiedToStreetLevel: 'partially_verified_to_street_level',
    PartiallyVerifiedToPremiseLevel: 'partially_verified_to_premise_level',
    VerifiedToStateLevel: 'verified_to_state_level',
    VerifiedToCityLevel: 'verified_to_city_level',
    VerifiedToStreetLevel: 'verified_to_street_level',
    VerifiedToPremiseLevel: 'verified_to_premise_level',
    VerifiedToSuiteLevel: 'verified_to_suite_level',
    CodedToStreetLavel: 'coded_to_street_lavel',
    CodedToNeighborhoodLevel: 'coded_to_neighborhood_level',
    CodedToCommunityLevel: 'coded_to_community_level',
    CodedToStateLevel: 'coded_to_state_level',
    CodedToRooftopLevel: 'coded_to_rooftop_level',
    CodedToRooftopInterpolationLevel: 'coded_to_rooftop_interpolation_level',
    NameMaxLengthExceeded: 'name_max_length_exceeded',
    PhoneMaxLengthExceeded: 'phone_max_length_exceeded',
    CompanyNameMaxLengthExceeded: 'company_name_max_length_exceeded',
    Line1MinMaxLength: 'line1_min_max_length',
    Line2MaxLengthExceeded: 'line2_max_length_exceeded',
    Line3MaxLengthExceeded: 'line3_max_length_exceeded',
    CityLocalityMaxLengthExceeded: 'city_locality_max_length_exceeded',
    StateProvinceMaxLengthExceeded: 'state_province_max_length_exceeded',
    InvalidPostalCode: 'invalid_postal_code',
    CountryInvalidLength: 'country_invalid_length',
    AddressNotFound: 'address_not_found'
} as const;

export type AddressValidationDetailCode = typeof AddressValidationDetailCode[keyof typeof AddressValidationDetailCode];



