import Link from 'next/link'

const ResturantHeader=()=>{
    return(

        <>
        <div className='header-wrapper'>
            <div className="logo">
<img style={{width:100}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgB20RfbGu3a3oJslOR9bfJjR1mYcrNT7xNw&s"></img>
            </div>

            <ul className='header-wrapper ul'>
                <li className='header-wrapper ul li'>
                    <Link className='.header-wrapper ul li a' href="/">Home</Link>
                </li>
                <li className='header-wrapper ul li'>
                    <Link className='.header-wrapper ul li a' href="/">Login/SignUp</Link>
                </li>
                <li className='header-wrapper ul li'>
                    <Link className='.header-wrapper ul li a' href="/">Profile</Link>
                </li>
            </ul>
        </div>
        
        </>
    )
}

export default ResturantHeader