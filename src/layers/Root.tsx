import { Outlet } from "react-router-dom"
import { Layout } from "components"
import type { FC } from "react"

export const Root: FC = () => (
  <Layout.Container>
    <Layout.Header />
    <Layout.Navigation />
    <Layout.Content>
      <Outlet />
    </Layout.Content>
    <Layout.Footer />
  </Layout.Container>
)
