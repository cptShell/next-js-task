import { currencyRateApi } from '@/services/services';
import styles from './page.module.scss';

export default function Home() {
  const getRates = async () => {
    const rates = await currencyRateApi.getRates();
    console.log(rates);
  };

  getRates();

  return (
    <main className={styles.main}>
      <h1>Курсы валют</h1>
    </main>
  );
}
