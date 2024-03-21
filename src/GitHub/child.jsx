function child(props){
    return(
        <>
            <div className="card">
                <center>
                <img className="card-img" src={props.avtar}/>
                
                <h3 className="card-title"> {props.name}</h3>
                </center>
                <p className="card-text">Id :  {props.id}</p>
                <p className="card-text">Gender : {props.gender}</p>
                <p className="card-text">Fav_Comapany : {props.Fcom}</p>
                <p className="card-text">Mail-Id : {props.mail}</p>
                <p className="card-text">Date Of Birth : {props.bdate}</p>


                {/* <p className="card-text">hello this is the first vite project and my name is sanjana yashwant hodbe from tybca </p> */}
            </div>
        </>
    )
}
export default child