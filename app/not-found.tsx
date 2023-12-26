import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="text-center h-[60vh] flex justify-center flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
            <Link className='underline' href="/">
                Go Home
            </Link>
        </div>
    )
}