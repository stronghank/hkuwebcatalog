const FooterCopyright = () => (
  <div className="footer-copyright text-white">
    ©{new Date().getFullYear()} Li Ka Shing Faculty of Medicine, The University
    of Hong Kong. All rights reserved.
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-white;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
