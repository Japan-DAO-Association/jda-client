import { jsonToGraphQLQuery } from 'json-to-graphql-query';

export const JDA_SUBGRAPH_URL = {
  '1': 'https://api.thegraph.com/subgraphs/name/japan-dao-association/jda',
  '4': 'https://api.thegraph.com/subgraphs/name/japan-dao-association/jda-rinkeby',
  '42': 'https://api.thegraph.com/subgraphs/name/japan-dao-association/jda-kovan',
};

export async function subgraphRequest(url, query, options) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: JSON.stringify({
      query: jsonToGraphQLQuery({
        query
      })
    })
  });
  const { data } = await res.json();
  return data || {};
}

export default {
  subgraphRequest,
}
