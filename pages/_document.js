import Document from 'next/document'
import { resetServerContext } from 'react-beautiful-dnd'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    resetServerContext()

    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      })

    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDocument