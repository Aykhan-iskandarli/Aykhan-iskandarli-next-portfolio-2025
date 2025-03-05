import styles from './page.module.scss';
import useServerTranslation from '@/i18n/i18n';
import {ILang} from '@/i18n/locale';

const Home = async ({params: {locale}}: {params: {locale: ILang}}) => {
    // const translate = useLocalization();
    // const translate = await useDictionary('az');
    const {t} = await useServerTranslation(locale);
  return (
    <main className={styles.main}>
<p>homedsaddddddddddddhomedsaddddddddddddhomedsaddddddddddddhomedsadddddddddddd</p>
<p>homedsaddddddddddddhomedsaddddddddddddhomedsaddddddddddddhomedsadddddddddddd</p>
<p>homedsaddddddddddddhomedsaddddddddddddhomedsaddddddddddddhomedsadddddddddddd</p>
<p>homedsaddddddddddddhomedsaddddddddddddhomedsaddddddddddddhomedsadddddddddddd</p>
    </main>
  );
};

export default Home;
