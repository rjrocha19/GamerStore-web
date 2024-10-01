import type { Produto } from '@/core'

export interface ProdutoItemProps {
  produto: Produto
}

export function ProdutoItem(Props: ProdutoItemProps) {
  const { produto } = Props
  return <div>{produto.nome}</div>
}
