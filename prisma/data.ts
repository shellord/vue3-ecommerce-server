import { Prisma } from '@prisma/client'

export const products: Prisma.ProductCreateInput[] = [
  {
    name: 'Shirt slim fit',
    price: 10,
    description: 'Comfortable shirt for women. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'FEMALE',
  },
  {
    name: 'Broken Saints Shirt Black',
    price: 20,
    description: 'Comfortable shirt for women. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1606115757624-6b9bfe9fa5e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'FEMALE',
  },
  {
    name: 'Just Culture Shirt',
    price: 40,
    description: 'Comfortable shirt for men. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'MALE',
  },
  {
    name: 'Casual Shirt Black',
    price: 20,
    description: 'Comfortable shirt for men. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
    category: 'MALE',
  },
  {
    name: 'Casual Shirt White',
    price: 20,
    description: 'Comfortable shirt for men. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'MALE',
  },
  {
    name: 'Animal Love Shirt White',
    price: 35,
    description: 'Comfortable shirt for women. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1606430597633-c83e078c30a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'FEMALE',
  },
  {
    name: 'Casual Shirt White',
    price: 20,
    description: 'Comfortable shirt for women. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1623113562225-694f6a2ee75e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'FEMALE',
  },
  {
    name: 'Casual Shirt Black',
    price: 20,
    description: 'Comfortable shirt for women. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'FEMALE',
  },
  {
    name: 'Brinton Casual Shirt Black',
    price: 20,
    description: 'Comfortable shirt for men. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1603065881771-8aa5eb1ed8bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80',
    category: 'MALE',
  },
  {
    name: 'Copenhagen Shirt White',
    price: 30,
    description: 'Comfortable shirt for women. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'FEMALE',
  },
  {
    name: 'Ok Boomer Shirt Black',
    price: 40,
    description: 'Comfortable shirt for men. Slim fit. 100% cotton',
    image:
      'https://images.unsplash.com/photo-1580598302731-b98fbf7191a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'MALE',
  },
]
