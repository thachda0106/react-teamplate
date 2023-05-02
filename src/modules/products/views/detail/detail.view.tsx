import React from "react";

import { Wrapper } from "../itemlist/itemlist.styles";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  return <Wrapper>Product Detail: {id}</Wrapper>;
};

export default ProductDetail;
