import { produtos } from '@/core'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function PaginaProduto(props: any) {
  const id = +props.params.id
  const produto = produtos.find(produto => produto.id === id)
  return (
    <div>
      <h1>Produto: {produto?.nome}</h1>
    </div>
  )
}
