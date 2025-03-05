'use client';
import css from './public.module.scss'
import React from 'react';
import HeaderComponent from '@/core/layouts/public/components/header/header.component';
import FooterComponent from '@/core/layouts/public/components/footer/footer.component';

const PublicLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={css.content}>
            <HeaderComponent/>
            <main>
                {children}
            </main>
            <FooterComponent/>
        </div>
    );
};


export default PublicLayout;

