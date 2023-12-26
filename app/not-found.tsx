import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="text-center h-[60vh] flex justify-center flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Not Found</h2>
            <p className="text-gray-500">Could not find the requested resource</p>
            <Link href="/">
                Go Home
            </Link>
        </div>
    )
}