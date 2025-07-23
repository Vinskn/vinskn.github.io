import Link from "next/link";


export default function Footer({  }) {
    
    return(
        <footer className="h-[60vh] flex flex-col justify-center items-center px-10 relative">
            <h2 className="lg:text-xl text-sm text-textSec">Have a Project in Mind? Let's bring your ideas to life</h2>
            <Link href='/#contact'>
                <span className="text-5xl font-bold mt-3 block hover:underline underline underline-offset-2 lg:no-underline">Get in Touch</span>
            </Link>
            <div className="border-t-2 w-9/10 py-3 mb-3 absolute bottom-0">
                <p className="text-center text-textSec">Made with NAVA System</p>
            </div>
        </footer>
    )
}