const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-1">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-[1px] bg-zinc-200 dark:bg-zinc-800"></div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-zinc-400 dark:text-zinc-500 text-sm">
              © {currentYear} Jhan Carlos Hernández. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-sm">
              JhanDev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;