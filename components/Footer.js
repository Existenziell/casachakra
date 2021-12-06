const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full py-2 border-t static bottom-0 text-xs dark:bg-gray-700">
      <a
        className="flex items-center justify-center"
        href="https://www.christof.digital"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="min-w-max">Developed by</span>{' '}<img src="/lotus.jpg" alt="Lotus" className="h-6 ml-2" />
      </a>
    </footer>
  )
}

export default Footer
