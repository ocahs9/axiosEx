
import { faBasketShopping, faHome, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Home.styled";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to={"/"}><S.Header>Shopping Mall</S.Header></Link>
      <S.Body>
        <S.Button onClick={()=>{navigate("/items")}}>
          <FontAwesomeIcon icon={faBasketShopping} fontSize={`4rem`} fade/>
          <S.ButtonTitle>Items</S.ButtonTitle>
          <span>상품 등록과 조회, 재고관리</span>
          </S.Button>
        <S.Button onClick={()=>{navigate("/members")}}>
          <FontAwesomeIcon icon={faPerson} fontSize={`4rem`} fade/>
          <S.ButtonTitle>Members</S.ButtonTitle>
          <span>사용자 등록과 조회</span>
        </S.Button>
        <S.Button onClick={()=>{navigate("orders")}}>
          <FontAwesomeIcon icon={faHome} fontSize={`4rem`} fade/>
          <S.ButtonTitle>Homes</S.ButtonTitle>
          <span>주문 등록과 조회</span>
        </S.Button>
      </S.Body>
    </div>
  )
}

export default Home
