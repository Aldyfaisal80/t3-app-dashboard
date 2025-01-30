export const Footer = () => {
    return (
        <footer className="py-2 text-blue-gray-400">
            <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                <p className="block text-sm leading-normal">
                    © 2023, made with ❤️ by <a href="https://www.creative-tim.com" target="_blank" className="hover:text-blue-500">Creative Tim</a>
                </p>
                <ul className="flex items-center gap-4">
                    <li><a href="#" className="hover:text-blue-500">Creative Tim</a></li>
                    <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                    <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                    <li><a href="#" className="hover:text-blue-500">License</a></li>
                </ul>
            </div>
        </footer>
    )
};