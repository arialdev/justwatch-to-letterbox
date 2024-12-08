import { getToken } from "./auth";
import { DataFetchingError, RawDataProcessorError } from "./Errors";
import type { MovieData, RawJustWatchResponse, RawMovieData } from "./justwatch.type";
import { requestBody } from "./utils";

export const getWatchedMovies = async (): Promise<MovieData[]> => {
	const response = await getWatchlistFromServer();
	return pruneRawData(response);
};

const getWatchlistFromServer = async (): Promise<RawJustWatchResponse> => {
	const token = getToken();
	console.log({ token });
	const response = await fetch("https://apis.justwatch.com/graphql", {
		headers: {
			authorization: token,
			"content-type": "application/json",
		},
		body: JSON.stringify(requestBody),
		method: "POST",
	});
	if (response.status !== 200) {
		throw new DataFetchingError("Error fetching watchlist from WatchDog", response);
	}
	try {
		const rawData: RawJustWatchResponse = (await response.json()) as RawJustWatchResponse;
		return rawData;
	} catch (e) {
		throw new RawDataProcessorError(response);
	}
};

const pruneRawData = (rawData: RawJustWatchResponse): MovieData[] => {
	return rawData.data.titleListV2.edges
		.map((e) => e.node.content)
		.map(({ title, originalReleaseYear }) => ({
			title,
			releaseYear: originalReleaseYear,
		}));
};
