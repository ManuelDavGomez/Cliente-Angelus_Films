import Galery from "./components/galery/Galery.jsx";
import Hero from "./components/hero/Hero.jsx";
import Client from "./components/clientes/client.jsx";
import Profile from "./components/profile/Profile.jsx";


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Galery />
        <Client />
        <Profile />
      </main>
    </>
  );
}
