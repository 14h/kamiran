import Meta from '../components/meta'

export default function Layout({children}) {
    return (
        <>
            <Meta/>
            <div className="min-h-screen bg-black">
                <main>{children}</main>
            </div>
        </>
    )
}
