import { useParams } from "react-router"

export default function City() {

    const {city} = useParams();
    // console.log(params);
    

  return (
    <div>
        <h2>{city}의 콘서트 목록</h2>
    </div>
  )
}