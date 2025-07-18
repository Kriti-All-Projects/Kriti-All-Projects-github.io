import React from 'react';

const Navigation: React.FC = () => {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#training', label: 'Training' },
    { href: '#activities', label: 'Activities' },
    { href: '#industrial-tour', label: 'Industrial Tour' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-gray-900 py-4 shadow-2xl sticky top-0 z-50 border-b border-cyan-500/30">
      <div className="container mx-auto px-5">
        <ul className="flex justify-center gap-8 flex-wrap">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 border border-transparent hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;