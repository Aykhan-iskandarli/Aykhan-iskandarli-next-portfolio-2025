'use client';
import {usePathname, useRouter} from 'next/navigation';
import {useCallback, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import LeftMenuComponent from './left-menu/left-menu.component';

const HeaderComponent = () => {
    const {t} = useTranslation();
    const router = useRouter();
    const pathname = usePathname();

    const locale = useMemo(() => {
        return pathname.split('/')[1];
    }, [pathname]);

    const onLanguageChange = useCallback((value: string) => {
        const path = pathname.split('/');
        path[1] = value;
        router.replace(path.join('/'));

        // router.replace();
    }, [pathname, router]);


    return (
        <header >
        <LeftMenuComponent/>
        </header>
    );
};


export default HeaderComponent;
