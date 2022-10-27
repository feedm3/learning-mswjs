import { graphql } from 'msw'
import { FoundQueryResponse } from "../App";

export const handlers = [
  graphql.query<FoundQueryResponse>('getFounding',async (req, res, ctx) => {
    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json();

    const data = originalResponseData.data as FoundQueryResponse;
    data.company.founded = 4000;

    return res(
      ctx.data(data),
    )
  }),
]