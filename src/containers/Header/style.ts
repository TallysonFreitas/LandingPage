import styled from 'styled-components'

export const Container = styled.header`\
background-color:rgba(160,160,160, 0.1);

  backdrop-filter: blur(16px);
  -webkit-filter: blur(10px); /* Webkit + Blink (Chrome, Safari, etc) */
  -webkit-filter: blur(10px); /* Webkit + Blink (Chrome, Safari, etc) */
  -ms-filter: 'progid:DXImageTransform.Microsoft.Blur(PixelRadius=10)'; /* IE 8 */
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='10'); /* IE 7 < */
  filter: url(blur-filter.svg#10); /* Firefox */
`
