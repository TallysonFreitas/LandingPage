import { ContainerLinguagemItem } from './style'

const LinguagemIcon = ({
  children,
  language,
  description
}: {
  children: React.ReactNode
  language: string
  description: string
}) => {
  return (
    <ContainerLinguagemItem
      title={language}
      data-aos="zoom-in"
      className="bg-white p-2 rounded shadow mt-3 d-flex"
    >
      <div>
        {children}
        <h4 className="lead fw-semibold">{language}</h4>
        <p>{description}</p>
      </div>
    </ContainerLinguagemItem>
  )
}

export default LinguagemIcon
