const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-1">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-[1px] bg-gray-700"></div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jhan Carlos Hernández. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-gray-400 text-sm">
              JhanDev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;