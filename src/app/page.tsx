import { ProdutoItem } from '@/components/produto/produto-item'
import { produtos } from '@/core'

export default function Home() {
  return (
    <div className='grid grid-cols-4'>
      {produtos.map(produto => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  )
}
