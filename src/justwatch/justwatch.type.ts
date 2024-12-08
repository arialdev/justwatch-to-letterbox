export type MovieData = { title: string; releaseYear: number };
export type RawMovieData = Pick<
	RawMovieDataResponse,
	"title" | "originalReleaseYear"
>;
export type RawJustWatchResponse = {
	data: { titleListV2: { edges: [{ node: { content: RawMovieData } }] } };
};
type RawMovieDataResponse = {
	title: string;
	originalReleaseYear: number;
	[key: string]: unknown;
};
