import { ContainerLinguagemItem } from './style'

const LinguagemIcon = ({
  children,
  linguagem
}: {
  children: React.ReactNode
  linguagem: string
}) => {
  return (
    <ContainerLinguagemItem
      title={linguagem}
      data-aos="zoom-in"
      className="bg-white p-2 rounded shadow mt-3 d-flex"
    >
      {children}
      <p className="lead fw-semibold">{linguagem}</p>
    </ContainerLinguagemItem>
  )
}

export default LinguagemIcon
