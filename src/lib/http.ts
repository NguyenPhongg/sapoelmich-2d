export interface IHttpClientOption {
  signal?: AbortSignal
}

class HttpClient {
  constructor() {}
  async get<T = unknown>(
    path: string,
    { signal }: IHttpClientOption = {}
  ): Promise<T> {
    const response = await fetch(
      `${document
        .querySelector(
          'ae-widget[component="AeSmartSearchInput"], ae-widget[component="AeSmartSearch"]'
        )
        ?.getAttribute('api')}${path}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Ae-Api-Key':
            document
              .querySelector(
                'ae-widget[component="AeSmartSearchInput"], ae-widget[component="AeSmartSearch"]'
              )
              ?.getAttribute('api-key') || '',
          Accept: 'application/json',
        },
        signal,
      }
    )
    return await response.json()
  }
}

const defHttp = new HttpClient()

export default defHttp
