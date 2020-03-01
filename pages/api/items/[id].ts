import { NextApiRequest, NextApiResponse } from 'next'
import getItem from 'api/helpers/getItem'
import getItemDescription from 'api/helpers/getItemDescription'
import getQueryKey from '~/helpers/getQueryKey'
import parsePrice from 'api/helpers/parsePrice'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = getQueryKey(req.query, 'id')
    const [item, description] = await Promise.all([
      getItem(id),
      getItemDescription(id),
    ])
    const response = {
      author: {
        name: 'Rodrigo',
        lastname: 'Díaz',
      },
      item: {
        id: item.id,
        title: item.title,
        price: await parsePrice(item.price, item.currency_id),
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text,
      },
    }

    res.status(200).json(response)
  } catch (error) {
    console.error(error) // Track error
    res.status(500).send('Internal server error')
  }
}
