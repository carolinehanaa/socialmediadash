
import { useState } from 'react'

function Header() {
    let [darkMode, setDarkMode] = useState(false)


    const toggleTheme = () => {
       const body = document.querySelector("body")

       if(!darkMode) {
        body.classList.remove("dark")
       }
       if(darkMode){
        body.classList.add("dark")
       }
      setDarkMode(!darkMode)
    }

    return (
        <>

            <header className='dash-header '>
                <div>
                    <h1 className='fone-bold text-2xl text-slate-800 dark:text-white font-bold  md:text:3xl'>
                        Social Media Dashboard
                    </h1>
                    <p className='text-slate-600 font-bold dark:text-slate-300'>Total Followers : 23,004</p>
                </div>

                {/* toggle+ */}
                <div className='toggle' onClick={toggleTheme}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  onClick={toggleTheme}>
                        Dark Mode
                    </button>
                </div>


            </header>

        </>
    )
}
{/* <div class="row dash-title">
            <div class="col">1</div>
            <div class="col-6">1</div>
            <div class="col">1</div>
        </div>
        */}


export default Header