// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const fizz_buzz = false

for (let num = 1; num <= 20; num++) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log('FizzBuzz');
  } else if (num % 3 == 0) {
    console.log('Fizz');
  } else if (num = 0) {
    console.log('Buzz');
  } else {
      console.log(num);  // ここはわざとインデントをずらした
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
