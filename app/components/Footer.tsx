export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Rakesh Kumar. All rights reserved.</p>
        <div className="mt-4 space-y-2 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
          <a href="mailto:rakeshkumarme53@gmail.com" className="hover:underline block sm:inline">
            rakeshkumarme53@gmail.com
          </a>
          <a href="tel:+916299809015" className="hover:underline block sm:inline">
            +91 6299809015
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh963150"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block sm:inline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rakeshkumarme53"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block sm:inline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

