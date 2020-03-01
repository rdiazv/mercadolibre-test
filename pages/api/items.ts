import { NextApiRequest, NextApiResponse } from 'next'
import getMainCategoryId from 'api/helpers/getMainCategoryId'
import getCategory from 'api/helpers/getCategory'
import parsePrice from 'api/helpers/parsePrice'
import getSearchResults from 'api/helpers/getSearchResults'
import getQueryKey from '~/helpers/getQueryKey'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getSearchResults(getQueryKey(req.query, 'q'))
    const mainCategory = await getCategory(getMainCategoryId(data.results))
    const itemsData = data.results.slice(0, 4)
    const items = []

    for (let i = 0; i < itemsData.length; i++) {
      items.push({
        id: itemsData[i].id,
        title: itemsData[i].title,
        price: await parsePrice(itemsData[i].price, itemsData[i].currency_id),
        picture: itemsData[i].thumbnail,
        condition: itemsData[i].condition,
        free_shipping: itemsData[i].shipping.free_shipping,
      })
    }

    const response = {
      author: {
        name: 'Rodrigo',
        lastname: 'Díaz',
      },
      categories: mainCategory.path_from_root.map(category => category.name),
      items,
    }

    res.status(200).json(response)
  } catch (error) {
    console.error(error) // Track error
    res.status(500).send('Internal server error')
  }
}
