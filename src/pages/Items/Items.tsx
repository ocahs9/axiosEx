import { faBasketShopping, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import * as S from "./Item.styled"

const Items = () => {
  return (
    <>
    <S.Header>
      <S.FixedButton>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faChevronLeft} fontSize={50} />
        </Link>
      </S.FixedButton>
      <FontAwesomeIcon icon={faBasketShopping} fontSize={50} />
    </S.Header>
    <S.Body>
      
    </S.Body>
    </>
    
    

  )
}

export default Items
