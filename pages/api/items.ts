import { NextApiRequest, NextApiResponse } from 'next'
import getMainCategoryId from 'api/helpers/getMainCategoryId'
import getCategory from 'api/helpers/getCategory'
import parsePrice from 'api/helpers/parsePrice'
import getSearchResults from 'api/helpers/getSearchResults'
import getQueryKey from '~/helpers/getQueryKey'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO fix cache
  try {
    const data = await getSearchResults(getQueryKey(req.query, 'q'))
    const mainCategory = await getCategory(getMainCategoryId(data.results))
    const response = {
      author: {
        name: 'Rodrigo',
        lastname: 'Díaz',
      },
      categories: mainCategory.path_from_root.map(category => category.name),
      items: await Promise.all(
        data.results.slice(0, 4).map(async item => ({
          id: item.id,
          title: item.title,
          price: await parsePrice(item.price, item.currency_id),
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        }))
      ),
    }

    res.status(200).json(response)
  } catch (error) {
    console.error(error) // Track error
    res.status(500).send('Internal server error')
  }
}
