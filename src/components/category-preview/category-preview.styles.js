import styled from 'styled-components';

export const CategoryPreviewContainer = styled.section `
 display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Title = styled.span `
font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`
export const Preview = styled.section `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  `
