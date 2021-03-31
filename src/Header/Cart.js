import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { DeleteCard } from "../action";
import { reduction } from "../action";
import { increase } from "../action";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const FlexContent = styled.div``;
const Title = styled.div`
  font-size: 2rem;
  letter-spacing: 1px;
`;
const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
  color: #b30000;
  font-size: 20px;
  cursor: pointer;
`;
const Price = styled.div`
  position: absolute;
  top: 24px;
  right: 51px;
  margin: 5px;
  color: #b30000;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    top: 176px;
}
`;
const Description = styled.p`
  text-align: initial;
  width: 426px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const Div = styled.div`
  display: flex;
  margin: 17px;
`;
const Span = styled.span`
  margin: 0 10px;
`;
function Cart({ shoppingCard }) {
  const dispatch = useDispatch();
  if (shoppingCard.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Nothing Products</h2>;
  } else {
    return (
      <div>
        {shoppingCard.map((card) => {
          return (
            <Card className="my-3 p-3 rounded">
              <Flex>
                <FlexContent>
                  <Card.Img
                    src={card.image}
                    style={{ width: "230px", height: "180px" }}
                    variant="top"
                  />
                </FlexContent>
                <FlexContent>
                  <Card.Body>
                    <Card.Title as="div">
                      <Title> {card.name} </Title>
                    </Card.Title>
                    <Description>{card.description}</Description>
                  </Card.Body>
                  <Icon>
                    <i
                      className="fa fa-close"
                      onClick={() => dispatch(DeleteCard(card._id))}
                    ></i>
                  </Icon>
                  <Price>${card.price * card.count}</Price>
                  <Div>
                    <button
                      style={{ width: "30px", height: "30px" }}
                      onClick={() => dispatch(reduction(card._id))}
                    >
                      -
                    </button>
                    <Span>{card.count}</Span>
                    <button
                      style={{ width: "30px", height: "30px" }}
                      onClick={() => dispatch(increase(card._id))}
                    >
                      +
                    </button>
                  </Div>
                </FlexContent>
              </Flex>
            </Card>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    shoppingCard: state.Shopp,
  };
};
export default connect(mapStateToProps)(Cart);
