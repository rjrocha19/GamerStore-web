import type Pacificable from '@/core/product/Pacificable'
import type Specification from '@/core/product/Specification'

export default interface Product extends Pacificable {
  id: string
  name: string
  description: string
  mark: string
  model: string
  image: string
  remark: number
  videoReview: string
  tags: string[]
  specification: Specification
}
