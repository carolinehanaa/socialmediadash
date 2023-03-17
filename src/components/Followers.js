import React from 'react'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

function Followers() {
  return (
    <>
    <section className='mx-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
      <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-600' >
        <ul className='flex items-center justify-center'>
          <li><img src={facebook} alt='facebook' className='mr-2'/></li>
          <li className='text-sm text-slate-600 dark:text-slate-400 font-bold'>@nathanf</li>
        </ul>

        <h2 className=' text-5xl font-bold text-slate-800 dark:text-white text-center my-5'> 1987 <span className='text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'> Followers</span></h2>

        <p className='text-center text-emerald-500 flex items-center justify-center text-sm font-bold'>
          <img src={up} alt="" className='mr-2 w-3'></img>
          12 Today
        </p>
      </article>
   

   
      <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-500' >
        <ul className='flex items-center justify-center'>
          <li><img src={twitter} alt='twitter' className='mr-2'/></li>
          <li className='text-sm text-slate-600  dark:text-slate-400   font-bold'>@nathanf</li>
        </ul>

        <h2 className=' text-5xl font-bold text-slate-800  dark:text-white text-center my-5'> 1024 <span className='text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'> Followers</span></h2>

        <p className='text-center text-emerald-500 flex items-center justify-center text-sm font-bold'>
          <img src={up} alt="" className='mr-2 w-3'></img>
          99 Today
        </p>
      </article>
  

   
      <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow-slate-50  dark:shadow-slate-700 relative' >
        <div className='bg-gradient-to-r from-orange-300 to-purple-500 h-2 w-full rounded-tl-lg rounded-tr-lg absolute top-0 left-0'></div>
        <ul className='flex items-center justify-center'>
          <li><img src={instagram} alt='instagram' className='mr-2'/></li>
          <li className='text-sm text-slate-600  dark:text-slate-400 font-bold'>@nathanf</li>
        </ul>

        <h2 className=' text-5xl font-bold text-slate-800  dark:text-white text-center my-5'> 11K <span className='text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'> Followers</span></h2>

        <p className='text-center text-emerald-500 flex items-center justify-center text-sm font-bold'>
          <img src={up} alt="" className='mr-2 w-3'></img>
          1099 Today
        </p>
      </article>
  

   
      <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow-slate-50  dark:shadow-slate-700 border-t-8 border-red-700' >
        <ul className='flex items-center justify-center'>
          <li><img src={youtube} alt='twitter' className='mr-2'/></li>
          <li className='text-sm text-slate-600  dark:text-slate-400  font-bold'>@Nathan F.</li>
        </ul>

        <h2 className=' text-5xl font-bold text-slate-800  dark:text-white text-center my-5'> 8239 <span className='text-sm block text-slate-600  dark:text-slate-400 font-normal uppercase tracking-widest'> Followers</span></h2>

        <p className='text-center text-rose-500 flex items-center justify-center text-sm font-bold'>
          <img src={down} alt="" className='mr-2 w-3'></img>
          144 Today
        </p>
      </article>
    </section>
    </>
  )
}

export default Followers