
export default function Conocimientos(props) {
  return (
   
      
   <div className="col-lg-3 ml-5 pb-4 ">
          <img
        src={props.skills.img}
        alt=""
        style={{ width: "70px", height: "70px" }}
      />
      <p className="texto pt-2">{props.skills.name}</p>
   </div>   
  
  );
}
