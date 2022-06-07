import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { Context } from 'src/context'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
}

export type CartItem = {
  __typename?: 'CartItem'
  createdAt: Scalars['Date']
  product: Product
  quantity: Scalars['Int']
}

export type CartResponse = {
  __typename?: 'CartResponse'
  cartItems: Array<CartItem>
  totalPrice: Scalars['Int']
  totalQuantity: Scalars['Int']
  user: User
}

export type Mutation = {
  __typename?: 'Mutation'
  addToCart?: Maybe<CartItem>
  createOrder?: Maybe<CartResponse>
  deleteCartItem?: Maybe<Scalars['Boolean']>
  login?: Maybe<Token>
  removeFromCart?: Maybe<Scalars['Boolean']>
  signup?: Maybe<Token>
}

export type MutationAddToCartArgs = {
  productId: Scalars['ID']
}

export type MutationDeleteCartItemArgs = {
  productId: Scalars['ID']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationRemoveFromCartArgs = {
  productId: Scalars['ID']
}

export type MutationSignupArgs = {
  email: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
}

export type OrderItem = {
  __typename?: 'OrderItem'
  createdAt: Scalars['Date']
  id: Scalars['Int']
  product: Product
  quantity: Scalars['Int']
}

export type OrderResponse = {
  __typename?: 'OrderResponse'
  orderItems: Array<OrderItem>
  totalPrice: Scalars['Int']
  totalQuantity: Scalars['Int']
  user: User
}

export type Product = {
  __typename?: 'Product'
  category: Scalars['String']
  createdAt: Scalars['Date']
  description: Scalars['String']
  id: Scalars['ID']
  image: Scalars['String']
  name: Scalars['String']
  price: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  cart: CartResponse
  me?: Maybe<User>
  order: OrderResponse
  product?: Maybe<Product>
  products: Array<Product>
  users: Array<User>
}

export type QueryProductArgs = {
  id: Scalars['ID']
}

export type QueryProductsArgs = {
  category?: InputMaybe<Scalars['String']>
  count?: InputMaybe<Scalars['Int']>
}

export type Token = {
  __typename?: 'Token'
  accessToken: Scalars['String']
  refreshToken: Scalars['String']
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['Date']
  email: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  CartItem: ResolverTypeWrapper<CartItem>
  CartResponse: ResolverTypeWrapper<CartResponse>
  Date: ResolverTypeWrapper<Scalars['Date']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Mutation: ResolverTypeWrapper<{}>
  OrderItem: ResolverTypeWrapper<OrderItem>
  OrderResponse: ResolverTypeWrapper<OrderResponse>
  Product: ResolverTypeWrapper<Product>
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  Token: ResolverTypeWrapper<Token>
  User: ResolverTypeWrapper<User>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']
  CartItem: CartItem
  CartResponse: CartResponse
  Date: Scalars['Date']
  ID: Scalars['ID']
  Int: Scalars['Int']
  Mutation: {}
  OrderItem: OrderItem
  OrderResponse: OrderResponse
  Product: Product
  Query: {}
  String: Scalars['String']
  Token: Token
  User: User
}

export type CartItemResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']
> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CartResponseResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CartResponse'] = ResolversParentTypes['CartResponse']
> = {
  cartItems?: Resolver<
    Array<ResolversTypes['CartItem']>,
    ParentType,
    ContextType
  >
  totalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addToCart?: Resolver<
    Maybe<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddToCartArgs, 'productId'>
  >
  createOrder?: Resolver<
    Maybe<ResolversTypes['CartResponse']>,
    ParentType,
    ContextType
  >
  deleteCartItem?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCartItemArgs, 'productId'>
  >
  login?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'email' | 'password'>
  >
  removeFromCart?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveFromCartArgs, 'productId'>
  >
  signup?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<MutationSignupArgs, 'email' | 'name' | 'password'>
  >
}

export type OrderItemResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']
> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type OrderResponseResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['OrderResponse'] = ResolversParentTypes['OrderResponse']
> = {
  orderItems?: Resolver<
    Array<ResolversTypes['OrderItem']>,
    ParentType,
    ContextType
  >
  totalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProductResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  cart?: Resolver<ResolversTypes['CartResponse'], ParentType, ContextType>
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  order?: Resolver<ResolversTypes['OrderResponse'], ParentType, ContextType>
  product?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductArgs, 'id'>
  >
  products?: Resolver<
    Array<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    Partial<QueryProductsArgs>
  >
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>
}

export type TokenResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']
> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = Context> = {
  CartItem?: CartItemResolvers<ContextType>
  CartResponse?: CartResponseResolvers<ContextType>
  Date?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  OrderItem?: OrderItemResolvers<ContextType>
  OrderResponse?: OrderResponseResolvers<ContextType>
  Product?: ProductResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Token?: TokenResolvers<ContextType>
  User?: UserResolvers<ContextType>
}
