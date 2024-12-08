export const requestBody = {
	operationName: "GetTitleListV2",
	variables: {
		titleListSortBy: "LAST_ADDED",
		first: 280,
		sortRandomSeed: 0,
		platform: "WEB",
		includeOffers: false,
		titleListFilter: {
			ageCertifications: [],
			excludeGenres: [],
			excludeProductionCountries: [],
			objectTypes: [],
			productionCountries: [],
			subgenres: [],
			genres: [],
			packages: [],
			excludeIrrelevantTitles: false,
			presentationTypes: [],
			monetizationTypes: [],
			includeTitlesWithoutUrl: true,
		},
		watchNowFilter: {
			packages: [],
			monetizationTypes: [],
		},
		language: "en",
		country: "US",
		titleListType: "WATCHLIST",
	},
	query:
		"query GetTitleListV2($country: Country!, $titleListFilter: TitleFilter, $titleListSortBy: TitleListSortingV2! = LAST_ADDED, $titleListType: TitleListTypeV2!, $titleListAfterCursor: String, $watchNowFilter: WatchNowOfferFilter!, $first: Int! = 10, $language: Language!, $sortRandomSeed: Int! = 0, $profile: PosterProfile, $backdropProfile: BackdropProfile, $format: ImageFormat, $platform: Platform! = WEB, $includeOffers: Boolean = false) {\n  titleListV2(\n    after: $titleListAfterCursor\n    country: $country\n    filter: $titleListFilter\n    sortBy: $titleListSortBy\n    first: $first\n    titleListType: $titleListType\n    sortRandomSeed: $sortRandomSeed\n  ) {\n    totalCount\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n      __typename\n    }\n    edges {\n      ...WatchlistTitleGraphql\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment WatchlistTitleGraphql on TitleListEdgeV2 {\n  cursor\n  node {\n    __typename\n    id\n    objectId\n    objectType\n    offerCount(country: $country, platform: $platform)\n    offers(country: $country, platform: $platform) @include(if: $includeOffers) {\n      id\n      presentationType\n      monetizationType\n      retailPrice(language: $language)\n      type\n      package {\n        id\n        packageId\n        clearName\n        __typename\n      }\n      standardWebURL\n      elementCount\n      deeplinkRoku: deeplinkURL(platform: ROKU_OS)\n      __typename\n    }\n    content(country: $country, language: $language) {\n      title\n      fullPath\n      originalReleaseYear\n      shortDescription\n      scoring {\n        imdbScore\n        imdbVotes\n        tmdbScore\n        tmdbPopularity\n        __typename\n      }\n      posterUrl(profile: $profile, format: $format)\n      backdrops(profile: $backdropProfile, format: $format) {\n        backdropUrl\n        __typename\n      }\n      upcomingReleases(releaseTypes: [DIGITAL]) {\n        releaseDate\n        __typename\n      }\n      isReleased\n      __typename\n    }\n    likelistEntry {\n      createdAt\n      __typename\n    }\n    dislikelistEntry {\n      createdAt\n      __typename\n    }\n    watchlistEntryV2 {\n      createdAt\n      __typename\n    }\n    customlistEntries {\n      createdAt\n      __typename\n    }\n    watchNowOffer(country: $country, platform: $platform, filter: $watchNowFilter) {\n      ...WatchNowOffer\n      __typename\n    }\n    ... on Movie {\n      seenlistEntry {\n        createdAt\n        __typename\n      }\n      __typename\n    }\n    ... on Show {\n      tvShowTrackingEntry {\n        createdAt\n        __typename\n      }\n      seenState(country: $country) {\n        seenEpisodeCount\n        releasedEpisodeCount\n        progress\n        caughtUp\n        lastSeenEpisodeNumber\n        lastSeenSeasonNumber\n        __typename\n      }\n      __typename\n    }\n  }\n  __typename\n}\n\nfragment WatchNowOffer on Offer {\n  id\n  standardWebURL\n  streamUrl\n  package {\n    id\n    icon\n    packageId\n    clearName\n    shortName\n    technicalName\n    iconWide\n    hasRectangularIcon(country: $country, platform: WEB)\n    __typename\n  }\n  retailPrice(language: $language)\n  retailPriceValue\n  lastChangeRetailPriceValue\n  currency\n  presentationType\n  monetizationType\n  availableTo\n  __typename\n}\n",
};
