import styles from './page.module.css'
import { ComparisonContainer, ComparisonItem } from '@/components/comparison'


export default function Home() {
  return (
    <main>
      <h1>Fruit Comparison</h1>
      <section>
        <ComparisonContainer>
          <ComparisonItem>
            One
          </ComparisonItem>
          <ComparisonItem>
            Two
          </ComparisonItem>
        </ComparisonContainer>
      </section>
    </main>
  )
}
