import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Book } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show {
  id: Book['id']
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as Book[]
  private book = {} as Book

  public get $all() {
    return this.books
  }

  public get $single() {
    return this.book
  }

  @Mutation
  private SET_ALL(books: Book[]) {
    this.books = books
  }

  @Mutation
  private SET_SINGLE(book: Book) {
    this.book = book
  }

  @Action
  public async index() {
    try {
      const books = await $axios.$get('/books')
      this.context.commit('SET_ALL', books)
    } catch (error) {
      console.log(`Não foi possivel realizar a listagem de livros: ${error}`)
    }
  }

  @Action
  public async show({ id }: Show) {
    try {
      const book = await $axios.$get(`/books/${id}`)
      this.context.commit('SET_SINGLE', book)
    } catch (error) {
      console.log(`Não foi possivel realizar a requisição do livro: ${error}`)
    }
  }
}
