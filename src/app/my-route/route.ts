import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  // This is cooked build error workaround
  console.log(request, payload)

  return Response.json({
    message: 'This is an example of a custom route.',
  })
}
