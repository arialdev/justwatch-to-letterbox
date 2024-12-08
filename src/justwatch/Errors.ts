export class DataFetchingError extends Error {
	public readonly response: Response;
	constructor(message: string, response: Response) {
		super(message);
		this.name = "DataFetchingError";
		this.response = response;
	}
}

export class RawDataProcessorError extends Error {
	public readonly rawData: unknown;
	constructor(rawData: unknown) {
		super("Raw data could not be processed");
		this.name = "RawDataProcessorError";
		this.rawData = rawData
	}
}

