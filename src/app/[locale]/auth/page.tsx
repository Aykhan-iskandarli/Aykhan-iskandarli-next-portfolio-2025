'use client';
import styles from './page.module.scss';
import useLocalization from '@/assets/lang';

export default function Home() {
    const translate = useLocalization();
  return (
    <main className={styles.main}>
      <a href='/src/assets/fonts/Nunito/NunitoSans-Black.ttf'>{translate('rights')}</a>
    </main>
  );
}
