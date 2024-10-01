import type Especificacoes from './especificacoes'
import type Precificavel from './precificacoes'

export default interface Produto extends Precificavel {
  id: string
  nome: string
  descricao: string
  marca: string
  modelo: string
  imagem: string
  nota: string
  videoReview: string
  tags: string[]
  especificacoes: Especificacoes
}
