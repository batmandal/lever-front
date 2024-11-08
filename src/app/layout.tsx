"use client";

// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { theme } from "@/theme";
import { Footer, Header } from "@/components";
import { usePathname } from "next/navigation";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideHeaderFooter =
    pathname === "/auth/login" || pathname === "/auth/signup";
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Stack bgcolor={"background.default"}>
              {!hideHeaderFooter && <Header />}
              {children}
              {!hideHeaderFooter && <Footer />}
            </Stack>
          </ThemeProvider>
          <CssBaseline />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
