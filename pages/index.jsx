import Nav from '@/components/Nav';
import { NextSeo } from 'next-seo';

export default function Home() {
    return (
        <>
            <NextSeo />
            <Nav />
            <section className='bg-gray-600'>
                <main className='flex flex-col items-center justify-center min-h-screen text-green-400 layout'>
                    <h1>
                        <a
                            className='font-bold hover:text-green-500'
                            href='https://github.com/theodorusclarence/nextjs-tailwind-starter'
                            target='_blank'
                            rel='noreferer noopener'
                        >
                            NextJS Tailwind Starter
                        </a>
                    </h1>
                    <p className='text-white'>
                        By{' '}
                        <a
                            className='font-bold hover:text-green-400'
                            href='https://theodorusclarence.github.io'
                            target='_blank'
                            rel='noreferer noopener'
                        >
                            Clarence
                        </a>
                    </p>

                    <footer className='absolute text-gray-100 bottom-2'>
                        © {new Date().getFullYear()}
                    </footer>
                </main>
            </section>
        </>
    );
}
