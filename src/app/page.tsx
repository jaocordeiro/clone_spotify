import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 p-6 text-white">
          <Navigation />
        </aside>
        <main className="flex-1 p-6 text-white bg-gradient-to-b from-sfPurpleDark from-10% via-sfBlack to-sfBlack">
          main
        </main>
      </div>
      <footer className="bg-sfBlackLight border-t border-gray-900 p-6 text-white">
        footer
      </footer>
    </div>
  );
}
