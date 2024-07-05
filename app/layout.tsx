import type { Metadata } from "next";
import "./globals.css";
import {problems} from "@/app/data/problems";

const problemsCount = Object.values(problems).length;

export const metadata: Metadata = {
  title: `Carte de la honte : ${problemsCount} preuves que le RN est toujours...`,
  description: `${problemsCount} preuves que le RN est encore affilié à des régimes autoritaires, climatosceptique, conspirationniste, contre votre santé, coupable de fraude, homophobe, négationniste, opposé aux droits des femmes, raciste et antisémite, sexiste, suprémaciste, violent, voire tout à la fois.`,

  twitter: {
    card: 'summary_large_image',
    title: `Carte de la honte : ${problemsCount} preuves que le RN est...`,
    description: `${problemsCount} preuves que le RN est toujours...`,
    images: ['https://cartedelahonte.github.io/static/social-card.png'],
  },

  openGraph: {
    title: `Carte de la honte : ${problemsCount} preuves que le RN est..`,
    description: `${problemsCount} preuves que le RN est toujours...`,
    type: "website",
    url: "https://cartedelahonte.github.io/",
    images: [
      'https://cartedelahonte.github.io/static/social-card.png',
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
