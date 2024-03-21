
function child(props) {
    return (
        <>
            <div className="card" style={{backgroundImage:`url(${props.img})`}}>
                <div className="top">
                    <span className="name">{props.name}</span><br />
                    <span className="time">{props.time}</span>
                    
                </div>
                <div className="bottom">
                    <span className="caption">{props.caption}</span>
                </div>
            </div>
        </>
    )
}
export default child