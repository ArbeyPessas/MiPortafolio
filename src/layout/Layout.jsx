import Header from './header/Header'
import Footer from './footer/Footer'
import "./Layout.css";


export default function Layout({ children }) {
return (
<div className="layout-container min-h-screen flex flex-col bg-gray-100">
<Header />
<main className="flex-1 p-6 max-w-5xl mx-auto">{children}</main>
<Footer />
</div>
)
}