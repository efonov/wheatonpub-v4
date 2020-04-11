import styled from "styled-components";
import * as React from "react";
import { Link } from "gatsby"

export const StyledLink = styled(props => <Link {...props} />)`
  color: #e5e5e5;
  text-decoration: none;
  position: relative;
  z-index: 10;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  color: #e5e5e5;
  text-decoration:hover: underline;
`;
