import NavPages from "@/component/shared/NavPages";



export default function DetailLayout({ children }) {
    return (
        <>
            <NavPages addStyle={""} />
            <main>{children}</main>
        </>
    )
}