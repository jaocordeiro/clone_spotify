import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Playlist from "@/components/Playlist";
import MostPlayed from "@/components/MostPlayed";
import Footer from "@/components/Footer";
import { mockNavigation, mockLibrary, mockMostPlayed } from "@/mock/mock";

export default function Home() {
  const library = mockLibrary().slice(0, 6);
  const mostPlayed = mockMostPlayed().slice(0, 5);
  const mostPlayed2 = mockMostPlayed().slice(6, 11);
  const mostPlayed3 = mockMostPlayed().slice(11, 16);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-1/5 p-6 text-white">
          <Navigation
            mockNavigation={mockNavigation()}
            mockLibrary={mockLibrary()}
          />
        </aside>

        <main className="flex-1 text-white bg-gradient-to-b from-sfPurpleDark from-10% via-sfBlack to-sfBlack">
          <Header />
          <p className="text-3xl font-bold mt-8 p-6">Seja-bem vindo</p>
          <Playlist mockLibrary={library} />

          <MostPlayed
            mostPlayed={mostPlayed}
            titlePlayed="Suas músicas favoritas"
            className="flex gap-5"
          />
          <MostPlayed
            mostPlayed={mostPlayed2}
            titlePlayed="Escute sempre que quiser"
            className="flex gap-5"
          />
          <MostPlayed
            mostPlayed={mostPlayed3}
            titlePlayed="Melhores Artista - Top 10"
            className="mb-32 flex gap-5"
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}
