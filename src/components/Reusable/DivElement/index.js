import styled, { css } from "styled-components";

const DivElement = styled.div`
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
  position: ${(props) => (props.position ? props.position : "")};
  display: ${(props) => (props.display ? props.display : "")};
  top: ${(props) => (props.top ? props.top : "")};
  right: ${(props) => (props.right ? props.right : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  left: ${(props) => (props.left ? props.left : "")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ""};

  ${(props) =>
    props.displayBtw &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`;

export default DivElement;
