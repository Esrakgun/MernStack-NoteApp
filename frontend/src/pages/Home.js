

import { useEffect,useState } from "react";
import NotDetay from "../components/NotDetay";
import NotForm from './../components/NotForm';

export default function Home() {
  const [notlar,setNotlar]=useState(null);

  useEffect(()=>{
    const fetchNotlar= async()=>{
      const res=await fetch('/api/notlar');
      // console.log(res);
      
      const json=await res.json();
      // console.log(json);

      if(res.ok){
        setNotlar(json);
      }
    }

    fetchNotlar();

  },[]);

  return (
    <div className="home">
      <div className="not-form"><NotForm/></div>
      <div className="notlar">
           {notlar && notlar.map((note)=>(
            // <p key={note._id}>{note.title}</p>
            <NotDetay key={note._id} note={note}/>
           ))}
      </div>
    </div>
  );
}
