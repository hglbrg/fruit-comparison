import Card from "@/components/card/card";
import styles from './page.module.css'

async function getData() {
  const res = await fetch('https://fruityvice.com/api/fruit/all')
  if (!res.ok) {
    throw new Error('failed to fetch data')
  }
  return res.json()
}

interface IFruit {
  genus?: string;
  name?: string;
  id?: number;
  family?: string;
  order?: string;
  nutritions?: {
    carbohydrates?: number;
    protein?: number;
    fat?: number;
    calories?: number;
    sugar?: number;
  }
}


const Home = async () => {
  const data: IFruit[] = await getData()
  console.log(data[0].name)
  return (
    <main>
      <h1>Fruit Comparison</h1>
      <section className={styles.container}>

        {data && data.map((props, i) => (
          <Card key={i} {...props} />
        )
        )}

        <p> End of Data</p>
      </section>
    </main>
  )
}

export default Home
export type { IFruit }


