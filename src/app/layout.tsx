import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GDG on Campus - Dronacharya College of Engineering",
    template: "%s | GDG on Campus DCE",
  },
  description:
    "Official website of GDG on Campus at Dronacharya College of Engineering. Join our community to learn, build, and grow with Google technologies.",
  keywords: [
    "GDG",
    "Google Developer Groups",
    "GDG DCE",
    "Dronacharya College of Engineering",
    "Developer community",
    "Tech events",
    "Workshops",
    "Google Cloud",
    "Android",
    "Web development",
  ],
  authors: [{ name: "GDG DCE Team" }],
  creator: "GDG DCE",
  publisher: "GDG DCE",
  openGraph: {
    title: "GDG on Campus DCE",
    description:
      "Learn, build, and grow with GDG on Campus at Dronacharya College of Engineering.",
    url: "https://gdgdce.netlify.app", // Replace with your real domain
    siteName: "GDG on Campus DCE",
    images: [
      {
        url: "/og.jpg", // Add this image in /public
        width: 1200,
        height: 630,
        alt: "GDG on Campus DCE",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDG on Campus DCE",
    description:
      "Official site of GDG on Campus at Dronacharya College of Engineering.",
    images: ["/og.jpg"],
    creator: "@gdg_dce", // Replace with your handle if available
  },
  metadataBase: new URL("https://gdgdce.netlify.app"), // Update domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-grotesk">
        {children}
      </body>
    </html>
  );
}
