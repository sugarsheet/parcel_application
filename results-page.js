import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, configure, pagination,refinementList  } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('68TJZ58YJR', '8c32aba8b5d875e32a740ac7c0138dad');

const search = instantsearch({
  indexName: 'spencer_williams_electronics',
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox",
    placeholder: 'Search for a product..'
  }),

  hits({
    container: "#hits",
    templates: {
      item(hit, { html, components }) {
        return html`
          <p>${components.Highlight({ hit, attribute: 'name' })}</p>
        `;
      },
    },
  }),
  configure({
    hitsPerPage: 20
  }),

  pagination({
    container: '#pagination'
  }),

  refinementList({
    container: '#brand-list',
    attribute: 'brand',
  }),
]);

search.start();
