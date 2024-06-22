const ResturantSignUp =()=>{
    return(

        <>
      <h3>Sign Up</h3>

      <div>
    <div  className="input-wrapper">

        <input className="input-field" type ="text" placeholder="Enter mail id"/>
    </div>
    <div  className="input-wrapper">
        <input className="input-field"type ="password" placeholder="Enter password"/>
    </div>
    <div  className="input-wrapper">
        <input className="input-field"type ="password" placeholder="Confirm password"/>
    </div>
    <div  className="input-wrapper">
        <input className="input-field"type ="text" placeholder="Enter resturant name"/>
    </div>
    <div  className="input-wrapper">
        <input className="input-field"type ="text" placeholder="Enter city"/>
    </div>
    <div  className="input-wrapper">
        <input className="input-field"type ="text" placeholder="Enter full address"/>
    </div>
    <div  className="input-wrapper">
        <input className="input-field"type ="text" placeholder="Enter contact Number"/>
    </div>
    <div  className="input-wrapper">
        <button className="button" type="submit">Sign Up</button>
    </div>
</div>
        </>
    )
}

export default ResturantSignUp