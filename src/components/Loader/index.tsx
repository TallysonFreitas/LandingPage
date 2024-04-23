import { trefoil } from 'ldrs'
import * as S from './style'

const Loader = () => {
  trefoil.register()
  return (
    <S.Container>
      <l-trefoil
        size="40"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.4"
        color="black"
      ></l-trefoil>
      <p className="lead fw-semibold">loading...</p>
    </S.Container>
  )
}

export default Loader
