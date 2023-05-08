
import Link from 'next/link';

export default function Menu(){
    return(
        <nav className='bg-rosapersonalizado flex items-center justify-around h-16 text-brancopersonalizado uppercase'>  
        <div className='flex'>
            <h1 className='uppercase'>Rillary</h1>
        </div>
        <div>
            <h1>busca</h1>
        </div>
        <div className="flex">
            <ul className='flex flex-row gap-8 uppercase'>
                <li> home</li>
                <li> LOGIN</li>
                <li> home</li>
                <li> home</li>
            </ul>
        </div>

        <div>
            carrinho

        </div>
          
        </nav> 
    )
}