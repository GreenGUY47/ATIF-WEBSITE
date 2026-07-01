const footerColumns = [
  {
    title: 'COMPANY',
    links: [
      { label: 'HOME', href: '#' },
      { label: 'ABOUT', href: '#' },
      { label: 'PRODUCTS', href: '#' },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'CONTACT', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'SHIPPING', href: '#' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'PRIVACY', href: '#' },
      { label: 'TERMS', href: '#' },
      { label: 'RETURNS', href: '#' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="w-full bg-blue-600 dark:bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between">
        <h1 className="text-lg font-bold">SMOKE_CENTER</h1>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold tracking-wide opacity-80 mb-3">
                {col.title}
              </h2>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:underline text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/20 px-5 py-4 text-center text-xs opacity-80">
        © {new Date().getFullYear()} LOGO. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer