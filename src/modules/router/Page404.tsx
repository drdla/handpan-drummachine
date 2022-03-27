import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

export const Page404 = () => {
  const {t} = useTranslation();

  return (
    <>
      <h1>{t('404 - Page not found')}</h1>
      <Link to="/">{t('Go to home page')}</Link>
    </>
  );
};
