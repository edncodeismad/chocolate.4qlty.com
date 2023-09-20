import vegan from './images/vegan.png'
import original from './images/cp1.JPG'
import dark from './images/cp2.JPG'
import zero from './images/cp3.JPG'
import spreads from './images/spreads.png'
import choco2 from './images/choco2.png'
import CP from './images/CP-img.png'
import Q from './images/4q-img.png'
import linkIcon from './images/link.svg'
import logoCP from './images/logo-cp.svg'
import logo from './images/logowhite.svg'
import graphic1 from './images/graphic1.png'
import graphic2 from './images/graphic2.png'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <nav>
      <div className='bg-[#140C0B99]'>
        <div className='flex max-w-[1000px] mx-auto p-3 text-[#F0F0F0] justify-between items-center'>
          <Image src={logo} height={40} alt="4Quality"/>
          <div className='flex sm:flex-row flex-col'>
          <p className='mx-1'>07900 875093</p>
          <p className='sm:inline hidden'>|</p>
          <p className='mx-1'>office@4qlty.com</p>
          </div>
        </div>
      </div>
    </nav>
    <header>
      <div className="h-screen flex items-center justify-center" id="hero">
        <div className='max-w-[620px] mx-auto p-6 text-center h-fit'>
          <h1 id="intro-1" className='md:mb-20 mb-6'>Chocolate Spreads</h1>
          <p id="intro-2" className='my-4'>We have a selection of chocolate spreads made locally by artisans in Italy, made with the highest quality ingredients and very high percentages of cocoa.</p>
          <p id="intro-3" className='my-4'>The first Original spread, the famous "Gianduja", is a blend of the best Piedmont Hazelnut and Venezuelan chocolate, in addition to which we also offer eight different varieties and blends.</p>
          <Image id="intro-4" src={vegan} alt="vegan" className='ml-auto mt-10' height={50}/>
        </div>
      </div>
    </header>
    <div className='bg-[#2B1408] text-[#F0F0F0]'>
    <section>
      <div className='flex md:flex-row flex-col mx-auto items-center'>
        <div>
          <p><b>Guaranteed:</b></p>
          <ul className='list-disc block mt-4 ml-4'>
            <li>vegan</li>
            <li>at least 60% main ingredient</li>
            <li>no milk or dairy products</li>
            <li>no added fats, emulsifiers or food colourings</li>
            <li>gluten free</li>
            <li>palm oil free</li>
            <li>minimum sugar, with 7 varieties containing no sugar</li>
          </ul>
        </div>
        <Image src={choco2} alt="" width={480} className='m-auto p-12'/>
      </div>
    </section>
    </div>

    <section>
      <h1 className='text-center'>Our Selection</h1>
      <Image src={graphic1} alt="" width={380} className='absolute right-6 md:block hidden -z-10' />
      <div className='flex md:flex-row flex-col md:my-36 mx-auto items-center'>
        <Image src={original} alt="dark" height={640}/>
        <p className='max-w-md my-auto md:mx-auto p-8'>The Gianduja spread. 60% Piedmont IGP hazelnut cream and Venezuelan pure chocolate. NO MILK, NO DAIRY PRODUCTS.</p>
      </div>
      <Image src={graphic2} alt="" width={460} className='absolute left-6 md:block hidden' id="graphic-2"/>
      <div className='flex md:flex-row flex-col-reverse md:my-36 mx-auto items-center'>
        <p className='max-w-md my-auto md:mx-auto p-8'>The Chocolate Fudge spread. 60% Piedmont IGP hazelnut cream and more Venezuelan pure chocolate. NO MILK, NO DAIRY PRODUCTS.</p>
        <Image src={dark} alt="dark" height={640}/>
      </div>
      <div className='flex md:flex-row flex-col md:my-36 mx-auto items-center'>
        <Image src={zero} alt="dark" height={640}/>
        <p className='max-w-md my-auto md:mx-auto p-8'>Pure Hazelnuts 60%, Crystallised Maltitol, Cocoa powder, Venezuelan Cocoa Mass, NO SUGAR, NO MILK, NO DAIRY PRODUCTS.</p>
      </div>

      <Image src={spreads} alt="" width={1000} className='mx-auto'/>
      <Link href="https://www.4qlty.com/categories/spreads"><p className='text-center my-10 hover:underline text-2xl'>View all flavours on our website →</p></Link>
    </section>

    <div id="cp-info">
      <section>
        <h2 className='text-center md:my-20 my-8'>Made by
          <Image src={logoCP} height={70}alt="" className='inline mx-2' />
        </h2>
        <div className='flex md:flex-row flex-col-reverse'>
          <Image src={CP} alt="" width={440} className='mx-auto' />
          <p className='m-auto md:p-8 p-4 max-w-prose'><b>Cioccolato Puro</b> is a small company in the North of Italy which specialises in all things chocolate. From ice creams to pralines, their products have enjoyed huge popularity among the local community and we hope to bring the exquisite taste of their products and passion for quality here in the UK.</p>
        </div>
      </section>
    </div>

    <div id="q-info">
      <section>
        <h2 className='text-center md:my-20 my-8'>Imported and distributed by
          <Image src={logo} height={70}alt="" className='inline mx-2' />
        </h2>
        <div className='flex md:flex-row flex-col'>
          <p className='m-auto md:p-8 p-4 max-w-prose'><b>4Quality</b> is an importer of Italian food in London and the UK with an eye for top quality products that have already seen success in their local area. We work in support of family-run businesses - and in fact are one ourselves. All of our foods are rigorously picked so ensure we provide stores with the best that Italy has to offer.</p>
          <Image src={Q} alt="" width={440} className='mx-auto' />
        </div>
      </section>
    </div>

    <div id="foot">
      <div id="foot-content">
        <section className='m-auto'>
          <Link href="https://4qlty.com" target="_blank" className='flex flex-row justify-center items-center my-6'>
            <p className='md:text-4xl text-2xl font-medium'>4qlty.com</p>
            <Image src={linkIcon} height={26} alt="" className='mx-2'/>
          </Link>
          <Link href="https://www.vasetto.it" target="_blank" className='flex flex-row justify-center items-center my-6'>
            <p className='md:text-4xl text-2xl font-medium'>vasetto.it</p>
            <Image src={linkIcon} height={26} alt="" className='mx-2'/>
          </Link>
        </section>
      </div>
    </div>

    <footer>
      <div className="footer-container row">
        <div className="col col-md-4 col-12">
          <Image className="footer-logo mx-auto" src={logo} height={80}/>
        </div>
        <div className="col col-md-4 col-12">
          <p className="footer-title">FIND US</p>
          <p>email: office@4qlty.com</p>
          <p>tel: 07900 875093</p>
        </div>
        <div className="col col-md-4 col-12">
          <p className="footer-title my-4"><Link href="https://4qlty.com">Visit our website</Link></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 4Quality 2023</p>
        <Link href="https://blazewire.studio" target="_blank"><p>Landing page by Blazewire</p></Link>
      </div>
    </footer>





    </>
  )
}
