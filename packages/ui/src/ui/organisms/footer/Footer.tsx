import {
  Discord,
  Github,
  LinkedIn,
  Mail,
  Telegram,
  TwitterX,
} from "../../icons";

export const Footer = () => {
  return (
    <footer className="bg-card  mt-auto w-full">
      <div className="max-w-6xl border-t border-border dark:border-slate-700/30 mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 [text-shadow:0px_1px_2px_rgba(0,0,0,0.15),0px_2px_5px_rgba(0,0,0,0.1)]">
              DLV Labs
            </h3>
            <p className="text-sm dark:text-slate-300">
              DLVlabs specializes in Cosmos SDK, CometBFT, and IBC, delivering
              infrastructure and development support for blockchain ecosystems.
            </p>
            <div className="flex gap-4 mt-4 items-center">
              <Github className="dark:text-slate-200" />
              <TwitterX className="dark:text-slate-200" />
              <Discord className="dark:text-slate-200" />
              <LinkedIn className="dark:text-slate-200" />
              <Telegram className="dark:text-slate-200" />
              <Mail className="dark:text-slate-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground dark:text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-700 dark:text-slate-300 hover:text-secondary dark:hover:text-slate-100 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground dark:text-slate-200">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-700 dark:text-slate-300 hover:text-secondary dark:hover:text-slate-100 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-2 pt-2 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm dark:text-slate-400">
            &copy; 2025 DLV Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
