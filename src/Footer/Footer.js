import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";

export default function CommonFooter() {
  return (
    <div>
      <Footer
        columns={[
          {
            title: "CheqIt",
            url: "CHEQIT.COM",
            items: [
              { title: "Anti-Counterfeiting solutions to protect your brand" },
              { title: "Pune, India" },
            ],

            openExternal: true,
          },
          {
            title: "Useful Links",
            items: [
              {
                title: "Get Demo",
                url: "/try",
                openExternal: false,
              },
              {
                title: "About Us",
                url: "/about",
                openExternal: false,
              },
              {
                title: "Dashboard",
                url: "/login",
                openExternal: false,
              },
              {
                title: "Vector Credits",
                url: "/credit",
                openExternal: true,
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                icon: <i class="fa foot fa-envelope-o" aria-hidden="true"></i>,
                title: "info@cheqit.in",
              },
              {
                icon: <i class="fa foot fa-instagram" aria-hidden="true"></i>,
                title: "cheqitco",
                url: "https://www.instagram.com/cheqitco/",
                openExternal:true
              },
              {
                icon: (
                  <i class="fa foot fa-linkedin-square" aria-hidden="true"></i>
                ),

                title: "cheqit-co",
                url: "https://www.linkedin.com/in/cheqit-co-1b59371b7",
                openExternal:true
              },
            ],
          },
        ]}
        backgroundColor="#001449"
      />
    </div>
  );
}
