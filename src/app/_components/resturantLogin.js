const ResturantLogin = () => {
    return (

        <>
            <h3>
                Login component
                <div>
                    <div className="input-wrapper">

                        <input className="input-field" type="text" placeholder="Enter mail id" />
                    </div>
                    <div className="input-wrapper">
                        <input className="input-field" type="password" placeholder="Enter password" />
                    </div>
                    <div className="input-wrapper">
                        <button className="button" type="submit">Login</button>
                    </div>
                </div>

            </h3>
        </>
    )
}

export default ResturantLogin