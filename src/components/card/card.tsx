import Image from 'next/image';
import { ReactNode } from 'react'
import type { IFruit } from '../../app/page'

interface CardProps extends IFruit {
  image: ReactNode;
}

const getImage = (name: string) => {

  return 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  // temporrary placeholder image
}

const Card = ({ name, nutritions }): IFruit => (
  <div>
    <div>
      <Image src={getImage(name)} alt={name} width={200} height={100} objectFit="cover" />
    </div>
    <p>{name}</p>
    {nutritions.sugar}
  </div>
)

export default Card
