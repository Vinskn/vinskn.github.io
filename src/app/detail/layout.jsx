import NavPages from "@/component/NavPages";


export default function DetailLayout({ children }) {
    return (
        <>
            <NavPages />
            <main>{children}</main>
        </>
    )
}