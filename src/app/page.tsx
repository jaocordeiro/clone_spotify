import Navigation from "@/components/Navigation";
import Playlist from "@/components/Playlist";
import { mockNavigation, mockLibrary } from "@/mock/mock";
import ChevronLeftIcon from "@/components/Svgs/ChevronLeft";
import ChevronRightIcon from "@/components/Svgs/ChevronRight";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 p-6 text-white">
          <Navigation
            mockNavigation={mockNavigation}
            mockLibrary={mockLibrary}
          />
        </aside>

        <main className="flex-1 p-6 text-white bg-gradient-to-b from-sfPurpleDark from-10% via-sfBlack to-sfBlack">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-sfBlackLight p-1">
              <ChevronLeftIcon />
            </button>
            <button className="rounded-full bg-sfBlackLight p-1">
              <ChevronRightIcon />
            </button>
          </div>
          <p className="text-3xl font-bold mt-8">Seja-bem vindo</p>
          <Playlist mockLibrary={mockLibrary} />
        </main>
      </div>
      <footer className="bg-sfBlackLight border-t border-gray-900 p-6 text-white">
        footer
      </footer>
    </div>
  );
}
